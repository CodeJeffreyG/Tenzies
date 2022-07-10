import React, {useState} from "react";
import Die from "./Components/Die";


function App() {
  

  
  const randomTenNumbers = () => {
    let result = [];
    for (let i = 0; i < 10; i++) {
      result.push(Math.ceil(Math.random() * 6));
    }
    return result; //creating an array of 10 random numbers
  };

  const [allDie, allDieState] = useState(randomTenNumbers())


    let die = allDie.map(dice => 
    <Die
    value = {dice} //map over all 10 numbers and giving each value as a prop
    />)


  return (
    <main>
      <div className="diceContainer">
        {die} 
      </div>
    </main>
  );
}

export default App;
