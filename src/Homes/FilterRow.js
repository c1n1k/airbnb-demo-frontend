import React, { Component } from "react";
import styled from "styled-components";
import Filter from "./Filter";
import Calendar from "../UI/Calendar";

const FilterRow = styled.div`
  padding: 0 8px;
  white-space: nowrap;
`;

const FilterItem = styled(Filter)`
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

const DateFilter = props => {
  return (
    <FilterItem buttonText="Dates">
      <DatesRange>
        <Calendar />
      </DatesRange>
    </FilterItem>
  );
};

const RoomType = styled.div``;

const RoomFilter = props => {
  return (
    <FilterItem buttonText="Room type">
      <RoomType />
    </FilterItem>
  );
};

const Guest = styled.div``;

const GuestFilter = props => {
  return (
    <FilterItem buttonText="Guests">
      <Guest />
    </FilterItem>
  );
};

const Price = styled.div``;

const PriceFilter = props => {
  return (
    <FilterItem buttonText="Price">
      <Price />
    </FilterItem>
  );
};

const InstantBook = styled.div``;

const InstantBookFilter = props => {
  return (
    <FilterItem buttonText="Instant book">
      <InstantBook />
    </FilterItem>
  );
};

const Other = styled.div``;

const OtherFilter = props => {
  return (
    <FilterItem buttonText="More filters">
      <Other />
    </FilterItem>
  );
};

export default () => {
  return (
    <FilterRow>
      <DateFilter />
      <GuestFilter />
      <RoomFilter />
      <PriceFilter />
      <InstantBookFilter />
      <OtherFilter />
    </FilterRow>
  );
};
