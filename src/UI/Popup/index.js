import React, { Component } from "react";
import {
  Wrap,
  Header,
  MobileClose,
  MobileReset,
  Body,
  Inner,
  Footer,
  Button
} from "./styled";

class Popup extends Component {
  handleReset = () => {
    this.props.onReset(this.props.name);
  };

  handleApply = () => {
    this.props.onApply();
  };

  render() {
    const closePopup = this.props.forClose;

    return (
      <div>
        <Wrap
          className={this.props.className}
          isOpen={this.props.isOpen}
          openFilter={this.props.openedFilter}
          bodyLike={this.props.bodyLike}
          height={this.props.height}
        >
          <Header>
            <MobileClose onClick={closePopup} type="button" />
            {this.props.label}
            <MobileReset onClick={this.handleReset} type="button">
              Reset
            </MobileReset>
          </Header>
          <Body bodyLike={this.props.bodyLike}>
            <Inner bodyLike={this.props.bodyLike}>{this.props.children}</Inner>
          </Body>
          <Footer bodyLike={this.props.bodyLike}>
            <Button onClick={closePopup} type="button">
              Cancel
            </Button>
            <Button primary type="button" onClick={this.handleApply}>
              Apply
            </Button>
          </Footer>
        </Wrap>
      </div>
    );
  }
}

export default Popup;
