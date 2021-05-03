import React from 'react'
import '../../../index.css'
import './Products.css'
import Card from '../../dumb/card/Card'
import WheyImg from '../../../assets/whey.png'

type Props = {
    hasPressed: Function
}

export default function Products({hasPressed}: Props) {
    return (
        <div className="light-dark-wrapper">
            <div className="header light-header">
                Produse
            </div>
            <div className="flex flex-row on-top justify-center">
                {
                    <Card 
                        imgAlt='Whey' 
                        imgSrc={WheyImg}
                        hasPressed={hasPressed}
                    ></Card>
                }
                {
                    <Card 
                        imgAlt='Whey' 
                        imgSrc={WheyImg}
                        hasPressed={hasPressed}
                    ></Card>
                }
            </div>
            <div className="flex flex-row  justify-center">
                {
                    <Card 
                        imgAlt='Whey' 
                        imgSrc={WheyImg}
                        hasPressed={hasPressed}
                    ></Card>
                }
                {
                    <Card 
                        imgAlt='Whey' 
                        imgSrc={WheyImg}
                        hasPressed={hasPressed}
                    ></Card>
                }
            </div>
        </div>
    )
}
