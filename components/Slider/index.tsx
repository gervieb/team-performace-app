import React from 'react'
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
} from '@chakra-ui/react'
import { setAnswer } from 'redux/reducers/surveyReducer'
import { ISurvey } from 'types/Survey'
import { useDispatch } from 'react-redux'

interface ISliderProps {
    scrollWin: () => void
    question: ISurvey
}

const SliderComponent = ({ scrollWin, question }: ISliderProps) => {

    const dispatch = useDispatch();

    const handleSlide = (val: number) => {
        dispatch(setAnswer({
            id: question.questionId,
            answer: val,
        }))
        scrollWin();
    }

    return (
        <div className='slider'>
            <Slider
                id='slider'
                defaultValue={question.answer}
                min={0}
                max={100}
                colorScheme='gray'
                onChange={handleSlide}
            >
                <SliderMark
                    value={25}
                    mt='2'
                    ml='-2.5'
                    className='slideMark'
                >
                    25%
                </SliderMark>
                <SliderMark
                    value={50}
                    mt='2'
                    ml='-2.5'
                    className='slideMark'
                >
                    50%
                </SliderMark>
                <SliderMark
                    value={75}
                    mt='2'
                    ml='-2.5'
                    className='slideMark'
                >
                    75%
                </SliderMark>
                <SliderMark
                    value={question.answer}
                    textAlign='center'
                    bg='#ff8c32'
                    color='white'
                    mt='-8'
                    ml='-5'
                    w='10'
                    fontSize='14px'
                >
                    {question.answer}%
                </SliderMark>
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
            </Slider>
            <div className='twoColumns'>
                <i>I Strongly Disagree</i>
                <i>I Strongly Agree</i>
            </div>
        </div>
    )
}

export default SliderComponent;