import React, { useState, useEffect } from 'react'
import { enableBodyScroll } from 'body-scroll-lock';
import WheyImg from '../../../assets/whey.png'
import './Modal.css'

type Info = {
    title: string,
    desc: string
}

type Header = {
    title: string,
    desc: string
}

type Props = {
    hasPressed: boolean,
    changeHasPressed: Function,
    info?: Array<Info>,
    header?: Header
}

export default function Modal({hasPressed, changeHasPressed, info, header}: Props) {
    let root: any = null;
    let [showHideClassName, setShowHideClassName] = useState("modal display-none");

    useEffect(() => {
        if(hasPressed)
            setShowHideClassName("modal display-block")
    }, [hasPressed]);

    function delay() {
        setTimeout(() => {
            setShowHideClassName("modal display-none")
        }, 500);
    }

    const sections: Array<JSX.Element> = []

    info?.forEach(element => sections.push(
        <section>
            <h2>{element.title}</h2>
            <p>{element.desc}</p>
        </section>
    ));

    return (
        <>
            {hasPressed ? <div className="opacity"></div> : null}
            <div className={showHideClassName}>
                <section className="modal-main flex flex-col">
                    <div className="modal__header">
                        <div className="modal__header__card">
                            <img src={WheyImg} alt="imagine"/>
                            <div className="props">
                                <h3 className="title">{header?.title || "Nume"}</h3>
                                <p className="description">{header?.desc || "Descriere"}</p>
                            </div>
                        </div>
                        <button type="button" className="modal__button custom-button" onClick={() => {
                            setShowHideClassName("modal fade-out background")
                            delay();

                            changeHasPressed();
                            root = document.getElementById('root');
                            if(root)
                                enableBodyScroll(root);
                        }}>
                        Inchide
                        </button>
                    </div>
                    {   
                        sections.length > 0 ?
                        <div className="modal__body">
                            {sections}
                        </div> : null
                    }
                </section>
            </div>
        </>
    )
}
