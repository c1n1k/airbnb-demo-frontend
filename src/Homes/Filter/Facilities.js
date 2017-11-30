import React, { Component } from "react";
import Checkbox from "../../UI/Checkbox";
import { Section, Title, Row, Col } from "./styled";

export default class Facilities extends Component {
  state = {
    elevator: this.props.facilities.elevator || false,
    parking: this.props.facilities.parking || false,
    pool: this.props.facilities.pool || false,
    wheelchair: this.props.facilities.wheelchair || false
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
        <Title>Facilities</Title>
        <Row>
          <Col>
            <Checkbox
              name="elevator"
              checked={this.state.elevator}
              onChange={this.updateState}
            >
              Elevator
            </Checkbox>
          </Col>
          <Col>
            <Checkbox
              name="parking"
              checked={this.state.parking}
              onChange={this.updateState}
            >
              Free parking on premises
            </Checkbox>
          </Col>
        </Row>
        <Row>
          <Col>
            <Checkbox
              name="pool"
              checked={this.state.pool}
              onChange={this.updateState}
            >
              Pool
            </Checkbox>
          </Col>
          <Col>
            <Checkbox
              name="wheelchair"
              checked={this.state.wheelchair}
              onChange={this.updateState}
            >
              Wheelchair accessible
            </Checkbox>
          </Col>
        </Row>
      </Section>
    );
  }
}
