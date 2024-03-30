import './index.css'
import React from 'react'
import {Board} from "./Board";
import ReactDOM from 'react-dom/client';
import HistoryTicTacToeGame from './HistoryTicTacToeGame'


class Game extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            squares: Array(9).fill(null),
            squareValue: 'X',
            isTrueX: true,
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleSquareValue = this.handleSquareValue.bind(this)

    }

    handleSquareValue(forSquareValue, forIsTrueX) {
        this.setState((prevState, props) => {
            return{
                squareValue: forSquareValue,
                isTrueX: forIsTrueX,
            }
        })
    }

    handleClick(event) {

        const squaresArray = this.state.squares.concat()

        const squareValue = this.state.squareValue;

        if(this.state.isTrueX) {
            this.handleSquareValue('O', false)
             } else {
            this.handleSquareValue('X', true)
        }

        const squaresId = +event.target.id - 1;


        squaresArray[squaresId] = (squareValue);

        console.log('event', squaresArray[squaresId]);


        this.setState((prevState, props) => {

            return {
                squares: squaresArray,
            }

        })

        return
    }

    render() {
        return (
            <div>
                <h1>TIC-TAC-TOE-GAME</h1>
                <Board squares={this.state.squares} squareValue={this.state.squareValue} handleClick={this.handleClick}/>
                <HistoryTicTacToeGame nextPlayer={this.state.squareValue}/>
            </div>
        )

    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Game/>)