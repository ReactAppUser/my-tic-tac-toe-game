import './index.css'
import React from 'react'
import {Board} from "./Board";
import ReactDOM from 'react-dom/client';
import HistoryTicTacToeGame from './HistoryTicTacToeGame'
import calculateWinner from './calculateWinner'

async function drawCalculate(turn, winner, message, stringWinner) {
    const drawMessage = message;
    const isTurn = turn;

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(drawMessage), 100)
    });

    let result = await promise;

    if (winner && stringWinner) {
        alert(result)
    }

    if (isTurn >= 9 && !winner) {
        alert(result)
    }

}



class Game extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            squares: Array(9).fill(null),
            squareValue: 'X',
            isTrueX: true,
            isTurn: 0,
        }


        this.handleClick = this.handleClick.bind(this);

        this.handleSquareValue = this.handleSquareValue.bind(this);


        console.log('constructor', this.state.isTurn);
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
            this.handleSquareValue('O', false);
        } else {
            this.handleSquareValue('X', true);
        }

        const squaresId = +event.target.id - 1;
        squaresArray[squaresId] = (squareValue);

        this.setState((prevState, props) => {

            return {
                squares: squaresArray,
            }
        })



        this.setState((prevState, props) => {

            return {
                isTurn: prevState.isTurn + 1,
            }
        })

        console.log('isTurn', this.state.isTurn)
    }

    componentDidUpdate(prevProps, prevState){
        const drawMessage ='The DRAW! You Cane Restart This Game!';
        const squaresArray = this.state.squares;
        const isTurn = this.state.isTurn;
        const gameWinner = calculateWinner(this.state.squares);
        const winnerMessage = 'Player: ' + gameWinner + ' is WINNER! CONGRATULATION!';

        if(gameWinner) {return drawCalculate(null, gameWinner, winnerMessage, 'winner')};
        drawCalculate(isTurn, gameWinner, drawMessage, null);
   }



    componentDidMount() {

        console.log('componentDidMount', this.state.isTurn)
    }

    shouldComponentUpdate() {

        console.log('shouldComponentUpdate', this.state.isTurn)
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){


         console.log('getSnapshotBeforeUpdate', this.state.isTurn)
        return prevState
    }

    render() {


        const ticTocToeGameWinner = calculateWinner(this.state.squares);
        console.log('render', this.state.isTurn)

        return (
            <div>
                {ticTocToeGameWinner? <h1>In TIC-TAC-TOE-GAME winner is player: {ticTocToeGameWinner}</h1>: <h1>TIC-TAC-TOE-GAME</h1>}
                <Board squares={this.state.squares} squareValue={this.state.squareValue} handleClick={this.handleClick}/>
                <HistoryTicTacToeGame nextPlayer={this.state.squareValue}/>
            </div>
        )

    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Game/>)
