import React, {useState, useEffect, useRef} from 'react'
import './Card.css'
import '../../../index.css'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

type Props = {
    imgSrc: string,
    imgAlt: string,
    hasPressed: Function
}

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export default function Card({imgSrc, imgAlt, hasPressed}: Props) {
    let root: any = null;
    const card = useRef<null | HTMLDivElement>(null);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        clearAllBodyScrollLocks();

        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
      
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div ref={card} className='flex-col'>
            <div className='card flex flex-col'>
                <img src={imgSrc} alt={imgAlt} className="card__image"/>
                <h2 className="card__title">Card title</h2>

                <div>
                    <button onClick={() => {
                        root = document.getElementById('root');
                        hasPressed();
                        disableBodyScroll(root);
                    }}>Vezi mai multe</button>
                </div>
            </div>
        </div>
        
    )
}
