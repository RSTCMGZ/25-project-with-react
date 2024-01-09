import './App.css';
// import Accordian from './components/accordion';
import StartRating from './components/start-rating/StartRating';

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian /> */}
      <StartRating noOfStarts={10} />
    </div>
  );
}

export default App;
