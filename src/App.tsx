import React, { useState } from "react";
import Die from "./Components/Die";
import Button from "./Components/Button";

function App() {
  const randomTenNumbers = () => {
    let result = [];
    for (let i = 0; i < 10; i++) {
      result.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: i,
      });
    }
    return result; //creating an array of 10 random numbers
  };

  const [allDie, allDieState] = useState(randomTenNumbers());

  const reroll = () => {
    allDieState((prevState) =>
    //map over die to check if "isHeld" property is true
    //if so keep die the same
      prevState.map((die) =>
        die.isHeld === true
          ? { ...die }
          : { ...die, value: Math.ceil(Math.random() * 6) }
      )
    );
  };

  const holdDice = (id: any) => {
    allDieState((prevState) =>
      //map over die check if event id === die.id if so flip the "isHeld" property
      prevState.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  };

  let diceElements = allDie.map((dice) => (
    <Die
      value={dice.value}
      id={dice.id}
      isHeld={dice.isHeld}
      holdDice={() => holdDice(dice.id)}
    />
  ));

  return (
    <main>
      <div className="diceContainer">{diceElements}</div>
      <Button reroll={reroll} />
    </main>
  );
}

export default App;
