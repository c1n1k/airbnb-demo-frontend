import React, { Component } from "react";
import styled from "styled-components";
import Filter from "./Filter";
import Calendar from "../UI/Calendar";

const FilterRow = styled.div`
  padding: 0;
  white-space: nowrap;
`;

const FilterWrap = styled(Filter)`
  position: relative;
  display: inline-block;
  margin: 0 6px;
  vertical-align: top;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

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

const RoomType = styled.div``;

const RoomFilter = props => {
  return (
    <FilterWrap label="Room type">
      <RoomType />
    </FilterWrap>
  );
};

const Guest = styled.div``;

const GuestFilter = props => {
  return (
    <FilterWrap label="Guests">
      <Guest />
    </FilterWrap>
  );
};

const Price = styled.div``;

const PriceFilter = props => {
  return (
    <FilterWrap label="Price">
      <Price />
    </FilterWrap>
  );
};

const InstantBook = styled.div``;

const InstantBookFilter = props => {
  return (
    <FilterWrap label="Instant book">
      <InstantBook />
    </FilterWrap>
  );
};

const Other = styled.div``;

const OtherFilter = props => {
  return (
    <FilterWrap label="More filters">
      <Other />
    </FilterWrap>
  );
};

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: "startDate"
    };
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });

    const startDateString = startDate && startDate.format("MMM DD");
    const endDateString = endDate && endDate.format("MMM DD");

    this.setState({
      label:
        startDateString && endDateString
          ? `${startDateString} - ${endDateString}`
          : "Dates"
    });
  };

  onFocusChange = focusedInput => {
    this.setState({
      // Force the focusedInput to always be truthy so that dates are always selectable
      focusedInput: focusedInput || "startDate"
    });
  };

  render() {
    return (
      <FilterRow>
        <FilterWrap label={this.state.label || "Dates"}>
          <DatesRange>
            <Calendar
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              focusedInput={this.state.focusedInput}
              onDatesChange={this.onDatesChange}
              onFocusChange={this.onFocusChange}
            />
          </DatesRange>
        </FilterWrap>
        <GuestFilter />
        <RoomFilter />
        <PriceFilter />
        <InstantBookFilter />
        <OtherFilter />
      </FilterRow>
    );
  }
}

export default Filters;
