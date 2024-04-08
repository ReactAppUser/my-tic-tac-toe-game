import React from "react";

export default async function drawCalculate(turn, winner, message, stringWinner) {
    const drawMessage = message;
    const isTurn = turn;

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(drawMessage), 100)
    });

    let result = await promise;

    if (winner && stringWinner) {
        alert(result)
        window.location.reload()
    }

    if (isTurn >= 9 && !winner) {
        alert(result)
        window.location.reload()
    }
}