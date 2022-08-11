import React from "react";
import ReactDOM from "react-dom";

import Stopwatch from "./stopwatch";
import "./App.css";

export default function App() {
  return (
    <div className="App">
        <a
          href="https://patmazurkiewicz.com"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      <Stopwatch />
    </div>
  );
}












// import './App.css';
// import React, {useState} from 'react';
// // import display from './display';
// // import button from './button';

// function App() {
//   const [time, setTime] = React.useState(0);
//   const [timerOn, setTimerOn] = React.useState(false);

//   React.useEffect(() => {
//     let interval = null;

//     if(timerOn){
//       interval = setInterval(() => {
//         setTime(prevTime => prevTime + 10)
//       }, 10);
//     }
//     else if (!timerOn) {
//       clearInterval(interval);
//     }

//     return () => clearInterval(interval);

//   }, [timerOn]); 

//   return (
//     <div className="Timers">
//       <div className='display'>
//         <span> {("0" + Math.floor((time / 60000) % 60)).slice(-2) }</span>
//         <span> {("0" + Math.floor((time / 1000) % 60)).slice(-2) }</span>   
//         <span> {("0" + ((time / 10) % 100)).slice(-2) }</span>
//       </div>
      
//       <div className='buttons'>
//         {!timerOn && time === 0 &&(
//           <button onClick={() => setTimerOn(true)}>Start</button>
//         )}
//         {timerOn &&
//           <button onClick={() => setTimerOn(false)}>Stop</button>
//         }
//         {!timerOn && time > 0 &&(
//           <button onClick={() => setTimerOn(0)}>Reset</button>  
//         )}
//         {!timerOn && time > 0 &&(
//           <button onClick={() => setTimerOn(true)}>Resume</button>
//         )}
//       </div>

//     </div>
//   );
// }

// export default App;
