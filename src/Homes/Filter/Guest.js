import React, { Component } from "react";
import Counter from "../../UI/Counter";
import { Guest, GuestRow, GuestLabel } from "./styled";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adults: this.props.currentGuest.adults || 1,
      children: this.props.currentGuest.children || 0,
      infants: this.props.currentGuest.infants || 0
    };
  }

  changeCounterGuest = (count, name) => {
    this.setState(
      {
        ...this.state,
        [name]: name === "adults" && count < 1 ? 1 : count
      },
      () => {
        this.props.onChange(this.state);
      }
    );
  };

  render() {
    return (
      <Guest initialGuest={this.props.currentGuest}>
        <GuestRow>
          <GuestLabel>Adults</GuestLabel>
          <Counter
            onChange={this.changeCounterGuest}
            name="adults"
            counter={this.state.adults}
          />
        </GuestRow>
        <GuestRow>
          <GuestLabel>
            Children
            <span>Ages 2 — 12</span>
          </GuestLabel>
          <Counter
            onChange={this.changeCounterGuest}
            name="children"
            counter={this.state.children}
          />
        </GuestRow>
        <GuestRow>
          <GuestLabel>
            Infants
            <span>Under 2</span>
          </GuestLabel>
          <Counter
            onChange={this.changeCounterGuest}
            name="infants"
            counter={this.state.infants}
          />
        </GuestRow>
      </Guest>
    );
  }
}
