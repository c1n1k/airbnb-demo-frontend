import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
  position: relative;
  width: 32px;
  height: 32px;
  line-height: 30px;
  text-align: center;
  background-color: transparent;
  color: #008489;
  border: 1px solid;
  border-radius: 50%;
`;

const ButtonMinus = styled(Button)`
  &:before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    margin: -1px 0 0 -5px;
    height: 2px;
    content: "";
    background-color: currentColor;
    border-radius: 1px;
  }

  ${props => {
    if (props.disabled) {
      return `
        opacity: .5;
        cursor: default;
      `;
    }
  }};
`;

const ButtonPlus = styled(Button)`
  &:before,
  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    margin: -1px 0 0 -5px;
    height: 2px;
    content: "";
    background-color: currentColor;
    border-radius: 1px;
    transform-origin: 50%;
  }

  &:before {
    transform: rotate(-90deg);
  }
`;

const Count = styled.span`
  margin: 0 5px;
  display: inline-block;
  width: 40px;
  height: 32px;
  vertical-align: top;
  font-size: 18px;
  font-weight: 300;
  line-height: 32px;
  text-align: center;
`;

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  componentDidMount() {}

  incCounter = () => {
    this.setState(state => ({
      counter: state.counter + 1
    }));
  };

  decCounter = () => {
    this.setState(state => ({
      counter: state.counter !== 0 ? state.counter - 1 : 0
    }));
  };

  isDisable = () => {
    return this.state.counter === 0;
  };

  render() {
    return (
      <div>
        <ButtonMinus onClick={this.decCounter} disabled={this.isDisable()} />
        <Count counter={this.state.counter}>{this.state.counter}</Count>
        <ButtonPlus onClick={this.incCounter} />
      </div>
    );
  }
}

export default Counter;
