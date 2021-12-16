import React from 'react'
import HomeLeft from '../HomeLeft/HomeLeft'
import HomeRight from '../HomeRight/HomeRight/HomeRight'
import './Home.css'
const Home = () => {
    return (
        <div className="home__page">
            <HomeLeft></HomeLeft>
            <HomeRight></HomeRight>
        </div>
    )
}

export default Home
