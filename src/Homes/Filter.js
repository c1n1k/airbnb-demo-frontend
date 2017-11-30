import React, { Component } from "react";
import Popup from "../UI/Popup";
import { Wrap, FilterToggler } from "./styled";

const autofitMoreFilter = element => {
  console.log(element);
  const box = element.getBoundingClientRect();
  const top = box.top;
  return window.innerHeight - top - element.offsetHeight - 12;
};

class Filter extends Component {
  handleToggle = e => {
    if (this.props.bodyLike) {
      const dropdown = e.target.nextSibling.firstChild;
      const height = autofitMoreFilter(e.target);
      dropdown.style.height = height + "px";
    }
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
          onApply={this.props.onApply}
        >
          {this.props.children}
        </Popup>
      </Wrap>
    );
  }
}

export default Filter;
