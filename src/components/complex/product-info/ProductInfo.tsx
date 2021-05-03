import React, {useEffect, useState} from 'react'
import './ProductInfo.css'
import { enableBodyScroll } from 'body-scroll-lock';

type Props = {
    disableFunction: Function
}

export default function ProductInfo(props: Props) {
    let root: any = null;
    useEffect(() => {
        root = document.getElementById('root');
    }, []);

    return (
        <>
            <h1>Info</h1>
            <button onClick={() => {
                props.disableFunction(); 
                enableBodyScroll(root);
            }}>Inchide</button>
        </>
    )
}
