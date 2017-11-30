import React, { Component } from "react";
import Checkbox from "../../UI/Checkbox";
import { Section, Title, Row, Col } from "./styled";

export default class Amenities extends Component {
  state = {
    heating: this.props.amenities.heating || false,
    kitchen: this.props.amenities.kitchen || false,
    tv: this.props.amenities.tv || false,
    wifi: this.props.amenities.wifi || false
  };

  updateState = (name, value) => {
    this.setState(
      {
        [name]: value
      },
      () => {
        this.props.onChange(this.props.name, this.state);
      }
    );
  };

  render() {
    return (
      <Section>
        <Title>Amenities</Title>
        <Row>
          <Col>
            <Checkbox
              name="heating"
              checked={this.state.heating}
              onChange={this.updateState}
            >
              Heating
            </Checkbox>
          </Col>
          <Col>
            <Checkbox
              name="kitchen"
              checked={this.state.kitchen}
              onChange={this.updateState}
            >
              Kitchen
            </Checkbox>
          </Col>
        </Row>
        <Row>
          <Col>
            <Checkbox
              name="tv"
              checked={this.state.tv}
              onChange={this.updateState}
            >
              TV
            </Checkbox>
          </Col>
          <Col>
            <Checkbox
              name="wifi"
              checked={this.props.wifi}
              onChange={this.updateState}
            >
              Wireless Internet
            </Checkbox>
          </Col>
        </Row>
      </Section>
    );
  }
}
