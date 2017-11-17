import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import Popup from "../UI/Popup";

const FilterRow = styled.div`
  padding: 0 8px;
  white-space: nowrap;
`;

const FilterItem = styled.div`
  display: inline-block;
  margin: 0 6px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const DatesRange = styled.div``;

const DateFilter = props => {
  return (
    <FilterItem>
      <Button type="button">Dates</Button>
      <Popup>
        <DatesRange />
      </Popup>
    </FilterItem>
  );
};

const RoomType = styled.div``;

const RoomFilter = props => {
  return (
    <FilterItem>
      <Button type="button">Room type</Button>
      <Popup>
        <RoomType />
      </Popup>
    </FilterItem>
  );
};

const Guest = styled.div``;

const GuestFilter = props => {
  return (
    <FilterItem>
      <Button type="button">Guests</Button>
      <Popup>
        <Guest />
      </Popup>
    </FilterItem>
  );
};

const Price = styled.div``;

const PriceFilter = props => {
  return (
    <FilterItem>
      <Button type="button">Price</Button>
      <Popup>
        <Price />
      </Popup>
    </FilterItem>
  );
};

const InstantBook = styled.div``;

const InstantBookFilter = props => {
  return (
    <FilterItem>
      <Button type="button">Instant book</Button>
      <Popup>
        <InstantBook />
      </Popup>
    </FilterItem>
  );
};

const Other = styled.div``;

const OtherFilter = props => {
  return (
    <FilterItem>
      <Button type="button">More filters</Button>
      <Popup>
        <Other />
      </Popup>
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
