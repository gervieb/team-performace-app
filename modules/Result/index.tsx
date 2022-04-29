import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { calculateResult } from 'utils/helpers';
import { useReset } from 'hooks/useReset';
import { useRouter } from 'next/router'
import { CloseIcon } from '@chakra-ui/icons';

const Result = () => {
    const reset = useReset();
    const router = useRouter()

    const { data } = useSelector((state: RootState) => state.surveyData);
    const [result, setResult] = useState<{
        total: number,
        value: string[],
    }>({
        total: 0,
        value: [],
    })

    useEffect(() => {
        if (data) {
            const res = calculateResult(data);
            setResult({
                ...result,
                total: res.total,
                value: res.value,
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])


    const handleClose = () => {
        reset();
        router.push('/')
    }

    return (
        <div className='result'>
            <CloseIcon
                className='exit'
                onClick={handleClose}
            />
            <h1>Your Results Are In!</h1>
            <div className='cards'>
                <div className='card'>
                    <h4>Fear Zone</h4>
                    <p className='low'>{data?.[0].answer}%</p>
                </div>
                <div className='card'>
                    <h4>Learning Zone</h4>
                    <p className='high'>{data?.[1].answer}%</p>
                </div>
                <div className='card'>
                    <h4>Growth Zone</h4>
                    <p className='high'>{data?.[2].answer}%</p>
                </div>
            </div>
            <div className='totalResult'>
                <p className='total'>
                    Result:
                    <span className='percent'>
                        {result?.total}%
                    </span>
                </p>
                <div className='message'>
                    <ul>
                        {result.value?.map((result, index) => (
                            <li key={index} >{result}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Result