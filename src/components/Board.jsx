import { useState } from "react";
import "./board.css";
import Square from "./Square";
import calculateWinner from "./CalculateWinner";

export default function Board({ xIsNext, squares, onPlay }) {
    const titTacToeArray = [];

    for (let i = -1; i < 8; i++) {
        titTacToeArray.push(
            <Square key={i + 1} id={i + 1} value={squares[i + 1]} onSquareClick={() => handleClick(i + 1)} />
        );
    }

    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        `${xIsNext ? nextSquares[i] = "X" : nextSquares[i] = "O"} `
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;

    `${winner ? (status = "Winner: " + winner) : status = "Next player: " + (xIsNext ? "X" : "O")}`

    return (
        <>
            <div className="status"> {status}</div>
            <div className="container">{titTacToeArray}</div>
        </>
    )
}
