import React, { useState } from 'react'
import './HomeLeft.css'
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const HomeLeft = () => {
    const [index, setIndex] = useState(0)
    return (
        <div className="home__pageLeft">
            <button onClick={e => setIndex(0)} className={index === 0 && 'active'}>
                <MapsUgcIcon></MapsUgcIcon>
            </button>
            <button onClick={e => setIndex(1)} className={index === 1 && 'active'}>
                <PersonIcon></PersonIcon>
            </button>
            <button onClick={e => setIndex(2)} className={index === 2 && 'active'}>
                <StarIcon></StarIcon>
            </button>
            <button onClick={e => setIndex(3)} className={index === 3 && 'active'}>
                <EventAvailableIcon></EventAvailableIcon>
            </button>
        </div>
    )
}

export default HomeLeft
