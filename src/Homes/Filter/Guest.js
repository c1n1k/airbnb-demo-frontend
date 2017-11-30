import React, { Component } from "react";
import Counter from "../../UI/Counter";
import { Guest, GuestRow, GuestLabel } from "./styled";

export default class extends Component {
  state = {
    adults: this.props.currentGuest.adults || 1,
    children: this.props.currentGuest.children || 0,
    infants: this.props.currentGuest.infants || 0
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      ...nextProps.currentGuest
    });
  }

  changeCounterGuest = (name, count) => {
    this.setState(
      {
        [name]: name === "adults" && count < 1 ? 1 : count
      },
      () => {
        this.props.onChange(this.props.name, this.state);
      }
    );
  };

  render() {
    return (
      <Guest>
        <GuestRow>
          <GuestLabel>Adults</GuestLabel>
          <Counter
            name="adults"
            onChange={this.changeCounterGuest}
            counter={this.state.adults}
          />
        </GuestRow>
        <GuestRow>
          <GuestLabel>
            Children
            <span>Ages 2 — 12</span>
          </GuestLabel>
          <Counter
            name="children"
            onChange={this.changeCounterGuest}
            counter={this.state.children}
          />
        </GuestRow>
        <GuestRow>
          <GuestLabel>
            Infants
            <span>Under 2</span>
          </GuestLabel>
          <Counter
            name="infants"
            onChange={this.changeCounterGuest}
            counter={this.state.infants}
          />
        </GuestRow>
      </Guest>
    );
  }
}
