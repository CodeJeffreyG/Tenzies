import React, { useState, useEffect } from "react";
import Die from "./Components/Die";
import Button from "./Components/Button";
import { count } from "console";

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

  //array of random numbers 1 - 6 state
  const [allDie, allDieState] = useState(randomTenNumbers());

  //win con state
  const [tenzies, setTenzies] = useState(false);

  //counter state
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    //is the "isHeld" property true for every die?
    const areHeld = allDie.every((allDie) => allDie.isHeld);
    //reference to check if all "value properties are the same"
    const firstValue = allDie[0].value;
    // is the "value" property the same number?
    const allValueSame = allDie.every((allDie) => firstValue === allDie.value);

    //if so change Tenzie State
    if (areHeld && allValueSame) {
      setTenzies((prevValue) => !prevValue);
    }
  }, [allDie]);

  //increment counter
  const reroll = () => {
    allDieState((prevState) =>
      //map over die to check if "isHeld" property is true
      //if so keep die the same
      prevState.map((die) =>
        die.isHeld
          ? { ...die }
          : { ...die, value: Math.ceil(Math.random() * 6) }
      )
    );
    setCounter((prevCounter) => prevCounter + 1);
  };

  const holdDice = (id: any) => {
    allDieState((prevState) =>
      //map over die check if event id === die.id if so flip the "isHeld" property
      prevState.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  };

  //restart game
  const initialize = () => {
    allDieState((prevState) => (prevState = randomTenNumbers()));
    //delete all held dice
    allDie.map((Die) => (Die.isHeld ? { ...Die, isHeld: !Die.isHeld } : Die));
    //set wincon to false
    setTenzies((prevState) => !prevState);
    //set counter to 0
    setCounter((prevCounter) => (prevCounter = 0));
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
      <h1 className="title">{tenzies ? "You Won!" : "Tenzies"}</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="diceContainer">{diceElements}</div>
      <Button
        reroll={reroll}
        win={tenzies}
        increment={counter}
        restart={initialize}
      />
    </main>
  );
}

export default App;
