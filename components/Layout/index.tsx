import React from 'react'
import Header from '../Header'

interface IProps {
    children: React.ReactNode
}

const Layout = ({ children }: IProps) => {
    return (
        <div className='background'>
            <Header />
            <div>{children}</div>
        </div>
    )
}

export default Layout