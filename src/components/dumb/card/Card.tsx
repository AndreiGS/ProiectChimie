import React, {useEffect} from 'react'
import './Card.css'
import '../../../index.css'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

type Info = {
    title: string,
    desc: string,
    fullDesc: Array<string>,
    shortDesc?: string,
    list?: Array<string>,
    imgSrc: string,
    imgAlt?: string,
}

type Props = {
    hasPressed: Function,
    info?: Info
}

export default function Card({hasPressed, info}: Props) {
    let root: any = null;

    useEffect(() => {
        clearAllBodyScrollLocks();
    }, []);

    return (
        <div className='flex-col'>
            <div className='card flex flex-col'>
                <img src={info?.imgSrc} alt={info?.imgAlt || "Imagine"} className="card__image"/>
                <h2 className="card__title">{info?.title || "Nume"}</h2>
                <p className="card__desc">{info?.desc || "Descriere"}</p>

                <div>
                    <button type="button" className="custom-button" onClick={() => {
                        root = document.getElementById('root');
                        hasPressed(info?.title, info?.shortDesc, info?.fullDesc, info?.list, info?.imgSrc);
                        disableBodyScroll(root); 
                    }}>Vezi mai multe</button>
                </div>
            </div>
        </div>
    )
}
