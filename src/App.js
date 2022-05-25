import "./styles.css";
import { useState } from "react";

export default function App() {
  const [start, setStart] = useState(false);
  const [target, setTarget] = useState(50);
  const [given, setGiven] = useState();
  const [guessed, setGuessed] = useState();

  function onStart() {
    setStart(true);
  }
  function onChangeGuess(i) {
    setGiven(i.target.value);
  }

  function onGuessHandle() {
    setGuessed(given);
  }
  function onReplay() {
    setGiven("");
    setGuessed(null);
  }

  return (
    <div className="App">
      {!start && <h1 className="header">Guess the number game</h1>}
      {start && <h3> Guess the number hidden and win $10 </h3>}
      {!start && (
        <button className="starter" onClick={onStart}>
          Start the game
        </button>
      )}

      {start && <input onChange={onChangeGuess} value={given} />}
      {start && (
        <button className="guessing" onClick={onGuessHandle}>
          {" "}
          Select{" "}
        </button>
      )}

      {start && <h1 className="results"> {guessed} </h1>}
      {guessed !== null && target > guessed && (
        <div className="red"> Go higher ⬆️ </div>
      )}
      {guessed !== null && target < guessed && (
        <div className="blue"> Go lower ⬇️ </div>
      )}
      {guessed !== null && target == guessed && (
        <div className="green"> Congrats! 🎉 You just won $10</div>
      )}
      {guessed !== null && target == guessed && (
        <button className="winner" onClick={onReplay}>
          Yay! want to play again?
        </button>
      )}
      {guessed !== null && target < guessed && (
        <button className="winner" onClick={onReplay}>
          Try Again 😕
        </button>
      )}
      {guessed !== null && target > guessed && (
        <button className="winner" onClick={onReplay}>
          Try Again 😕
        </button>
      )}
    </div>
  );
}
