import React from 'react'
import { Box, Center } from '@chakra-ui/react'

import { ISurvey } from 'types/Survey'
import Slider from 'components/Slider'

const Question = ({ el }: { el: ISurvey }) => {

    const scrollWin = () => {
        setTimeout(() => {
            window.scrollBy(0, 800);
        }, 600);
    }

    return (
        <div className='question'>
            <div
                key={el?.question}
                className='inner-div'
            >
                <div className='box'>
                    <div className='flex'>
                        <Center
                            className='number'
                        >
                            <Box as='span'>
                                {el?.questionId}
                            </Box>
                        </Center>
                        <h2>{el?.question}</h2>
                    </div>
                    <Slider question={el} scrollWin={scrollWin} />
                </div>
            </div>
        </div >
    )
}

export default Question