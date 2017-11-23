import React from "react";
import moment from "moment";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DayPickerRangeController } from "react-dates";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orientation: "horizontal"
    };
  }

  getOrientation = e => {
    const target = window;
    const orientation = target.outerWidth > 768 ? "horizontal" : "vertical";
    this.setState(() => ({
      orientation: orientation
    }));
  };

  componentDidMount() {
    this.getOrientation();
    window.addEventListener("resize", this.getOrientation);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.getOrientation);
  }

  render() {
    return (
      <DayPickerRangeController
        {...this.props}
        orientation={this.state.orientation}
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
