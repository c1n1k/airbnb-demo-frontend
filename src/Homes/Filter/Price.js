import React, { Component } from "react";
import Rheostat from "rheostat";
import "rheostat/css/slider.css";
import "rheostat/css/slider-horizontal.css";
import "./rheostat.css";
import { Price, PriceMin, PriceMax, PriceRemark } from "./styled";

export default class extends Component {
  state = {
    minPrice: this.props.minPrice,
    maxPrice: this.props.maxPrice,
    values: this.props.values || [0, 1000]
  };

  constructor(props) {
    super(props);
    this.updatePrice = this.updatePrice.bind(this);
  }

  updatePrice(sliderState) {
    this.setState(
      {
        values: sliderState.values
      },
      () => {
        this.props.onValuesUpdated(this.props.name, this.state);
      }
    );
  }

  render() {
    return (
      <Price>
        <div>
          <PriceMin>{this.props.values[0]} $</PriceMin> —{" "}
          <PriceMax>{this.props.values[1]} $</PriceMax>
        </div>
        <PriceRemark>The average nightly price is 75$</PriceRemark>
        <Rheostat
          min={this.props.minPrice}
          max={this.props.maxPrice}
          values={this.props.values}
          onValuesUpdated={this.updatePrice}
        />
      </Price>
    );
  }
}
