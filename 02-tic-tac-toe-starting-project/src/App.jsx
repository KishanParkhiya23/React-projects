import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver.jsx";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";

const initGameLook = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function handleActivePlayer(gameTurn) {
  let curActivePlayer = "X";
  if (gameTurn.length > 0 && gameTurn[0].player === "X") {
    curActivePlayer = "O";
  }
  return curActivePlayer;
}

function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  const activePlayer = handleActivePlayer(gameTurn);
  const hasDraw = gameTurn.length == 9;
  let winner = null;
  let gameBoard = initGameLook;

  for (const turn of gameTurn) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  for (const combination of WINNING_COMBINATIONS) {
    const firstSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSymbol = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSymbol &&
      firstSymbol === secondSymbol &&
      firstSymbol === thirdSymbol
    ) {
      winner = players[firstSymbol];
    }
  }

  const handleChangeActivePlayer = (rowIndex, colIndex) => {
    setGameTurn((prevTurn) => {
      const updatedTurn = [
        {
          square: { row: rowIndex, col: colIndex },
          player: activePlayer,
        },
        ...prevTurn,
      ];

      return updatedTurn;
    });
  };

  const handleNameChange = (symbol, playerName) => {
    setPlayers((oldPlayers) => {
      return {
        ...oldPlayers,
        [symbol]: playerName,
      };
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            handleNameChange={handleNameChange}
            activePlayer={activePlayer === "X"}
          />
          <Player
            name="Player 2"
            symbol="O"
            handleNameChange={handleNameChange}
            activePlayer={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          handleBtnEvent={handleChangeActivePlayer}
          turns={gameTurn}
          board={gameBoard}
        />
      </div>
      {winner || hasDraw ? <GameOver winner={winner} /> : null}
      <Log turns={gameTurn} />
    </main>
  );
}

export default App;
