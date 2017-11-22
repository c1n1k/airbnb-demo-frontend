import React, { Component } from "react";
import styled from "styled-components";
import Filter from "./Filter";
import Calendar from "../UI/Calendar";
import Counter from "../UI/Counter";
import Checkbox from "../UI/Checkbox";
import Toggle from "../UI/Toggle";
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

class RoomFilter extends Component {
  render() {
    return (
      <div>
        <RoomType>
          <Checkbox
            name="entire"
            checked={this.props.entire}
            changeHandle={this.props.changeRoom}
          >
            Entire home
            <span>Have a place to yourplace</span>
            <IconHome />
          </Checkbox>
        </RoomType>
        <RoomType>
          <Checkbox
            name="private"
            checked={this.props.private}
            changeHandle={this.props.changeRoom}
          >
            Private room
            <span>Have your own room and share some common space</span>
            <IconPrivate />
          </Checkbox>
        </RoomType>
        <RoomType>
          <Checkbox
            name="shared"
            checked={this.props.shared}
            changeHandle={this.props.changeRoom}
          >
            Shared room
            <span>Stay in a shared space, like a common room</span>
            <IconShared />
          </Checkbox>
        </RoomType>
      </div>
    );
  }
}

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

const Price = styled.span`
  font-weight: 300;
  font-size: 12px;
`;
const PriceMin = styled.span`
  font-size: 16px;
`;
const PriceMax = styled.span`
  font-size: 16px;
`;
const PriceRemark = styled.div`
  margin: 10px 0 30px;
`;

const InstantBook = styled.div``;

const InstantRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 1.14286;
`;

const InstantText = styled.div``;
const InstantToggle = styled.div`
  margin-left: 10px;
  flex-shrink: 1;
`;

const InstantHead = styled.div`
  margin-bottom: 7px;
  width: 100%;
  font-size: 18px;
`;

const Other = styled.div``;

const MoreFilter = props => {
  return <Other>s</Other>;
};

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: "startDate",
      openedFilter: null,
      isOpen: false,
      guest: {
        adults: 0,
        children: 0,
        infants: 0
      },
      price: {
        minPrice: 0,
        maxPrice: 1000
      },
      roomType: {
        entire: false,
        private: false,
        shared: false
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
      focusedInput: focusedInput || "startDate"
    });
  };

  changeCounterGuest = (count, name) => {
    this.setState({
      guest: {
        ...this.state.guest,
        [name]: count
      }
    });
  };

  toggle = key => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      openedFilter: key
    }));
  };

  changeRoom = (name, checked) => {
    this.setState({
      roomType: {
        ...this.state.roomType,
        [name]: checked
      }
    });
  };

  render() {
    return (
      <FilterRow>
        <FilterWrap
          label={this.dateLabelFormat()}
          isOpen={this.state.isOpen && this.state.openedFilter === "dates"}
          openedFilter="dates"
          toggle={this.toggle}
        >
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
        <FilterWrap
          label="Guests"
          openedFilter="guest"
          isOpen={this.state.isOpen && this.state.openedFilter === "guest"}
          toggle={this.toggle}
        >
          <Guest>
            <GuestRow>
              <GuestLabel>Adults</GuestLabel>
              <Counter
                onChange={this.changeCounterGuest}
                name="adults"
                counter={this.state.guest.adults}
              />
            </GuestRow>
            <GuestRow>
              <GuestLabel>
                Children
                <span>Ages 2 — 12</span>
              </GuestLabel>
              <Counter
                onChange={this.changeCounterGuest}
                name="children"
                counter={this.state.guest.children}
              />
            </GuestRow>
            <GuestRow>
              <GuestLabel>
                Infants
                <span>Under 2</span>
              </GuestLabel>
              <Counter
                onChange={this.changeCounterGuest}
                name="infants"
                counter={this.state.guest.infants}
              />
            </GuestRow>
          </Guest>
        </FilterWrap>
        <FilterWrap
          label="Room type"
          openedFilter="roomType"
          isOpen={this.state.isOpen && this.state.openedFilter === "roomType"}
          toggle={this.toggle}
        >
          <RoomFilter
            changeRoom={this.changeRoom}
            entire={this.state.roomType.entire}
            private={this.state.roomType.private}
            shared={this.state.roomType.shared}
          />
        </FilterWrap>
        <FilterWrap
          label="Price"
          openedFilter="price"
          isOpen={this.state.isOpen && this.state.openedFilter === "price"}
          toggle={this.toggle}
        >
          <Price>
            <div>
              <PriceMin>{}</PriceMin>$ — <PriceMax>{}</PriceMax>$
            </div>
            <PriceRemark>The average nightly price is 75$</PriceRemark>
            <Rheostat min={10} max={1000} values={[0, 1000]} />
          </Price>
        </FilterWrap>
        <FilterWrap
          label="Instant book"
          openedFilter="instantbook"
          isOpen={
            this.state.isOpen && this.state.openedFilter === "instantbook"
          }
          toggle={this.toggle}
        >
          <InstantBook>
            <InstantRow>
              <InstantText>
                <InstantHead>Instant Book</InstantHead>
                Listings you can book without waiting for host approval.
              </InstantText>
              <InstantToggle>
                <Toggle />
              </InstantToggle>
            </InstantRow>
          </InstantBook>
        </FilterWrap>
        <FilterWrap
          label="More filters"
          openedFilter="moreFilter"
          isOpen={this.state.isOpen && this.state.openedFilter === "moreFilter"}
          toggle={this.toggle}
        >
          <MoreFilter />
        </FilterWrap>
      </FilterRow>
    );
  }
}

export default Filters;
