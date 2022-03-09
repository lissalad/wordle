import "./App.css";
import { useState, useEffect } from "react";

import Row from "./components/Row";
import Grid from "./components/Grid";
import Guess from "./components/Guess";
import Header from "./components/Header";
import { evaluate, generateWord } from "./lib/Game";

function App() {
  const [guess, setGuess] = useState([]);
  const [won, setWon] = useState("");
  const [attempts, setAttempts] = useState("");
  const [answer, setAnswer] = useState("");

  const [a0, setA0] = useState(undefined);
  const [a1, setA1] = useState([["e","correct"],[""],[""],[""],[""]]);
  const [a3, setA3] = useState(undefined);
  const [a2, setA2] = useState(undefined);
  const [a4, setA4] = useState(undefined);
  const [a5, setA5] = useState(undefined);

  const tries = [[a0, setA0], [a1, setA1], [a2, setA2], [a3, setA3], [a4, setA4], [a5, setA5]];

  useEffect(() => {
    setAnswer(generateWord());
  }, []);

  function onSetGuess(guess) {
    setGuess(evaluate(guess, answer));
  }

  function showGuess () {
    // keep count
    // call evaluate
    // call set function based on index count

  }

  return (
    <div>
      <Header className="App" />
      <main className="flex flex-col space-y-3 m-5">
        <section>
          <Row attempt={tries[0[0]]}/>
          <Row attempt={tries[1[0]]}/>
          <Row attempt={tries[2[0]]}/>
          <Row attempt={tries[3[0]]}/>
          <Row attempt={tries[4[0]]}/>
          <Row attempt={tries[5[0]]}/>
        </section>
        <Guess onSetGuess={onSetGuess} />
      </main>
    </div>
  );
}

export default App;
