import React from 'react'
import './Modal.css'

type Props = {
    hasPressed: boolean,
    changeHasPressed: Function
}

export default function Modal({hasPressed, changeHasPressed}: Props) {
    const showHideClassName = hasPressed ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
        <section className="modal-main">
            <button type="button" onClick={() => changeHasPressed()}>
            Close
            </button>
        </section>
        </div>
    );
}
