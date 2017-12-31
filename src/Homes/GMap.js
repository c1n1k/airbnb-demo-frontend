import React, { Component } from "react";
import styled from "styled-components";
import GoogleMap from "google-map-react";
import Icon from "../UI/Icon";

const Wrap = styled.div`
  position: fixed;
  top: 136px;
  right: 0;
  bottom: 0;
  width: 100%;

  @media (min-width: 980px) {
    left: calc((100% - 980px + 16px) / 2);
    margin-left: calc((980px / 3) * 2);
  }
`;

const MapInner = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-out;
  transform: translate3d(100%, 0, 0);

  ${props => {
    if (props.isOpen) {
      return `
        transform: translate3D(0, 0, 0);
      `;
    }
  }};

  @media (min-width: 980px) {
    transform: translate3d(0, 0, 0);
  }
`;

const ToggleIcon = styled.span`
  position: absolute;
  top: 9px;
  left: 11px;
  width: 16px;
  height: 20px;
`;

const IconPin = () => {
  return (
    <ToggleIcon>
      <Icon icon="pin" width="16" height="20" fill="#008489" />
    </ToggleIcon>
  );
};

const ToggleMap = styled.button`
  position: fixed;
  bottom: 12px;
  right: 15px;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border: 1px solid rgba(72, 72, 72, 0.16);
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(72, 72, 72, 0.16);

  @media (min-width: 980px) {
    display: none;
  }
`;

class GMap extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    return (
      <Wrap className={this.props.className}>
        <MapInner isOpen={this.state.isOpen}>
          <GoogleMap
            bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_APIKEY }}
            // apiKey={process.env.REACT_APP_MAP_APIKEY}
            center={[59.938043, 30.337157]}
            zoom={9}
          />
        </MapInner>
        <ToggleMap onClick={this.toggle}>
          <IconPin />
        </ToggleMap>
      </Wrap>
    );
  }
}

export default GMap;
