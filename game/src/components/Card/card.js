import React from 'react';

export default function Card(props){
    return (
        <div className="imgTile" >
            <img src={props.imgUrl} alt={props.name} className="title" id={props.id} onClick={()=>props.clickCard(props.id)} />
        </div>
    )
}

