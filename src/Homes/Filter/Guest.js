import React, { Component } from "react";
import styled from "styled-components";
import Counter from "../../UI/Counter";

const Guest = styled.div``;

const GuestRow = styled.div`
  margin-bottom: 23px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: normal;
`;

const GuestLabel = styled.div`
  display: block;

  span {
    margin-top: 5px;
    display: block;
    font-size: 16px;
    font-weight: 300;
  }
`;

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
