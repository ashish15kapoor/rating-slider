import React, { Component } from 'react';
import './App.css';
import RatingSlider from './RatingSlider';

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="rating_slider_wrapper">
          <RatingSlider></RatingSlider>
        </div>
      </div>
    );
  }
}

export default App;
