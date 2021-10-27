import React from "react";

export default function Card(props) {

    return(
        <div className="card">
            <div className="title">
                <h2>{props.title}</h2>
            </div>
            <div className="image">
                <img src={props.photo} alt={props.slug}/>
            </div>
        </div>
    )
}