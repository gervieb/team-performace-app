import React from 'react'
import { CloseIcon } from '@chakra-ui/icons'
import { Progress } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

import { RootState } from 'redux/store'
import { useReset } from 'hooks/useReset';


const Header = () => {
    const router = useRouter()
    const reset = useReset();

    const { data, total } = useSelector((state: RootState) => state.surveyData);

    const handleClose = () => {
        reset();
        router.push('/')
    }

    return (
        <div className='header'>
            <div className='container'>
                <CloseIcon
                    className='pointer'
                    onClick={handleClose}
                />
                <p>{total} out of {data?.length} answered</p>
            </div>
            <Progress
                size='xs'
                min={0}
                max={data?.length}
                value={total}
            />
        </div>
    )
}

export default Header