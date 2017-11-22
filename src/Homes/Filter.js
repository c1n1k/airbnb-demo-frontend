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
  handelToggle = () => {
    this.props.toggle(this.props.openedFilter);
  };

  render() {
    return (
      <Wrap
        className={this.props.className}
        openedFilter={this.props.openedFilter}
      >
        <FilterToggler
          type="button"
          onClick={this.handelToggle}
          isOpen={this.props.isOpen}
        >
          {this.props.label}
        </FilterToggler>
        <Popup isOpen={this.props.isOpen} forClose={this.props.toggle}>
          {this.props.children}
        </Popup>
      </Wrap>
    );
  }
}

export default Filter;
