import React, { Component } from "react";
import Guest from "./Filter/Guest";
import RoomType from "./Filter/RoomType";
import InstantBook from "./Filter/InstantBook";
import Price from "./Filter/Price";
import Dates from "./Filter/Dates.js";
import More from "./Filter/More.js";
import { FilterRow, FilterWrap, FilterMore, Overlay } from "./styled";

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

const moreLabelFormat = (keys, value, initialValues) => {
  const count = keys.reduce((prevCount, key) => {
    // console.log(Object.is(value[key], initialValues[key]));
    return Object.is(value[key], initialValues[key])
      ? prevCount
      : prevCount + 1;
  }, 0);

  return count > 0 ? `More filters \u0387 ${count}` : "More filters";
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
    this.setState({
      [name]: value
    });
  };

  toggle = key => {
    this.setState(prevState => ({
      // isOpen: !prevState.isOpen,
      openedFilter: prevState.openedFilter === key ? null : key
    }));
  };

  close = () => {
    this.setState(prevState => ({
      // isOpen: false,
      openedFilter: null
    }));
  };

  reset = name => {
    this.setState({
      [name]: this.initialValues[name]
    });
  };

  resetMore = () => {
    this.reset("rooms");
    this.reset("superhost");
    this.reset("amenities");
    this.reset("facilities");
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
            isOpen={this.state.openedFilter === "dates"}
            openedFilter="dates"
            toggle={this.toggle}
            isFill={this.state.dates.startDate && this.state.dates.endDate}
            reset={this.reset}
            onClose={this.close}
            onApply={this.close}
          >
            <Dates
              name="dates"
              dates={this.state.dates}
              onChange={this.updateFilter}
            />
          </FilterWrap>
          <FilterWrap
            label={guestLabelFormat(this.state.guest)}
            openedFilter="guest"
            isOpen={this.state.openedFilter === "guest"}
            toggle={this.toggle}
            isFill={
              this.state.guest.adults > 1 || this.state.guest.children > 0
            }
            reset={this.reset}
            onClose={this.close}
            onApply={this.close}
          >
            <Guest
              name="guest"
              onChange={this.updateFilter}
              currentGuest={this.state.guest}
            />
          </FilterWrap>
          <FilterWrap
            label={roomTypeLabelFormat(this.state.roomType)}
            openedFilter="roomType"
            isOpen={this.state.openedFilter === "roomType"}
            toggle={this.toggle}
            isFill={roomTypeLabelFormat(this.state.roomType) !== "Room type"}
            reset={this.reset}
            onClose={this.close}
            onApply={this.close}
            hideOnTablet
          >
            <RoomType
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
            isOpen={this.state.openedFilter === "price"}
            toggle={this.toggle}
            isFill={
              this.state.price.values[0] !== this.state.price.minPrice ||
              this.state.price.values[1] !== this.state.price.maxPrice
            }
            reset={this.reset}
            onApply={this.close}
            onClose={this.close}
            hideOnTablet
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
            isOpen={this.state.openedFilter === "instantbook"}
            toggle={this.toggle}
            isFill={this.state.instantBook}
            reset={this.reset}
            onApply={this.close}
            onClose={this.close}
            hideOnTablet
          >
            <InstantBook
              name="instantBook"
              onChange={this.updateFilter}
              isActive={this.state.instantBook}
            />
          </FilterWrap>
          <FilterMore
            label={moreLabelFormat(
              ["rooms", "superhost", "amenities", "facilities"],
              this.state,
              this.initialValues
            )}
            openedFilter="moreFilter"
            isOpen={this.state.openedFilter === "moreFilter"}
            toggle={this.toggle}
            bodyLike={true}
            onApply={this.close}
            reset={this.resetMore}
            onClose={this.close}
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
        <Overlay isOpen={this.state.openedFilter} onClick={this.close} />
      </div>
    );
  }
}

export default Filters;
