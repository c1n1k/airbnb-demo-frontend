import React, { Component } from "react";
import styled from "styled-components";
import Filter from "./Filter";
import Guest from "./Filter/Guest";
import Room from "./Filter/Room";
import InstantBook from "./Filter/InstantBook";
import Price from "./Filter/Price";
import Dates from "./Filter/Dates.js";
import Counter from "../UI/Counter";
import Checkbox from "../UI/Checkbox";
import Toggle from "../UI/Toggle";
import Link from "../UI/Link";

const FilterLink = styled(Link)`
  font-size: 16px;
`;

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

const FilterMore = styled(FilterWrap)`
  position: static;
`;

const Section = styled.div`
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
`;

const SectionTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: normal;
`;

const SectionRow = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-size: 20px;
`;

const SectionLabel = styled.span`
  padding-top: 8px;
  flex-grow: 1;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.16;
`;

const SectionCol = styled.div`
  width: 50%;
`;

const SectionRemark = styled.div`
  margin: 3px 0;
  display: block;
  font-size: 16px;
  line-height: 1.16;
`;

const MoreFilter = styled.div``;

const Overlay = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: ${props => (props.isOpen ? "block" : "none")};
  background-color: rgba(255, 255, 255, 0.8);
`;

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

const priceLabelFormat = (price, maxPrice) => {
  return price !== maxPrice ? `Up to ${price}$` : "Price";
};

class Filters extends Component {
  initialValues = {
    startDate: null,
    endDate: null,
    focusedInput: "startDate",
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
      values: this.props.values || [0, 1000]
    },
    roomType: {
      entire: false,
      private: false,
      shared: false
    },
    instantBook: false,
    rooms: {
      bedroom: 0,
      bed: 0,
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

  constructor(props) {
    super(props);
    this.state = this.initialValues;
    this.updatePrice = this.updatePrice.bind(this);
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({
      startDate,
      endDate
    });
  };

  onFocusChange = focusedInput => {
    this.setState({
      focusedInput: focusedInput || "startDate"
    });
  };

  changeCounterRooms = (count, name) => {
    this.setState({
      rooms: {
        ...this.state.rooms,
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

  close = () => {
    this.setState(prevState => ({
      isOpen: false,
      openedFilter: null
    }));
  };

  changeGuest = guest => {
    this.setState({
      ...this.state,
      guest: guest
    });
  };

  changeRoom = (name, checked) => {
    this.setState({
      roomType: {
        ...this.state.roomType,
        [name]: checked
      }
    });
  };

  changeAmenities = (name, checked) => {
    this.setState({
      amenities: {
        ...this.state.amenities,
        [name]: checked
      }
    });
  };

  changeFacilities = (name, checked) => {
    this.setState({
      facilities: {
        ...this.state.facilities,
        [name]: checked
      }
    });
  };

  updateInstant = value => {
    this.setState({
      instantBook: value
    });
  };

  updateSuperhost = value => {
    this.setState({
      superhost: value
    });
  };

  updatePrice(sliderState) {
    this.setState({
      price: {
        ...this.state.price,
        values: sliderState.values
      }
    });
  }

  render() {
    return (
      <div>
        <FilterRow>
          <FilterWrap
            label={dateLabelFormat(this.state.startDate, this.state.endDate)}
            isOpen={this.state.isOpen && this.state.openedFilter === "dates"}
            openedFilter="dates"
            toggle={this.toggle}
          >
            <Dates
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              focusedInput={this.state.focusedInput}
              onDatesChange={this.onDatesChange}
              onFocusChange={this.onFocusChange}
            />
          </FilterWrap>
          <FilterWrap
            label={guestLabelFormat(this.state.guest)}
            openedFilter="guest"
            isOpen={this.state.isOpen && this.state.openedFilter === "guest"}
            toggle={this.toggle}
          >
            <Guest
              onChange={this.changeGuest}
              currentGuest={this.state.guest}
            />
          </FilterWrap>
          <FilterWrap
            label="Room type"
            openedFilter="roomType"
            isOpen={this.state.isOpen && this.state.openedFilter === "roomType"}
            toggle={this.toggle}
          >
            <Room
              changeRoom={this.changeRoom}
              entire={this.state.roomType.entire}
              private={this.state.roomType.private}
              shared={this.state.roomType.shared}
            />
          </FilterWrap>
          <FilterWrap
            label={priceLabelFormat(
              this.state.price.values[1],
              this.state.price.maxPrice
            )}
            openedFilter="price"
            isOpen={this.state.isOpen && this.state.openedFilter === "price"}
            toggle={this.toggle}
          >
            <Price
              minPrice={this.state.price.minPrice}
              maxPrice={this.state.price.maxPrice}
              values={this.state.price.values}
              onValuesUpdated={this.updatePrice}
            />
          </FilterWrap>
          <FilterWrap
            label="Instant book"
            openedFilter="instantbook"
            isOpen={
              this.state.isOpen && this.state.openedFilter === "instantbook"
            }
            toggle={this.toggle}
          >
            <InstantBook
              name="instantBook"
              onChange={this.updateInstant}
              isActive={this.state.instantBook}
            />
          </FilterWrap>
          <FilterMore
            label="More filters"
            openedFilter="moreFilter"
            isOpen={
              this.state.isOpen && this.state.openedFilter === "moreFilter"
            }
            toggle={this.toggle}
            bodyLike={true}
          >
            <MoreFilter>
              <Section>
                <SectionTitle>Rooms and beds</SectionTitle>
                <SectionRow>
                  <SectionCol>
                    <SectionLabel>Bedrooms</SectionLabel>
                  </SectionCol>
                  <SectionCol>
                    <Counter
                      onChange={this.changeCounterRooms}
                      name="bedroom"
                      counter={this.state.rooms.bedroom}
                    />
                  </SectionCol>
                </SectionRow>
                <SectionRow>
                  <SectionCol>
                    <SectionLabel>Beds</SectionLabel>
                  </SectionCol>
                  <SectionCol>
                    <Counter
                      onChange={this.changeCounterRooms}
                      name="bed"
                      counter={this.state.rooms.bed}
                    />
                  </SectionCol>
                </SectionRow>
                <SectionRow>
                  <SectionCol>
                    <SectionLabel>Bathrooms</SectionLabel>
                  </SectionCol>
                  <SectionCol>
                    <Counter
                      onChange={this.changeCounterRooms}
                      name="bath"
                      counter={this.state.rooms.bath}
                    />
                  </SectionCol>
                </SectionRow>
              </Section>
              <Section>
                <SectionTitle>More options</SectionTitle>
                <SectionRow>
                  <SectionCol>
                    <SectionLabel>
                      Superhost
                      <SectionRemark>Stay with recognized</SectionRemark>
                      <FilterLink to="">Learn more</FilterLink>
                    </SectionLabel>
                  </SectionCol>
                  <SectionCol>
                    <Toggle
                      name="superhost"
                      onChange={this.updateSuperhost}
                      isActive={this.state.superhost}
                    />
                  </SectionCol>
                </SectionRow>
              </Section>
              <Section>
                <SectionTitle>Amenities</SectionTitle>
                <SectionRow>
                  <SectionCol>
                    <Checkbox
                      name="heating"
                      checked={this.state.amenities.heating}
                      changeHandle={this.changeAmenities}
                    >
                      Heating
                    </Checkbox>
                  </SectionCol>
                  <SectionCol>
                    <Checkbox
                      name="kitchen"
                      checked={this.state.amenities.kitchen}
                      changeHandle={this.changeAmenities}
                    >
                      Kitchen
                    </Checkbox>
                  </SectionCol>
                </SectionRow>
                <SectionRow>
                  <SectionCol>
                    <Checkbox
                      name="tv"
                      checked={this.state.amenities.tv}
                      changeHandle={this.changeAmenities}
                    >
                      TV
                    </Checkbox>
                  </SectionCol>
                  <SectionCol>
                    <Checkbox
                      name="wifi"
                      checked={this.state.amenities.wifi}
                      changeHandle={this.changeAmenities}
                    >
                      Wireless Internet
                    </Checkbox>
                  </SectionCol>
                </SectionRow>
              </Section>
              <Section>
                <SectionTitle>Facilities</SectionTitle>
                <SectionRow>
                  <SectionCol>
                    <Checkbox
                      name="elevator"
                      checked={this.state.facilities.elevator}
                      changeHandle={this.changeFacilities}
                    >
                      Elebator
                    </Checkbox>
                  </SectionCol>
                  <SectionCol>
                    <Checkbox
                      name="parking"
                      checked={this.state.facilities.parking}
                      changeHandle={this.changeFacilities}
                    >
                      Free parking on premises
                    </Checkbox>
                  </SectionCol>
                </SectionRow>
                <SectionRow>
                  <SectionCol>
                    <Checkbox
                      name="pool"
                      checked={this.state.facilities.pool}
                      changeHandle={this.changeFacilities}
                    >
                      Pool
                    </Checkbox>
                  </SectionCol>
                  <SectionCol>
                    <Checkbox
                      name="wheelchair"
                      checked={this.state.facilities.wheelchair}
                      changeHandle={this.changeFacilities}
                    >
                      Wheelchair accessible
                    </Checkbox>
                  </SectionCol>
                </SectionRow>
              </Section>
            </MoreFilter>
          </FilterMore>
        </FilterRow>
        <Overlay isOpen={this.state.isOpen} onClick={this.close} />
      </div>
    );
  }
}

export default Filters;
