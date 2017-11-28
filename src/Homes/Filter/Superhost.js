import React, { Component } from "react";
import Toggle from "../../UI/Toggle";
import {
  Section,
  SectionTitle,
  SectionRow,
  SectionLabel,
  SectionCol,
  SectionRemark,
  FilterLink
} from "./styled";

export default class Superhost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      superhost: this.props.superhost || false
    };
  }

  updateState = (name, value) => {
    this.setState(
      {
        ...this.state,
        [name]: value
      },
      () => {
        this.props.onChangeHandle(this.props.name, this.state);
      }
    );
  };

  render() {
    return (
      <Section>
        <SectionTitle>More options</SectionTitle>
        <SectionRow>
          <SectionCol>
            <SectionLabel>
              Superhost
              <SectionRemark>Stay with recognized</SectionRemark>
              <FilterLink to="">Learn more</FilterLink>
            </SectionLabel>
          </SectionCol>
          <SectionCol>
            <Toggle
              name="superhost"
              onChange={this.updateState}
              isActive={this.state.superhost}
            />
          </SectionCol>
        </SectionRow>
      </Section>
    );
  }
}
