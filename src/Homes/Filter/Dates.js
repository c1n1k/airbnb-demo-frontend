import React from "react";
import styled from "styled-components";
import Calendar from "../../UI/Calendar";

const DatesRange = styled.div`
  margin-left: -10px;
  margin-right: -10px;

  & .DayPicker__horizontal {
    box-shadow: none;
  }

  & .CalendarMonth_caption {
    padding-bottom: 40px;
  }
`;

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
