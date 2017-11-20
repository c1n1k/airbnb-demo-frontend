import React, { Component } from "react";
import styled from "styled-components";
import Filter from "./Filter";
import Calendar from "../UI/Calendar";
import Counter from "../UI/Counter";

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
const GuestRow = styled.div`
  margin-bottom: 23px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: normal;
`;

const GuestLabel = styled.div`
  display: block;

  span {
    margin-top: 5px;
    display: block;
    font-size: 16px;
    font-weight: 300;
  }
`;

const GuestFilter = props => {
  return (
    <Guest>
      <GuestRow>
        <GuestLabel>Adults</GuestLabel>
        <Counter />
      </GuestRow>
      <GuestRow>
        <GuestLabel>
          Children
          <span>Ages 2 — 12</span>
        </GuestLabel>
        <Counter />
      </GuestRow>
      <GuestRow>
        <GuestLabel>
          Infants
          <span>Under 2</span>
        </GuestLabel>
        <Counter />
      </GuestRow>
    </Guest>
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
      focusedInput: "startDate",
      openedFilter: ""
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
        <FilterWrap label="Dates" openedFilter="dates">
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
        <FilterWrap label="Guests" openedFilter="guest">
          <GuestFilter />
        </FilterWrap>
        <RoomFilter />
        <PriceFilter />
        <InstantBookFilter />
        <OtherFilter />
      </FilterRow>
    );
  }
}

export default Filters;
