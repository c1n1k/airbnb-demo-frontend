import React, { Component } from "react";
import Popup from "../UI/Popup";
import { Wrap, FilterToggler } from "./styled";

class Filter extends Component {
  handleToggle = () => {
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
          onClick={this.handleToggle}
          isOpen={this.props.isOpen}
          isFill={this.props.isFill}
        >
          {this.props.label}
        </FilterToggler>
        <Popup
          label={this.props.label}
          isOpen={this.props.isOpen}
          forClose={this.props.toggle}
          bodyLike={this.props.bodyLike}
          name={this.props.openedFilter}
          onReset={this.props.reset}
        >
          {this.props.children}
        </Popup>
      </Wrap>
    );
  }
}

export default Filter;
