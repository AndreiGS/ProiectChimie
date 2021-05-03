import React, {useState} from 'react'
import './HomePage.css'
import Landing from '../components/complex/landing/Landing'
import QA from '../components/complex/qa/Q_A'
import Products from '../components/complex/products/Products'
import Modal from '../components/dumb/modal/Modal'

export default function HomePage() {
    const [hasPressed, setHasPressed] = useState(false);

    return (
        <div>
            {
                <Modal 
                    hasPressed = {hasPressed} 
                    changeHasPressed = {() => {
                        setHasPressed(!hasPressed);
                        return hasPressed;
                    }}
                />
            }
            <Landing />
            <QA />
            <Products 
                hasPressed={() => {
                    setHasPressed(!hasPressed);
                }}
            />
        </div>
    )
}
