import React, { Component } from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import Popup from "../UI/Popup";

const Wrap = styled.div``;

const FilterToggler = styled(Button)`
  ${props => {
    if (props.isOpen) {
      return `
        color: #fff;
        background-color: #008489;
      `;
    }
  }};
`;

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    return (
      <Wrap className={this.props.className}>
        <FilterToggler
          type="button"
          onClick={this.toggle}
          isOpen={this.state.isOpen}
        >
          {this.props.buttonText}
        </FilterToggler>
        <Popup isOpen={this.state.isOpen} forClose={this.toggle}>
          {this.props.children}
        </Popup>
      </Wrap>
    );
  }
}

export default Filter;
