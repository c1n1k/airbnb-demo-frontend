import React from "react";
import Calendar from "../../UI/Calendar";
import { DatesRange } from "./styled";

export default props => {
  return (
    <DatesRange>
      <Calendar
        startDate={props.startDate}
        endDate={props.endDate}
        focusedInput={props.focusedInput}
        onDatesChange={props.onDatesChange}
        onFocusChange={props.onFocusChange}
      />
    </DatesRange>
  );
};
