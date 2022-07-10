import React, { useState } from "react";
import Die from "./Components/Die";
import Button from "./Components/Button";

function App() {
  const randomTenNumbers = () => {
    let result = [];
    for (let i = 0; i < 10; i++) {
      result.push(Math.ceil(Math.random() * 6));
    }
    return result; //creating an array of 10 random numbers
  };

  const [allDie, allDieState] = useState(randomTenNumbers());

  const reroll = () => {
    allDieState((prevState) => (prevState = randomTenNumbers()));
  };

  let diceElements = allDie.map((dice) => <Die value={dice} />);

  return (
    <main>
      <div className="diceContainer">{diceElements}</div>
      <Button reroll={reroll} />
    </main>
  );
}

export default App;
