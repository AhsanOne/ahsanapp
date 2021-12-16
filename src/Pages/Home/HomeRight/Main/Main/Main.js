import React from 'react'
import './Main.css'
import Chat from '../Chat/Chat'
import LeftSidebar from '../LeftSidebar/LeftSidebar'
import RightSidebar from '../RightSidebar/RightSidebar'

const Main = () => {
    return (
        <div className="home__rightMain">
            <LeftSidebar></LeftSidebar>
            <Chat></Chat>
            <RightSidebar></RightSidebar>
        </div>
    )
}

export default Main
