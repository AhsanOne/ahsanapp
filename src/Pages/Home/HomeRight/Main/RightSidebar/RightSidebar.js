import React from 'react'
import './RightSidebar.css'
import attach from './ahsanapp-logo.png'
import image from '../LeftSidebar/demo-f.jpg'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';

const RightSidebar = () => {
    return (
        <div className="home__rightMainRight">
            <div className="home__rightMainRightGeneralInfo">
                <div className="photo">
                    <img src={image} alt=""/>
                </div>
                <h4 className="name">MD Ahsan Habib</h4>
                <p className="designation">Co-Worker</p>
                <p className="location">Dhaka, Bangladesh</p>
                <button className="more__infoBtn">More Information</button>
            </div>
            <div className="home__rightMainRightContactInfo">
                <div className="head">
                    <h5>Contact Information</h5>
                    <button className="AddBtn">Add New</button>
                </div>
                <div className="info">
                    <div className="email">
                        <EmailIcon></EmailIcon>
                        <p>ahsanhabibseo@gmail.com</p>
                    </div>
                    <div className="phone">
                        <PhoneIcon></PhoneIcon>
                        <p>+88 01908038538</p>
                    </div>
                    <div className="userName">
                        <PersonIcon></PersonIcon>
                        <p>ahsan.habib1</p>
                    </div>
                </div>
            </div>
            <div className="home__rightMainRightAttachment">
                <div className="head">
                    <h5>Attachments (104)</h5>
                    <button className="AddBtn">View All</button>
                </div>
                <div className="Attachments">
                    <div className="Attachment">
                        <img src={attach} alt=""/>
                    </div>
                    <div className="Attachment">
                        <img src={attach} alt=""/>
                    </div>
                    <div className="Attachment">
                        <img src={attach} alt=""/>
                    </div>
                    <div className="Attachment">
                        <img src={attach} alt=""/>
                    </div>
                    <div className="Attachment">
                        <img src={attach} alt=""/>
                    </div>
                    <div className="Attachment">
                        <img src={attach} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightSidebar
