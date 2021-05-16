import React from 'react'
import '../../../index.css'
import './Q_A.css'
import Info from '../../../assets/info'

function getInfo(): Array<JSX.Element> {
    let elements: Array<JSX.Element> = [];

    Info.qa.forEach(qa => elements.push(
        <div key={qa.title}><div className="flex-col">
            <h3>{qa.title}</h3>
            <p>{qa.desc}</p>
        </div>
        <br/></div>
    ));

    return elements;
}

export default function Q_A() {
    return (
        <div className="dark-wrapper">
            <div className="header dark-header">
                Întrebări&Răspunsuri 
            </div>
            <div className="flex flex-row on-top">
                {
                    getInfo()
                }
            </div>
        </div>
    )
}
