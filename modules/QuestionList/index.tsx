import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'redux/store'
import Question from 'modules/Question';
import { ISurvey } from 'types/Survey';
import Preview from 'modules/QuestionList/Preview';
import Modal from 'modules/QuestionList/Modal';
import { setTotal } from 'redux/reducers/surveyReducer';

const QuestionList = () => {
    const dispatch = useDispatch();

    const [surveyData, setSurveyData] = useState([])
    const [state, setState] = useState({
        showDrawer: false,
        showModal: false,
        loading: false,
    })

    const { data, total } = useSelector((state: RootState) => state.surveyData);

    const onSubmit = () => {
        setState({ ...state, loading: true });

        setTimeout(() => {
            setState({
                ...state,
                showModal: true,
                loading: false,
            });
        }, 2000);
    }

    useEffect(() => {
        if (data) {
            const res = data.filter((el: ISurvey) => el.isAnswered === true);
            dispatch(setTotal({ val: res.length }))
            setSurveyData(data)
        }
    }, [data, dispatch])

    return (
        <div className='questions'>
            {surveyData.map((el: ISurvey) => (
                <Question key={el.questionId} el={el} />
            ))}

            {total === surveyData.length &&
                <div className='flex-btn'>
                    <button
                        className='preview-btn tertiary-btn small'
                        onClick={() => setState({ ...state, showDrawer: true })}
                    >
                        Preview
                    </button>
                    <button
                        className='secondary-btn small submit-btn'
                        onClick={onSubmit}
                    >
                        {state.loading ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            }
            <Preview
                isOpen={state.showDrawer}
                onClose={() => setState({ ...state, showDrawer: false })}
            />
            <Modal
                isOpen={state.showModal}
                onClose={() => setState({ ...state, showModal: false })}
            />
        </div>
    )
}

export default QuestionList