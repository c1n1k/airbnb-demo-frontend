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

  handleChange = (name, value) => {
    this.setState(
      {
        [name]: value
      },
      () => {
        this.props.onChange(this.props.name, this.state);
      }
    );
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      ...nextProps.amenities
    });
  }

  render() {
    return (
      <Section>
        <Title>Amenities</Title>
        <Row>
          <Col>
            <Checkbox
              name="heating"
              checked={this.state.heating}
              onChange={this.handleChange}
            >
              Heating
            </Checkbox>
          </Col>
          <Col>
            <Checkbox
              name="kitchen"
              checked={this.state.kitchen}
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            >
              TV
            </Checkbox>
          </Col>
          <Col>
            <Checkbox
              name="wifi"
              checked={this.state.wifi}
              onChange={this.handleChange}
            >
              Wireless Internet
            </Checkbox>
          </Col>
        </Row>
      </Section>
    );
  }
}
