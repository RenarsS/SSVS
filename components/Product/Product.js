import React from "react";

export default function Product(props) {

    return(
        <div className="product">
            <div className="image">
                <img src={props.photo} alt={props.slug}/>
            </div>
            <div className="info">
                <div className="title">
                    <h4>{props.title}</h4>
                </div>
                <div className="price">
                    <h4>{props.price} $</h4>
                </div>
            </div>
        </div>
    )
}