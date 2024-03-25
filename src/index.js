import './index.css'
import React from 'react'
import {Board} from "./Board";
import ReactDOM from 'react-dom/client';



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