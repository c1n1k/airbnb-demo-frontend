import React, { Component } from "react";
import styled from "styled-components";
import Filter from "./Filter";
import Calendar from "../UI/Calendar";

const FilterRow = styled.div`
  padding: 0 8px;
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

/* const DateFilter = props => {
  return (
    <FilterWrap label="Dates">
      <DatesRange>
        <Calendar onDatesChange={props.onDatesChange} />
      </DatesRange>
    </FilterWrap>
  );
}; */

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
      endDate: null
    };
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
  };

  render() {
    console.log(this.state);
    return (
      <FilterRow>
        <FilterWrap label="Dates">
          <DatesRange>
            <Calendar
              // startDate={this.state.startDate}
              // endDate={this.state.startDate}
              onDatesChange={this.onDatesChange}
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
