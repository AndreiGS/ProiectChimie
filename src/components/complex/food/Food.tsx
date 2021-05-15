import React from 'react'
import Info from '../../../assets/info'
import '../../../index.css'
import './Food.css'

function getFood(): JSX.Element {
    return <div className="flex-col">
        <h3>{Info.food.title}</h3>
        <p>{Info.food.desc}</p>
    </div>
}

export default function Food() {
    return (
        <div className="light-dark-wrapper">
            <div className="header light-header">
                Exemple de mese
            </div>
            <div className="on-top food_info">
            {
                getFood()
            }
            </div>
        </div>
    )
}
