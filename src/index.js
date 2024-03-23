import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client';



function Board(props) {


    const squares = props.squares
    const board = squares.map((square, index) => {
        const squareNumber = index+1;

        // switch(squareNumber) {
        //     case
        // }

        return(

            <button className="square">{squareNumber}</button>
        )
    })

    return board
}

class Game extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

            squares: Array(9).fill(null),

        }

    }

    render() {
        return (

            <div>
                <h1>TIC-TAC-TOE-GAME</h1>
                <Board squares={this.state.squares}/>
            </div>
        )

    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Game/>)