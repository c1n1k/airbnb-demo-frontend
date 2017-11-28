import React, { Component } from "react";
import Guest from "./Filter/Guest";
import Room from "./Filter/Room";
import InstantBook from "./Filter/InstantBook";
import Price from "./Filter/Price";
import Dates from "./Filter/Dates.js";
import More from "./Filter/More.js";
import { FilterRow, FilterWrap, FilterMore, Overlay, Md } from "./styled";

const dateLabelFormat = (startDate, endDate) => {
  const startDateString = startDate && startDate.format("MMM DD");
  const endDateString = endDate && endDate.format("MMM DD");

  return startDateString && endDateString
    ? `${startDateString} - ${endDateString}`
    : "Dates";
};

const guestLabelFormat = guest => {
  const guestCount = guest.adults + guest.children;

  if (guestCount > 1) {
    return guest.adults && guest.infants
      ? `${guestCount} guest, ${guest.infants} infant`
      : `${guestCount} guest`;
  }

  return "Guest";
};

const priceLabelFormat = (values, initialValues) => {
  if (values[0] !== initialValues[0] && values[1] !== initialValues[1]) {
    return `${values[0]}$ \u2013 ${values[1]}$`;
  }
  if (values[0] !== initialValues[0] && values[1] === initialValues[1]) {
    return `${values[0]}$+`;
  }
  if (values[0] === initialValues[0] && values[1] !== initialValues[1]) {
    return `Up to ${values[1]}$`;
  }
  return "Price";
};

const roomTypeLabelFormat = values => {
  const count = Object.keys(values).reduce((prev, current) => {
    return values[current] ? prev + 1 : prev;
  }, 0);
  if (count > 1) {
    return `Room type \u0387 ${count}`;
  }
  if (values.entire) return "Entire home";
  if (values.private) return "Private room";
  if (values.shared) return "Shared room";
  return "Room type";
};

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialValues;
  }

  initialValues = {
    dates: {
      startDate: null,
      endDate: null,
      focusedInput: null
    },
    openedFilter: null,
    isOpen: false,
    guest: {
      adults: 1,
      children: 0,
      infants: 0
    },
    price: {
      minPrice: 0,
      maxPrice: 1000,
      values: [0, 1000]
    },
    roomType: {
      entire: false,
      private: false,
      shared: false
    },
    instantBook: false,
    rooms: {
      bedroom: 0,
      bed: 1,
      bath: 0
    },
    superhost: false,
    amenities: {
      heating: false,
      kitchen: false,
      tv: false,
      wifi: false
    },
    facilities: {
      elevator: false,
      parking: false,
      pool: false,
      wheelchair: false
    }
  };

  updateFilter = (name, value) => {
    this.setState(
      {
        [name]: value
      },
      () => {
        console.log(this.state[name]);
      }
    );
  };

  toggle = key => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      openedFilter: key
    }));
  };

  close = () => {
    this.setState(prevState => ({
      isOpen: false,
      openedFilter: null
    }));
  };

  reset = name => {
    this.setState({
      [name]: this.initialValues[name]
    });
  };

  render() {
    return (
      <div>
        <FilterRow>
          <FilterWrap
            label={dateLabelFormat(
              this.state.dates.startDate,
              this.state.dates.endDate
            )}
            isOpen={this.state.isOpen && this.state.openedFilter === "dates"}
            openedFilter="dates"
            toggle={this.toggle}
            isFill={this.state.dates.startDate && this.state.dates.endDate}
            reset={this.reset}
          >
            <Dates
              name="dates"
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              focusedInput={this.state.focusedInput}
              onChange={this.updateFilter}
            />
          </FilterWrap>
          <FilterWrap
            label={guestLabelFormat(this.state.guest)}
            openedFilter="guest"
            isOpen={this.state.isOpen && this.state.openedFilter === "guest"}
            toggle={this.toggle}
            isFill={
              this.state.guest.adults > 1 || this.state.guest.children > 0
            }
            reset={this.reset}
          >
            <Guest
              name="guest"
              onChange={this.updateFilter}
              currentGuest={this.state.guest}
            />
          </FilterWrap>
          <Md>
            <FilterWrap
              label={roomTypeLabelFormat(this.state.roomType)}
              openedFilter="roomType"
              isOpen={
                this.state.isOpen && this.state.openedFilter === "roomType"
              }
              toggle={this.toggle}
              isFill={roomTypeLabelFormat(this.state.roomType) !== "Room type"}
              reset={this.reset}
            >
              <Room
                name="roomType"
                onChange={this.updateFilter}
                value={this.state.roomType}
              />
            </FilterWrap>
            <FilterWrap
              label={priceLabelFormat(
                this.state.price.values,
                this.initialValues.price.values
              )}
              openedFilter="price"
              isOpen={this.state.isOpen && this.state.openedFilter === "price"}
              toggle={this.toggle}
              isFill={
                this.state.price.values[0] !== this.state.price.minPrice ||
                this.state.price.values[1] !== this.state.price.maxPrice
              }
              reset={this.reset}
            >
              <Price
                name="price"
                minPrice={this.state.price.minPrice}
                maxPrice={this.state.price.maxPrice}
                values={this.state.price.values}
                onValuesUpdated={this.updateFilter}
              />
            </FilterWrap>
            <FilterWrap
              label="Instant book"
              openedFilter="instantbook"
              isOpen={
                this.state.isOpen && this.state.openedFilter === "instantbook"
              }
              toggle={this.toggle}
              isFill={this.state.instantBook}
              reset={this.reset}
            >
              <InstantBook
                name="instantBook"
                onChange={this.updateFilter}
                isActive={this.state.instantBook}
              />
            </FilterWrap>
          </Md>
          <FilterMore
            label="More filters"
            openedFilter="moreFilter"
            isOpen={
              this.state.isOpen && this.state.openedFilter === "moreFilter"
            }
            toggle={this.toggle}
            bodyLike={true}
          >
            <More
              rooms={this.state.rooms}
              amenities={this.state.amenities}
              superhost={this.state.superhost}
              facilities={this.state.facilities}
              onChange={this.updateFilter}
            />
          </FilterMore>
        </FilterRow>
        <Overlay isOpen={this.state.isOpen} onClick={this.close} />
      </div>
    );
  }
}

export default Filters;
