import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import surveyImage from 'assets/survey.png'
import { survey } from 'constants/surveyData';
import { useDispatch } from 'react-redux';
import { setData } from 'redux/reducers/surveyReducer';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setData({
            data: survey
        }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='home'>
            <div className='inside-box'>
                <h1>We&apos;re all ears.</h1>
                <p>It&apos;s time to evaluate your team&apos;s performance.</p>
                <p>Remember, all your responses are confidential.</p>
                <Link href='/survey' passHref>
                    <button className='secondary-btn medium'>Get Started</button>
                </Link>
            </div>
            <div>
                <Image
                    src={surveyImage}
                    alt='survey'
                    height='450px'
                    width='800px'
                />
            </div>
        </div>
    )
}

export default Home