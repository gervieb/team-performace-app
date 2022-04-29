import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { ISurvey } from 'types/Survey'

import {
    CircularProgress,
    CircularProgressLabel,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Center,
} from '@chakra-ui/react'

interface IPreview {
    isOpen: boolean
    onClose: () => void
}

const Preview = ({ isOpen, onClose }: IPreview) => {

    const { data } = useSelector((state: RootState) => state.surveyData);

    return (
        <Drawer
            onClose={onClose}
            isOpen={isOpen}
            size='sm'
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader>Preview Survey</DrawerHeader>
                <DrawerBody>
                    {data?.map((el: ISurvey) => (
                        <div key={el.questionId} className='preview'>
                            <Center>
                                <CircularProgress
                                    value={Number(el.answer)}
                                    color='green.400'>
                                    <CircularProgressLabel>{el.answer}%</CircularProgressLabel>
                                </CircularProgress>
                            </Center>
                            <p className='preview-question'>
                                {el.questionId}. {el.question}
                            </p>
                        </div>
                    ))}
                </DrawerBody>
                <button
                    className='secondary-btn medium close'
                    style={{ marginBottom: 0 }}
                    onClick={onClose}
                >Close</button>
            </DrawerContent>
        </Drawer>
    )
};

export default Preview