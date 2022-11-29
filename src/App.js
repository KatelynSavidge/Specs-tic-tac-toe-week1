import './App.css';
import Square from './Square';
import React, {useState} from 'react';

function App() {
  const [squares, setSquares ] =  useState(["", "", "","", "", "","", "", ""])
  const [player, setPlayer ] =  useState(true)

  function handleClick () {
    setSquares(["", "", "", "", "", "", "", "", ""])
    setPlayer(true)
  }

  function calculateWinner (arr) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ]

      for (let i=0; i<lines.length; i++) {
        const [a,b,c] = lines[i]
          if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
            return `${arr[a]} won!` 
          }
      } return "Who will win?"
  }

  return (
    <div className="App" >
      <span>{calculateWinner(squares)}</span>
      <button onClick={handleClick}>Reset</button>
        <div className="container">
            {squares.map((value, index) => {
                return (
                    <Square
                        setSquares={setSquares}
                        index={index}
                        squareValue={value}
                        squares={squares}
                        player={player}
                        setPlayer={setPlayer}
                    />
                );
            })}
        </div>
    </div>
);
}

export default App;
