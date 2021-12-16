import React from 'react'
import './Chat.css'
import images from '../LeftSidebar/demo-f.jpg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SendIcon from '@mui/icons-material/Send';

const Chat = () => {
    return (
        <div className="home__rightMainChat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <AccountCircleIcon className="chat__headerLeftPhoto"></AccountCircleIcon>
                    <div>
                        <h4>Ananya Shergill</h4>
                        <p>Online</p>
                    </div>
                </div>
                <div className="chat__headerRight">
                    <MoreVertIcon></MoreVertIcon>
                </div>
            </div>
            <div className="messages__area">
                <div className="message">
                    <img src={images} alt="" />
                    <div>
                        <p className="messageText">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores doloribus aspernatur quibusdam sequi sapiente mollitia enim soluta odit fuga,</p>
                        <p className="messageTime">09:20 PM</p>
                    </div>
                    <ul className="messageActionMenu">
                        <li><MoreHorizIcon></MoreHorizIcon>
                            <ul>
                                <li>Copy</li>
                                <li>Remove</li>
                                <li>Froward</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="message">
                    <img src={images} alt="" />
                    <div>
                        <p className="messageText">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores doloribus aspernatur quibusdam sequi sapiente mollitia enim soluta odit fuga,</p>
                        <p className="messageTime">09:20 PM</p>
                    </div>
                    <MoreHorizIcon></MoreHorizIcon>
                </div>
                <div className="message sender">
                    <img src={images} alt="" />
                    <div>
                        <p className="messageText">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores doloribus aspernatur quibusdam sequi sapiente mollitia enim soluta odit fuga,</p>
                        <p className="messageTime">09:20 PM</p>
                    </div>
                    <MoreHorizIcon></MoreHorizIcon>
                </div>
                <div className="message sender">
                    <img src={images} alt="" />
                    <div>
                        <p className="messageText">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores doloribus aspernatur quibusdam sequi sapiente mollitia enim soluta odit fuga,</p>
                        <p className="messageTime">09:20 PM</p>
                    </div>
                    <MoreHorizIcon></MoreHorizIcon>
                </div>
            </div>
            <div className="chat__form">
                <form>
                    <div className="textInput">
                        <textarea name="messageInput" id="" cols="30" rows="10" placeholder="Write Message Here..."></textarea>
                    </div>
                    <button type="submit"><SendIcon></SendIcon></button>
                </form>
            </div>
        </div>
    )
}

export default Chat
