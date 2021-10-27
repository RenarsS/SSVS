import React from "react";

export default function Header (props) {

    if(props.page === 0) {
        return(
            <a href="/">
                <div className="header">
                    <img src="/SSVS_logo_v2.svg" atl="Store logo"/>
                    <h1>SSVS</h1>
                </div>
            </a>
        )
    } else if(props.page === 1){
        return(
            <a href="/">
            <div className="header">
                <img src="/SSVS_logo_v2_1.svg" atl="Store logo"/>
                <h1>SSVS</h1>
            </div>
            </a>
        )
    } else{
        return(
            <a href="/">
            <div className="header">
                <img src="/SSVS_logo_v2_2.svg" atl="Store logo"/>
                <h1>SSVS</h1>
            </div>
            </a>
        )
    }
}