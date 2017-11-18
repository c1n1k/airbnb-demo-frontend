import React from "react";
import moment from "moment";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DayPickerRangeController } from "react-dates";

/* export default props => {
  return (
    <DayPickerRangeController
      numberOfMonths={2}
      hideKeyboardShortcutsPanel
      startDate={props.startDate}
      endDate={props.endDate}
      onDatesChange={props.onDatesChange}
      isDayBlocked={day => day.isBefore(moment(), "day")}
    />
  );
}; */

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DayPickerRangeController
        numberOfMonths={2}
        hideKeyboardShortcutsPanel
        startDate={this.props.startDate}
        endDate={this.props.endDate}
        onDatesChange={this.props.onDatesChange}
        isDayBlocked={day => day.isBefore(moment(), "day")}
      />
    );
  }
}
