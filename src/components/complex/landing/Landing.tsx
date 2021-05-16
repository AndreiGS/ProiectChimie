import React from 'react'
import './Landing.css'
import Image from '../../../assets/gym.jpg'

export default function Landing() {
    return (
        <div className="landing">
            <img src={Image} alt="Imagine cu sala" className="landing__image"/>
        </div>
    )
}
