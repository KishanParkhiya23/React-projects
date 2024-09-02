import { useState } from "react";

// const initGameLook = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];

export default function GameBoard({ handleBtnEvent, board }) {
//   let gameBoard = initGameLook;

//   for (const turn of turns) {
//     const { square, player } = turn;
//     const { row, col } = square;

//     gameBoard[row][col] = player;
//   }

  return (
    <ol id="game-board">
      {board.map((rowItem, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {rowItem.map((columnItem, columnIndex) => {
              return (
                <li key={columnIndex}>
                  <button
                    onClick={() => handleBtnEvent(rowIndex, columnIndex)}
                    disabled={columnItem ? true : false}
                  >
                    {columnItem}
                  </button>
                </li>
              );
            })}
          </ol>
        </li>
      ))}
    </ol>
  );
}
