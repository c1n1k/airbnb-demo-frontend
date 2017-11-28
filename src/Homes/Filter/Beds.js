import React, { Component } from "react";
import Counter from "../../UI/Counter";
import {
  Section,
  SectionTitle,
  SectionRow,
  SectionLabel,
  SectionCol
} from "./styled";

export default class Beds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bedroom: this.props.rooms.bedroom || 0,
      bed: this.props.rooms.bed || 1,
      bath: this.props.rooms.bath || 0
    };
  }

  updateState = (name, value) => {
    this.setState(
      {
        ...this.state,
        [name]: name === "bed" && value < 1 ? 1 : value
      },
      () => {
        this.props.onChangeHandle(this.props.name, this.state);
      }
    );
  };

  render() {
    return (
      <Section>
        <SectionTitle>Rooms and beds</SectionTitle>
        <SectionRow>
          <SectionCol>
            <SectionLabel>Bedrooms</SectionLabel>
          </SectionCol>
          <SectionCol>
            <Counter
              name="bedroom"
              onChange={this.updateState}
              counter={this.state.bedroom}
            />
          </SectionCol>
        </SectionRow>
        <SectionRow>
          <SectionCol>
            <SectionLabel>Beds</SectionLabel>
          </SectionCol>
          <SectionCol>
            <Counter
              name="bed"
              onChange={this.updateState}
              counter={this.state.bed}
            />
          </SectionCol>
        </SectionRow>
        <SectionRow>
          <SectionCol>
            <SectionLabel>Bathrooms</SectionLabel>
          </SectionCol>
          <SectionCol>
            <Counter
              name="bath"
              onChange={this.updateState}
              counter={this.state.bath}
            />
          </SectionCol>
        </SectionRow>
      </Section>
    );
  }
}
