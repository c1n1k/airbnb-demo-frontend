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
      ...nextProps.facilities
    });
  }

  render() {
    return (
      <Section>
        <Title>Facilities</Title>
        <Row>
          <Col>
            <Checkbox
              name="elevator"
              checked={this.state.elevator}
              onChange={this.handleChange}
            >
              Elevator
            </Checkbox>
          </Col>
          <Col>
            <Checkbox
              name="parking"
              checked={this.state.parking}
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            >
              Pool
            </Checkbox>
          </Col>
          <Col>
            <Checkbox
              name="wheelchair"
              checked={this.state.wheelchair}
              onChange={this.handleChange}
            >
              Wheelchair accessible
            </Checkbox>
          </Col>
        </Row>
      </Section>
    );
  }
}
