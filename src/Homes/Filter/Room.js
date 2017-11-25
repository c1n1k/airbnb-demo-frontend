import React, { Component } from "react";
import Checkbox from "../../UI/Checkbox";
import { RoomType, IconHome, IconPrivate, IconShared } from "./styled";

export default class extends Component {
  render() {
    return (
      <div>
        <RoomType>
          <Checkbox
            name="entire"
            checked={this.props.entire}
            changeHandle={this.props.changeRoom}
          >
            Entire home
            <span>Have a place to yourplace</span>
            <IconHome />
          </Checkbox>
        </RoomType>
        <RoomType>
          <Checkbox
            name="private"
            checked={this.props.private}
            changeHandle={this.props.changeRoom}
          >
            Private room
            <span>Have your own room and share some common space</span>
            <IconPrivate />
          </Checkbox>
        </RoomType>
        <RoomType>
          <Checkbox
            name="shared"
            checked={this.props.shared}
            changeHandle={this.props.changeRoom}
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
