import React from 'react'
import Info from '../../../assets/info'
import '../../../index.css'

function getMyths(): Array<JSX.Element> {
    let elements: Array<JSX.Element> = [];

    Info.myths.forEach(myth => elements.push(
        <div key={myth.title}><div className="flex-col">
            <h3>{myth.title}</h3>
            <p>{myth.desc}</p>
        </div>
        <br/></div>
    ));

    return elements;
}

export default function Myths() {
    return (
        <div className="dark-wrapper">
            <div className="header dark-header">
                Mituri
            </div>
            <div className="flex flex-row on-top">
                {
                    getMyths()
                }
            </div>
        </div>
    )
}
