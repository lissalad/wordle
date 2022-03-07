import "./App.css";
import { useState, useEffect } from "react";

import Row from "./components/Row";
import Guess from "./components/Guess";
import Header from "./components/Header";
import { evaluate, generateWord } from "./lib/Game";

function App() {
  const [result, setResult] = useState([]);
  const [won, setWon] = useState("");
  const [attempts, setAttempts] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    setAnswer(generateWord());
  }, []);

  function onSetResult(guess) {
    setResult(evaluate(guess, answer));
  }

  return (
    <div>
      <Header />
      {/* <p>{result}</p> */}
      <Row />
      <div className="App bg-slate-100 p-12 flex flex-col space-y-12">
        <div className="flex flex-col space-y-4"></div>
        <Guess onSetResult={onSetResult} />
      </div>
    </div>
  );
}

export default App;
