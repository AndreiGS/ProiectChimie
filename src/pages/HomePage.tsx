import React, {useState} from 'react'
import './HomePage.css'
import Landing from '../components/complex/landing/Landing'
import QA from '../components/complex/qa/Q_A'
import Products from '../components/complex/products/Products'
import Modal from '../components/dumb/modal/Modal'

type Header = {
    title: string,
    desc: string
}

export default function HomePage() {
    const [hasPressed, setHasPressed] = useState(false);
    const [title, setTitle] = useState("Titlu");
    const [desc, setDesc] = useState("Descriere")

    let header: Header = {
        title: title,
        desc: desc
    }

    return (
        <div className="home-page">
            {
                <Modal 
                    hasPressed = {hasPressed} 
                    changeHasPressed = {() => {
                        setHasPressed(!hasPressed);
                    }}
                    header = {header}
                />
            }
            <Landing />
            <QA />
            <Products 
                hasPressed={(title: string, desc: string) => {
                    setHasPressed(!hasPressed);
                    setTitle(title);
                    setDesc(desc);
                }}
            />
        </div>
    )
}
