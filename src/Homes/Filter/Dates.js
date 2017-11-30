import React, { Component } from "react";
import Calendar from "../../UI/Calendar";
import { DatesRange } from "./styled";

export default class Dates extends Component {
  state = {
    startDate: this.props.dates.startDate || null,
    endDate: this.props.dates.endDate || null,
    focusedInput: "startDate"
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({
      startDate: nextProps.dates.startDate,
      endDate: nextProps.dates.endDate
    });
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
