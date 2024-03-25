import React from "react";


export default function BoardRow(props) {

    const summaryArray = props.summaryArray

    const boardRow = summaryArray.map((array, index) => {

        const forBoardRow = (
            <div className="board-row" key={index}>
                {array}
            </div>
        );

        return forBoardRow
    })

    return boardRow
}