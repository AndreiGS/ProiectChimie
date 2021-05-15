import React, { useState, useEffect } from 'react'
import { enableBodyScroll } from 'body-scroll-lock';
import './Modal.css'

type Header = {
    title: string,
    desc: string,
    image: string
}

type Sections = {
    desc: Array<string>
}

type Props = {
    hasPressed: boolean,
    changeHasPressed: Function,
    header?: Header,
    section?: Sections,
    list: Array<string>
}

export default function Modal({hasPressed, changeHasPressed, header, section, list}: Props) {
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

    function renderListItems() {
        if(list === null || list === undefined)
            return;

        let elements: Array<JSX.Element> = []

        list.forEach(el => elements.push(
            <li key={el.substring(0, 20)}>{el}</li>
        ))

        return elements;
    }

    function getSections(): Array<JSX.Element>{
        let elements: Array<JSX.Element> = []

        section?.desc.map(el => elements.push((
            el === '' ?
                <br></br>
            :
                <section>{el}</section>
        )))

        return elements;
    }

    return (
        <>
            {hasPressed ? <div className="opacity"></div> : null}
            <div className={showHideClassName}>
                <section className="modal-main flex flex-col">
                    <div className="modal__header">
                        <div className="modal__header__card">
                            <img src={header?.image} alt="imagine"/>
                            <div className="props">
                                <h3 className="title">{header?.title || "Nume"}</h3>
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
                        section?.desc ?
                        <div className="modal__body">
                            {getSections()}
                            {renderListItems()}
                        </div> : null
                    }
                </section>
            </div>
        </>
    )
}
