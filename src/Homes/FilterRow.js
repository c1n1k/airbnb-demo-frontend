import React, { Component } from "react";
import styled from "styled-components";
import Filter from "./Filter";
import Calendar from "../UI/Calendar";
import Counter from "../UI/Counter";
import Checkbox from "../UI/Checkbox";
import Icon from "../UI/Icon";
import Rheostat from "rheostat";
import "rheostat/css/slider.css";
import "rheostat/css/slider-horizontal.css";
import "./rheostat.css";

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

const RoomType = styled.div`
  margin-bottom: 15px;
  padding-right: 60px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const RoomIcon = styled.span`
  position: absolute;
  top: 5px;
  right: -60px;
`;

const IconHome = () => {
  return (
    <RoomIcon>
      <Icon icon="home" width={32} height={32} fill="currentColor" />
    </RoomIcon>
  );
};

const IconPrivate = () => {
  return (
    <RoomIcon>
      <Icon icon="private" width={32} height={32} fill="currentColor" />
    </RoomIcon>
  );
};

const IconShared = () => {
  return (
    <RoomIcon>
      <Icon icon="shared" width={32} height={32} fill="currentColor" />
    </RoomIcon>
  );
};

const RoomFilter = props => {
  return (
    <div>
      <RoomType>
        <Checkbox>
          Entire home
          <span>Have a place to yourplace</span>
          <IconHome />
        </Checkbox>
      </RoomType>
      <RoomType>
        <Checkbox>
          Private room
          <span>Have your own room and share some common space</span>
          <IconPrivate />
        </Checkbox>
      </RoomType>
      <RoomType>
        <Checkbox>
          Shared room
          <span>Stay in a shared space, like a common room</span>
          <IconShared />
        </Checkbox>
      </RoomType>
    </div>
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

const Price = styled.span`
  font-weight: 300;
  font-size: 12px;
`;
const PriceMin = styled.span`font-size: 16px;`;
const PriceMax = styled.span`font-size: 16px;`;
const PriceRemark = styled.div`margin: 10px 0 30px;`;

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
      openedFilter: null,
      price: {
        minPrice: 0,
        maxPrice: 1000
      }
    };
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({
      startDate,
      endDate
    });
  };

  dateLabelFormat = () => {
    const { startDate, endDate } = this.state;

    const startDateString = startDate && startDate.format("MMM DD");
    const endDateString = endDate && endDate.format("MMM DD");

    return startDateString && endDateString
      ? `${startDateString} - ${endDateString}`
      : "Dates";
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
        <FilterWrap label={this.dateLabelFormat()} openedFilter="dates">
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
        <FilterWrap label="Room type" openedFilter="roomType">
          <RoomFilter />
        </FilterWrap>
        <FilterWrap label="Price" openedFilter="price">
          <Price>
            <div>
              <PriceMin>{}</PriceMin>$ — <PriceMax>{}</PriceMax>$
            </div>
            <PriceRemark>The average nightly price is 75$</PriceRemark>
            <Rheostat min={10} max={1000} values={[0, 1000]} />
          </Price>
        </FilterWrap>
        <InstantBookFilter />
        <OtherFilter />
      </FilterRow>
    );
  }
}

export default Filters;
