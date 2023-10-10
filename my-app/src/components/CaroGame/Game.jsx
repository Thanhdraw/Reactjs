import React, { useReducer, useState } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { caculateWinner } from "../../helpers";

// initialState
const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};

// immutable
const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      const { board, xIsNext } = state;
      const { index, winner } = action.payload;
      if (winner || board[index]) return state;
      const nextStage = JSON.parse(JSON.stringify(state));
      nextStage.board[index] = xIsNext ? "X" : "O";
      nextStage.xIsNext = !xIsNext;
      return nextStage;
    }
    case "RESET": {
      const nextStage = JSON.parse(JSON.stringify(state));
      nextStage.board = Array(9).fill(null);
      nextStage.xIsNext = true;
      return nextStage;
    }
    default:
      console.log("Error");
      break;
  }
  return state;
};

const Game = () => {
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);
  const [state, dispatch] = useReducer(gameReducer, initialState);

  // const [state, setState] = useState({
  //   board: Array(9).fill(null),
  //   xIsNext: true,
  // });
  const winner = caculateWinner(state.board);
  const handleClick = (index) => {
    // const boardCopy = [...state.board];
    // if (winner || boardCopy[index]) return;
    dispatch({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });
    // boardCopy[index] = state.xIsNext ? "X" : "O";
    // setState({
    //   ...state,
    //   board: boardCopy,
    //   xIsNext: !state.xIsNext,
    // });
    // // setBoard(boardCopy);
    // // setXIsNext(!xIsNext);
  };
  const handleResetGame = () => {
    // setBoard(Array(9).fill(null));
    // setXIsNext(true); => muốn sau reset thì bắt đầu luôn là "X"
    dispatch({
      type: "RESET",
    });
  };
  return (
    <div>
      {winner && <div className="game-winner">Winner is {winner}</div>}
      <Board cells={state.board} onClick={handleClick}></Board>
      <button className="btn-reset" onClick={handleResetGame}>
        <span>Reset Game</span>
      </button>
    </div>
  );
};

export default Game;
