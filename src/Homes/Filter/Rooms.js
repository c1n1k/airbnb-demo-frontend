import React, { Component } from "react";
import Counter from "../../UI/Counter";
import { Section, Title, Row, Label, Col } from "./styled";

export default class Beds extends Component {
  state = {
    bedroom: this.props.rooms.bedroom || 0,
    bed: this.props.rooms.bed || 1,
    bath: this.props.rooms.bath || 0
  };

  handleChange = (name, value) => {
    this.setState(
      {
        [name]: name === "bed" && value < 1 ? 1 : value
      },
      () => {
        this.props.onChange(this.props.name, this.state);
      }
    );
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      ...nextProps.rooms
    });
  }

  render() {
    return (
      <Section>
        <Title>Rooms and beds</Title>
        <Row>
          <Col>
            <Label>Bedrooms</Label>
          </Col>
          <Col>
            <Counter
              name="bedroom"
              onChange={this.handleChange}
              counter={this.state.bedroom}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Label>Beds</Label>
          </Col>
          <Col>
            <Counter
              name="bed"
              onChange={this.handleChange}
              counter={this.state.bed}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Label>Bathrooms</Label>
          </Col>
          <Col>
            <Counter
              name="bath"
              onChange={this.handleChange}
              counter={this.state.bath}
            />
          </Col>
        </Row>
      </Section>
    );
  }
}
