import Square from "./Squere";
import BoardRow from "./BoardRow";
import React from "react";


export function Board(props) {

    const rowOne = [];
    const rowTwo = [];
    const rowThree = [];

    const squares = props.squares

    squares.map((square, index) => {
        const squareCell = <Square squareNumber={index+1} key={index}/>;
        if(index < 3) {
            rowOne.push(squareCell);
        }

        if( index < 6 && index > 2) {
            rowTwo.push(squareCell);
        }

        if(5 < index) {
            rowThree.push(squareCell);
        }
    })

    const summaryArray = [rowOne, rowTwo, rowThree];


    return (
        <>
            <BoardRow summaryArray={summaryArray} />
        </>
    )
}