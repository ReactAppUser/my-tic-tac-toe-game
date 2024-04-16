import React from 'react'

export default function HistoryButton(props) {

    return <button> Go to {props.nextPlayer === 'X'? 'O': "X"}</button>

}