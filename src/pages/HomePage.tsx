import React, {useState} from 'react'
import './HomePage.css'
import Landing from '../components/complex/landing/Landing'
import QA from '../components/complex/qa/Q_A'
import Products from '../components/complex/products/Products'
import Modal from '../components/dumb/modal/Modal'
import Myths from '../components/complex/myths/Myths'
import Food from '../components/complex/food/Food'

type Header = {
    title: string,
    desc: string,
    image: string
}

type Sections = {
    desc: Array<string>
}

export default function HomePage() {
    const [hasPressed, setHasPressed] = useState(false);
    const [title, setTitle] = useState("Titlu");
    const [desc, setDesc] = useState("Descriere");
    const [fullDesc, setFullDesc] = useState(Array<string>());
    const [list, setList] = useState(Array<string>());
    const [image, setImage] = useState('')

    let header: Header = {
        title: title,
        desc: desc,
        image: image
    }

    let sections: Sections = {
        desc: fullDesc
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
                    section = {sections}
                    list = {list}
                />
            }
            <Landing />
            <QA />
            <Products 
                hasPressed={(title: string, desc: string, fullDesc: Array<string>, list: Array<string>, image: string) => {
                    setHasPressed(!hasPressed);
                    setTitle(title);
                    setDesc(desc);
                    setFullDesc(fullDesc)
                    setList(list)
                    setImage(image)
                }}
            />
            <Myths/>
            <Food />
        </div>
    )
}
