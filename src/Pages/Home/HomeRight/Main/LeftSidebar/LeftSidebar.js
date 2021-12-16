import React, { useState } from 'react'
import './LeftSidebar.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import demo from './demo-f.jpg'

const LeftSidebar = () => {
    const [index, setIndex] = useState(0)
    return (
        <div className="home__rightMainLeft">
            <div className="home__rightMainLeftSearch">
                <form>
                    <div className="home__rightMainSearchFormControl">
                        <input type="text" name="search" placeholder="Search People or Messages" />
                        <button type="submit"><SearchIcon></SearchIcon></button>
                    </div>
                </form>
            </div>
            <div className="home__rightMainLeftButton">
                <button onClick={e => setIndex(0)} className={index === 0 && "active"}>
                    <PersonOutlineIcon></PersonOutlineIcon>
                </button>
                <button onClick={e => setIndex(1)} className={index === 1 && "active"}>
                    <PeopleOutlineIcon></PeopleOutlineIcon>
                </button>
                <button onClick={e => setIndex(2)} className={index === 2 && "active"}>
                    <SettingsOutlinedIcon></SettingsOutlinedIcon>
                </button>
            </div>
            <div className="home__rightMainLeftFriendList">
                <div className="home__rightMainLeftFriend">
                    <div className="friend__photo">
                        <img src={demo} alt="" />
                    </div>
                    <div className="friend__info">
                        <h4>MD Ahsan Habib</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="home__rightMainLeftFriend">
                    <div className="friend__photo">
                        <img src={demo} alt="" />
                    </div>
                    <div className="friend__info">
                        <h4>MD Ahsan Habib</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="home__rightMainLeftFriend">
                    <div className="friend__photo">
                        <img src={demo} alt="" />
                    </div>
                    <div className="friend__info">
                        <h4>MD Ahsan Habib</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="home__rightMainLeftFriend">
                    <div className="friend__photo">
                        <img src={demo} alt="" />
                    </div>
                    <div className="friend__info">
                        <h4>MD Ahsan Habib</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSidebar
