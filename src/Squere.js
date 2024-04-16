import React from "react";

export default function Square(props) {
    // console.log('props', props)
    let squares = props.squareStatus

    return(
        <button className="square" id={props.squareNumber} squarestates={squares.toString()} onClick={squares ? props.handleClick:null}>{props.square}</button>
    )
}

