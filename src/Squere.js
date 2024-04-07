import React from "react";

export default function Square(props) {

    return(
        <button className="square" id={props.squareNumber} onClick={props.handleClick}>{props.square}</button>
    )
}