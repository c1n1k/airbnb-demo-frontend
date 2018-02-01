import React, { Component } from "react";
import Toggle from "../../UI/Toggle";
import { Section, Title, Row, Label, Col, Remark, FilterLink } from "./styled";

export default class Superhost extends Component {
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
              onChange={this.props.onChange}
              isActive={this.props.superhost}
            />
          </Col>
        </Row>
      </Section>
    );
  }
}
