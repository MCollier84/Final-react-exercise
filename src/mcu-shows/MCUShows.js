// FINAL REACT EXERCISE

// 1a
import './MCUShows.css';

// 1b
function MCUShows({dates, indexTwo, numTwo}){
  // 1c
  return(
    // 4a
    <div className="MCUShows">
      <h1 style={{fontFamily: 'Georgia', textDecoration: 'underline'}}>Disney+</h1>
      <h2>MCU Show Release Dates</h2>
      {/* 5c */}
      <p>WandaVision: {dates.wandaVision}</p>
      <p>The Falcon and the Winter Soldier: {dates.falconWinter} </p>
      <p>Loki: {dates.loki}</p>
      <p>What If...?: {dates.whatIf} </p>
      <p>Hawkeye: {dates.hawkeye} </p>
      {/* BONUS 6e 6f*/}
      <button onclick={indexTwo}>RANDOM MCU CHARACTER</button>
      {/* BONUS 7c */}
      <button onclick={numTwo}>NEXT MCU CHARACTER</button>

    </div>
  );
}

// 1d
export default MCUShows;