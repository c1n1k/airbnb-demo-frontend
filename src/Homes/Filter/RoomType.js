import React, { Component } from "react";
import Checkbox from "../../UI/Checkbox";
import { RoomType, IconHome, IconPrivate, IconShared } from "./styled";

export default class extends Component {
  state = {
    entire: this.props.value.entire,
    private: this.props.value.private,
    shared: this.props.value.shared
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      ...nextProps.value
    });
  }

  handleChange = (name, checked) => {
    this.setState(
      {
        [name]: checked
      },
      () => {
        this.props.onChange(this.props.name, this.state);
      }
    );
  };

  render() {
    return (
      <div>
        <RoomType>
          <Checkbox
            name="entire"
            checked={this.state.entire}
            onChange={this.handleChange}
          >
            Entire home
            <span>Have a place to yourplace</span>
            <IconHome />
          </Checkbox>
        </RoomType>
        <RoomType>
          <Checkbox
            name="private"
            checked={this.state.private}
            onChange={this.handleChange}
          >
            Private room
            <span>Have your own room and share some common space</span>
            <IconPrivate />
          </Checkbox>
        </RoomType>
        <RoomType>
          <Checkbox
            name="shared"
            checked={this.state.shared}
            onChange={this.handleChange}
          >
            Shared room
            <span>Stay in a shared space, like a common room</span>
            <IconShared />
          </Checkbox>
        </RoomType>
      </div>
    );
  }
}
