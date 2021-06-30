import React from 'react'
import Banner from '../../components/User/Banner/Banner'
import Qtccdv from '../../components/User/QTCCDV/Qtccdv'
import sendMail from '../../components/User/sendMail/sendMail'

export default function Home() {
    return (
        <div>
            <Banner/>
            <sendMail/>
            <Qtccdv/>
        </div>
    )
}
