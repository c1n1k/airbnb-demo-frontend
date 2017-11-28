import React, { Component } from "react";
import Calendar from "../../UI/Calendar";
import { DatesRange } from "./styled";

export default class Dates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: this.props.startDate || null,
      endDate: this.props.endDate || null,
      focusedInput: "startDate"
    };
  }

  componentWillReceiveProps(nextProps) {
    /* this.setState({
      startDate: nextProps.startDate,
      endDate: nextProps.endDate,
      focusedInput: "startDate"
    }); */
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.setState(
      {
        startDate,
        endDate
      },
      () => {
        this.props.onChange(this.props.name, this.state);
      }
    );
  };

  onFocusChange = focusedInput => {
    this.setState({
      focusedInput: focusedInput || "startDate"
    });
  };

  render() {
    return (
      <DatesRange>
        <Calendar
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          focusedInput={this.state.focusedInput}
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
        />
      </DatesRange>
    );
  }
}
