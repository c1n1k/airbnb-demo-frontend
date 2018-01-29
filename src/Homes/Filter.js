import React, { Component } from "react";
import Popup from "../UI/Popup";
import { Wrap, FilterToggler } from "./styled";

const autofitMoreFilter = element => {
  const box = element.getBoundingClientRect();
  const top = box.top;
  return window.innerHeight - top - element.offsetHeight - 12;
};

class Filter extends Component {
  state = {
    height: 0
  };

  handleToggle = e => {
    if (this.props.bodyLike) {
      this.setState({
        height: autofitMoreFilter(e.target)
      });
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
          isFill={this.props.label.isFill}
        >
          {this.props.label.text}
        </FilterToggler>
        {this.props.isOpen && (
          <Popup
            label={this.props.label}
            isOpen={this.props.isOpen}
            forClose={this.props.toggle}
            bodyLike={this.props.bodyLike}
            height={this.state.height}
            name={this.props.openedFilter}
            onReset={this.props.reset}
            onApply={this.props.onApply}
            onClose={this.props.onClose}
          >
            {this.props.children}
          </Popup>
        )}
      </Wrap>
    );
  }
}

export default Filter;
