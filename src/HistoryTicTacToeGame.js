import React from "react";

export default function HistoryTicTacToeGame(props) {

    return(
        <div>
        <h2>Next player: {props.nextPlayer}</h2>
        <h3>History of the Tic-Tac-Toe-Game:</h3>
        <button>Go to {props.nextPlayer === 'X'? 'O': "X"}</button>
        </div>
    )

}
