import React from 'react'
import Banner from '../../components/User/Banner/Banner'
import PostTop_home from '../../components/User/PostTop_home/PostTop_home'
import Qtccdv from '../../components/User/QTCCDV/Qtccdv'


export default function Home() {
    return (
        <div>
            <Banner/>
            <Qtccdv/>
            <PostTop_home/>
        </div>
    )
}
