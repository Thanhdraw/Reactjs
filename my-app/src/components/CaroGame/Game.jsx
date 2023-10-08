import React, { useState } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { caculateWinner } from "../../helpers";
const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = caculateWinner(board);
  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? "X" : "O";
    boardCopy[index];
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };
  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
    // setXIsNext(true); => muốn sau reset thì bắt đầu luôn là "X"
  };
  return (
    <div>
      {winner && <div className="game-winner">Winner is {winner}</div>}
      <Board cells={board} onClick={handleClick}></Board>
      <button className="btn-reset" onClick={handleResetGame}>
        <span>Reset Game</span>
      </button>
    </div>
  );
};

export default Game;
