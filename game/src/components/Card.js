import React from 'react';

export default function Card(props){
    return (
        <div className="imgTile" onClick={()=>props.click(props.card)}>
            <img src={props.card.imgUrl} alt={props.card.name} className="tile"/>
        </div>
    )
}