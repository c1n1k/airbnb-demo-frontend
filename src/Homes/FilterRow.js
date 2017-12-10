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
    ? { text: `${startDateString} - ${endDateString}`, isFill: true }
    : { text: "Dates", isFill: false };
};

const guestLabelFormat = guest => {
  const guestCount = guest.adults + guest.children;

  if (guestCount > 1) {
    const text =
      guest.adults && guest.infants
        ? `${guestCount} guest, ${guest.infants} infant`
        : `${guestCount} guest`;
    return { text: text, isFill: true };
  }

  return { text: "Guest", isFill: false };
};

const priceLabelFormat = (values, initialValues) => {
  if (values[0] !== initialValues[0] && values[1] !== initialValues[1]) {
    return {
      text: `${values[0]}$ \u2013 ${values[1]}$`,
      isFill: true
    };
  }
  if (values[0] !== initialValues[0] && values[1] === initialValues[1]) {
    return {
      text: `${values[0]}$+`,
      isFill: true
    };
  }
  if (values[0] === initialValues[0] && values[1] !== initialValues[1]) {
    return {
      text: `Up to ${values[1]}$`,
      isFill: true
    };
  }

  return { text: "Price", isFill: false };
};

const roomTypeLabelFormat = values => {
  const count = Object.keys(values).reduce((prev, current) => {
    return values[current] ? prev + 1 : prev;
  }, 0);
  if (count > 1) {
    return { text: `Room type \u0387 ${count}`, isFill: true };
  }

  if (values.entire) return { text: "Entire home", isFill: true };
  if (values.private) return { text: "Private room", isFill: true };
  if (values.shared) return { text: "Shared room", isFill: true };

  return { text: "Room type", isFill: false };
};

const moreLabelFormat = (keys, value, initialValues) => {
  const count = keys.reduce((prevCount, key) => {
    return Object.is(value[key], initialValues[key])
      ? prevCount
      : prevCount + 1;
  }, 0);

  return count > 0
    ? { text: `More filters \u0387 ${count}`, isFill: true }
    : { text: "More filters", isFill: false };
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
            label={{ text: "Instant book", isFill: this.state.instantBook }}
            openedFilter="instantbook"
            isOpen={this.state.openedFilter === "instantbook"}
            toggle={this.toggle}
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
