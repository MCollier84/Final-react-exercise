// FINAL REACT EXERCISE

// 2a
import MCUShows from "./mcu-shows/MCUShows";

// BONUS 6a
import { useState, useEffect} from 'react';

// 5a
const releaseDates = {
  wandaVision: 'January 2021',
  falconWinter: 'March 2021',
  loki: 'June 2021',
  whatIf: 'August 2021',
  hawkeye: 'November 2021'
};
// BONUS 6b
const mcuCharacters = [
  'Scarlet Witch',
  'Vision',
  'Falcon',
  'Winter Soldier',
  'Loki',
  'The Watcher',
  'Hawkeye'
];
function App() {
  // Bonus 6c
  const [index, setIndex] = useState(0);

  // BONUS 7a
  const [num, setNum] = useState(0);

// BONUS 8a
  // The function (1st argument) passed into the useEffect function/hook will run every time the state value ("num" in this example) that is passed into the array (2nd argument) is updated.
  // NOTE: If nothing is passed in for a 2nd argument, then the function will run whenever any state values are updated.)
  useEffect(() => {
    alert("The Next MCU Character has been displayed");
  }, [num]);


  // BONUS 6f
  function newIndex() {
    const randomIndex = Math.floor(Math.random() * mcuCharacters.length);
    setIndex(randomIndex);
  }
  // BONUS 7d
  function newNum() {
    
    if (num < mcuCharacters.length - 1) {
      setNum(num + 1);
    } else {
      setNum(0);
    }
  }

  return (
    <div>
      {/* 2b */}
      <h1>FINAL REACT EXERCISE</h1>
      {/* 2c & 5b BONUS 6f*/}
      <MCUShows dates={releaseDates} indexTwo={newIndex} />
      num={newNum}
      {/* BONUS 6d BONUS 6f*/}
      <h1>Random MCU Character: {mcuCharacters[index]} </h1>
      {/* BONUS 7b */}
      <h1>Next MCU Character:{mcuCharacters[num]} </h1>

    </div>
  );
}

export default App;
