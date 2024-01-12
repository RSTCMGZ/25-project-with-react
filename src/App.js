import './App.css';
import LoadMoreData from './components/load-more-data/index.jsx';

// import ImageSlider from './components/img-slider/ImageSlider';
// import Accordian from './components/accordion';
// import StartRating from './components/start-rating/StartRating';

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian /> */}
      {/* <StartRating noOfStarts={10} /> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={'1'} limit={'10'} /> */}
      <LoadMoreData />
    </div>
  );
}

export default App;
