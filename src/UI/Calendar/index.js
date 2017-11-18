import React from "react";
import moment from "moment";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DayPickerRangeController } from "react-dates";

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let orientation;
    function resizeListener(e) {
      const target = e.target;
      orientation = target.outerWidth > 768 ? "horisontal" : "vertical";
    }

    window.addEventListener("resize", resizeListener);

    return (
      <DayPickerRangeController
        {...this.props}
        numberOfMonths={2}
        hideKeyboardShortcutsPanel
        startDate={this.props.startDate}
        endDate={this.props.endDate}
        focusedInput={this.props.focusedInput}
        onDatesChange={this.props.onDatesChange}
        isDayBlocked={day => day.isBefore(moment(), "day")}
      />
    );
  }
}
