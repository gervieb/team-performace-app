import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

interface IModal {
    isOpen: boolean
    onClose: () => void
}

const ModalComponent = ({ isOpen, onClose }: IModal) => {
    const [isMobile, setIsMobile] = useState(false)

    const handleResize = () => {
        if (window.innerWidth < 480) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    });

    return (
        <Modal
            isCentered
            onClose={onClose}
            isOpen={isOpen}
            motionPreset='slideInBottom'
            size={isMobile ? 'xs' : 'lg'}
        >
            <ModalOverlay />
            <ModalContent className='content'>
                <ModalHeader>Thanks for taking the Team Performance Test!</ModalHeader>
                <ModalBody>

                    <p>Your hard work was worth it.</p>
                </ModalBody>
                <ModalFooter>
                    <button
                        className='tertiary-btn border small'
                        onClick={onClose}
                    >Close</button>
                    <Link
                        href='/result'
                        passHref
                    >
                        <button className='secondary-btn small'>View Result</button>
                    </Link>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ModalComponent