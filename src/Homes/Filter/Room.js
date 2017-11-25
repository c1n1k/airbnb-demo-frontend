import React, { Component } from "react";
import styled from "styled-components";
import Checkbox from "../../UI/Checkbox";
import Icon from "../../UI/Icon";

const RoomType = styled.div`
  margin-bottom: 15px;
  padding-right: 60px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const RoomIcon = styled.span`
  position: absolute;
  top: 5px;
  right: -60px;
  width: 32px;
  height: 32px;
`;

const IconHome = () => {
  return (
    <RoomIcon>
      <Icon icon="home" fill="currentColor" />
    </RoomIcon>
  );
};

const IconPrivate = () => {
  return (
    <RoomIcon>
      <Icon icon="private" fill="currentColor" />
    </RoomIcon>
  );
};

const IconShared = () => {
  return (
    <RoomIcon>
      <Icon icon="shared" fill="currentColor" />
    </RoomIcon>
  );
};

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
