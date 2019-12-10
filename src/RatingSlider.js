import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import './RatingSlider.css'

class RatingSlider extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      rating: 0
    }
  }

  handleOnChange = (value) => {
    this.setState({
      rating: value
    })
  }

  render() {
    let { rating } = this.state;
    const numbers = [0, 1, 2, 3, 4, 5, 6 , 7 , 8 , 9 , 10];
    const listItems = numbers.map((number) =>
      <li key={number}>{number}</li>
    );
    let ratingLabel = String(rating);
    return (
      <div>
        <ul className="rating_strip">
          {listItems}
        </ul>
        <Slider
          min={numbers[0]}
          max={numbers[numbers.length -1]}
          step={1}
          value={rating}
          tooltip={false}
          handleLabel={ratingLabel}
          orientation="horizontal"
          onChange={this.handleOnChange}
        />
        <p>Rating : {rating}</p>
      </div>
    )
  }
}

export default RatingSlider;