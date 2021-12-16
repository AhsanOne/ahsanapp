import React from 'react'
import './Header.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Header = () => {
    return (
        <div className="home__rightHead">
            <h1 className="home__rihgtHeadLogo">Messages</h1>
            <nav className="home__rightHeadNav">
                <ul>
                    <li>
                        <a className="home__rightNotify" href="/">
                            <NotificationsNoneIcon></NotificationsNoneIcon>
                            <span>5+</span>
                        </a>
                    </li>
                    <li>
                        <a href="/"><AccountBoxIcon></AccountBoxIcon></a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
