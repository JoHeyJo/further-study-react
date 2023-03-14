import React from 'react';
import './App.css';
import Carousel from './Carousel';
import photos from './photos';

function App() {
  const carouselPhotos = photos;
  const carouselTitle = "Beach shells"

  return (
    <div className="App">
      <Carousel photos={carouselPhotos} title={carouselTitle}/>
    </div>
  );
}

export default App;
