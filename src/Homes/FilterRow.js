import React, { Component } from "react";
import styled from "styled-components";
import Filter from "./Filter";
import Calendar from "../UI/Calendar";
import Counter from "../UI/Counter";
import Checkbox from "../UI/Checkbox";
import Toggle from "../UI/Toggle";
import Icon from "../UI/Icon";
import Link from "../UI/Link";
import Rheostat from "rheostat";
import "rheostat/css/slider.css";
import "rheostat/css/slider-horizontal.css";
import "./rheostat.css";

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
        elebator: false,
        parking: false,
        pool: false,
        wheelchair: false
      }
    };

    this.updateValue = this.updateValue.bind(this);
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

  changeCounterGuest = (count, name) => {
    this.setState({
      guest: {
        ...this.state.guest,
        [name]: count
      }
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

  updateValue(sliderState) {
    this.setState({
      price: {
        ...this.state.price,
        values: sliderState.values
      }
    });
  }

  render() {
    const dateLabelFormat = () => {
      const { startDate, endDate } = this.state;

      const startDateString = startDate && startDate.format("MMM DD");
      const endDateString = endDate && endDate.format("MMM DD");

      return startDateString && endDateString
        ? `${startDateString} - ${endDateString}`
        : "Dates";
    };

    return (
      <FilterRow>
        <FilterWrap
          label={dateLabelFormat()}
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
              <PriceMin>{this.state.price.values[0]} $</PriceMin> —{" "}
              <PriceMax>{this.state.price.values[1]} $</PriceMax>
            </div>
            <PriceRemark>The average nightly price is 75$</PriceRemark>
            <Rheostat
              {...this.props}
              min={this.state.price.minPrice}
              max={this.state.price.maxPrice}
              values={this.state.price.values}
              onValuesUpdated={this.updateValue}
            />
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
                <Toggle
                  name="instantBook"
                  onChange={this.updateInstant}
                  isActive={this.state.instantBook}
                />
              </InstantToggle>
            </InstantRow>
          </InstantBook>
        </FilterWrap>
        <FilterMore
          label="More filters"
          openedFilter="moreFilter"
          isOpen={this.state.isOpen && this.state.openedFilter === "moreFilter"}
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
                    name="elebator"
                    checked={this.state.facilities.elebator}
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
    );
  }
}

export default Filters;
