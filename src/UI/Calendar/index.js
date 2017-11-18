import React from "react";
import moment from "moment";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DayPickerRangeController } from "react-dates";

/* class DateFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      startDate: null,
      endDate: null,
      focusedInput: null
    };
  }

  render() {
    const { startDate, endDate } = this.state;
    const startDateString = startDate && startDate.format("YYYY-MM-DD");
    const endDateString = endDate && endDate.format("YYYY-MM-DD");

    return (
      <FilterItem buttonText="Dates">
        <DatesRange>
          <DayPickerRangeController
            {...this.props}
            startDate={startDate}
            endDate={endDate}
            onDatesChange={({ startDate, endDate }) =>
              this.setState({ startDate, endDate })}
            numberOfMonths={2}
            hideKeyboardShortcutsPanel
          />
        </DatesRange>
      </FilterItem>
    );
  }
}
 */

export default props => {
  return (
    <DayPickerRangeController
      className={props.className}
      numberOfMonths={2}
      hideKeyboardShortcutsPanel
      startDate={props.startDate}
      endDate={props.endDate}
      onDatesChange={props.onDatesChange}
      isDayBlocked={day => day.isBefore(moment(), "day")}
    />
  );
};
