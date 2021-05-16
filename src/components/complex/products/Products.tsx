import React from 'react'
import '../../../index.css'
import './Products.css'
import Card from '../../dumb/card/Card'
import Info from '../../../assets/info'
import WheyImg from '../../../assets/whey.png'
import AshImg from '../../../assets/Ash.png'
import OmegaImg from '../../../assets/Omega3.png'
import BCAAImg from '../../../assets/BCAA.png'

type Props = {
    hasPressed: Function
}

export default function Products({hasPressed}: Props) {
    let images = [WheyImg, OmegaImg, BCAAImg, AshImg];

    function getRowElements(start: number):Array<JSX.Element> {
        let elements: Array<JSX.Element> = [];
        
        let el = Info.products[start];
        let desc: string = ''
        for(let i=0; i<el.desc.length; i++)
            desc+=el.desc[i]+' '
        let info = {
            title: el.title,
            desc: desc.substring(0, 255)+"...",
            fullDesc: el.desc,
            shortDesc: el.shortDesc,
            imgAlt: el.title,
            imgSrc: images[start],
            list: el.list
        }
        elements.push(
            <Card
                key={info.title}
                hasPressed={hasPressed}
                info={info}
            ></Card>
        )

        el = Info.products[start+1];
        desc = ''
        for(let i=0; i<el.desc.length; i++){
            desc+=el.desc[i]+' '
        }

        info = {
            title: el.title,
            desc: desc.substring(0, 255)+"...",
            fullDesc: el.desc,
            shortDesc: el.shortDesc,
            imgAlt: el.title,
            imgSrc: images[start+1],
            list: el.list
        }
        elements.push(
            <Card
                key={info.title}
                hasPressed={hasPressed}
                info={info}
            ></Card>
        )

        return elements;
    }

    function getRow(start: number): JSX.Element {
        return <div key={start} className="flex flex-row on-top justify-center">
            {
                getRowElements(start)
            }
        </div>
    }

    function getRows(): Array<JSX.Element>{
        let elements: Array<JSX.Element> = [];
        for(let i=0; i<Info.products.length/2; i++)
            elements.push(getRow(i*2))

        return elements;
    }

    return (
        <div className="light-dark-wrapper">
            <div className="header light-header">
                Produse
            </div>
            {
                getRows()
            }
        </div>
    )
}
