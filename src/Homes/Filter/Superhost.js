import React, { Component } from "react";
import Toggle from "../../UI/Toggle";
import { Section, Title, Row, Label, Col, Remark, FilterLink } from "./styled";

export default class Superhost extends Component {
  state = {
    superhost: this.props.superhost || false
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
        <Title>More options</Title>
        <Row>
          <Col>
            <Label>
              Superhost
              <Remark>Stay with recognized</Remark>
              <FilterLink to="">Learn more</FilterLink>
            </Label>
          </Col>
          <Col>
            <Toggle
              name="superhost"
              onChange={this.updateState}
              isActive={this.state.superhost}
            />
          </Col>
        </Row>
      </Section>
    );
  }
}
