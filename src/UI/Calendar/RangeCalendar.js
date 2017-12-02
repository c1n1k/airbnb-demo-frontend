import React from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import "./style.css";

export default class RangeCalendar extends React.Component {
  state = {
    startDate: null,
    endDate: null,
    focusedInput: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.setState(
      {
        startDate: startDate,
        endDate: endDate
      },
      () => {
        this.props.onChangeDate(this.state);
      }
    );
  };

  onFocusChange = focusedInput => {
    this.setState({
      focusedInput: focusedInput
    });
  };

  render() {
    return (
      <DateRangePicker
        startDatePlaceholderText=""
        endDatePlaceholderText=""
        startDateId="startDate"
        endDateId="endDate"
        numberOfMonths={1}
        hideKeyboardShortcutsPanel
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        focusedInput={this.state.focusedInput}
        onDatesChange={this.onDatesChange}
        onFocusChange={this.onFocusChange}
      />
    );
  }
}
