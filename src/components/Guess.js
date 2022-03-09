import { useState, useRef } from "react";
import Row from "./Row";

function Guess({ onSetGuess }) {
  const guessRef = useRef();

  function onClick() {
    let guess = guessRef.current.value;
    onSetGuess(guess);
    // console.log(guess);
  }

  return (
    <section>
      <div className="flex flex-col items-center">
        <h1>make your guess</h1>
        <input
          className="bg-slate-200 border-[2px] rounded-sm border-slate-500 text-[60px] text-center w-64 my-2"
          ref={guessRef}
          maxLength="5"
          // minLength="5"
        />
        <button
          className="text-md py-1 px-3 rounded-lg m-2 bg-sky-300"
          onClick={onClick}
          type="submit"
        >
          Enter
        </button>
      </div>
    </section>
  );
}
export default Guess;
