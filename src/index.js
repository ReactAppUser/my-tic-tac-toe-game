import './index.css'
import React from 'react'
import {Board} from "./Board";
import ReactDOM from 'react-dom/client';
import HistoryTicTacToeGame from './HistoryTicTacToeGame'
import calculateWinner from './calculateWinner'
import drawCalculate from "./drawCalculate";

class Game extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            // squares: Array(9).fill(null),
            squares: [
                      {value: null, squareStatus: true},{value: null, squareStatus: true},{value: null, squareStatus: true},
                      {value: null, squareStatus: true},{value: null, squareStatus: true},{value: null, squareStatus: true},
                      {value: null, squareStatus: true},{value: null, squareStatus: true},{value: null, squareStatus: true}],
            squareValue: 'X',
            isTrueX: true,
            isTurn: 0,
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleSquareValue = this.handleSquareValue.bind(this);
    }

     handleSquareValue(forSquareValue, forIsTrueX, squareStatus) {
         this.setState((prevState, props) => {
             return{
                 squareValue: forSquareValue,
                 isTrueX: forIsTrueX,
                 squareStatus: squareStatus,
           }
         })
     }

    handleClick(event) {
        console.log('this.state.squares', this.state.squares);
        const squaresArray = this.state.squares.slice();
        const squareValue = this.state.squareValue;
                console.log('squaresArray', squaresArray);

        if(this.state.isTrueX) {
            this.handleSquareValue('O', false, false, squaresArray);
        } else {
            this.handleSquareValue('X', true, false, squaresArray);
        }

        const squaresId = +event.target.id - 1;

        console.log('squaresId', squaresId+1);
        squaresArray[squaresId].value = (squareValue);
        squaresArray[squaresId].squareStatus = false;

        this.setState((prevState, props) => {
                return {
                    isTurn: prevState.isTurn + 1,
                }
            }
        )


    }

    componentDidUpdate(prevProps, prevState){
        const drawMessage ='The DRAW! You Cane Restart This Game!';
        const isTurn = this.state.isTurn;
        const gameWinner = calculateWinner(this.state.squares);
        const winnerMessage = 'Player: ' + gameWinner + ' is WINNER! CONGRATULATION!';

        if(gameWinner) {return drawCalculate(null, gameWinner, winnerMessage, 'winner')};
        drawCalculate(isTurn, gameWinner, drawMessage, null);
   }

    render() {
        const ticTocToeGameWinner = calculateWinner(this.state.squares);
        const checkIsTurn = this.state.isTurn
        let draw = null;

        if(checkIsTurn >= 9) {
            draw = true
        }

        return (
            <div>
                <h1>{'TIC-TAC-TOE-GAME' + `${(ticTocToeGameWinner)? `${' winner is player: ' + ticTocToeGameWinner}`:(draw&&!ticTocToeGameWinner)?' is the DRAW!':'' }`}</h1>
                <Board squares={this.state.squares} squareValue={this.state.squareValue} handleClick={this.handleClick} squareStatus={this.state.squareStatus}/>
                <HistoryTicTacToeGame nextPlayer={this.state.squareValue}/>
            </div>
        )

    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Game/>)


