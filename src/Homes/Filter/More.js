import React, { Component } from "react";
import { MoreFilter } from "./styled";
import Rooms from "./Rooms";
import Superhost from "./Superhost";
import Amenities from "./Amenities";
import Facilities from "./Facilities";

export default class extends Component {
  state = {
    rooms: {
      bedroom: this.props.rooms.bedroom || 0,
      bed: this.props.rooms.bed || 0,
      bath: this.props.rooms.bath || 0
    },
    superhost: this.props.superhost || false,
    amenities: {
      heating: this.props.amenities.heating || false,
      kitchen: this.props.amenities.kitchen || false,
      tv: this.props.amenities.tv || false,
      wifi: this.props.amenities.wifi || false
    },
    facilities: {
      elevator: this.props.facilities.elevator || false,
      parking: this.props.facilities.parking || false,
      pool: this.props.facilities.pool || false,
      wheelchair: this.props.facilities.wheelchair || false
    }
  };

  updateFilter = (name, value) => {
    this.setState(
      {
        [name]: value
      },
      () => {
        this.props.onChange(this.props.name, this.state);
      }
    );
  };

  render() {
    return (
      <MoreFilter>
        <Rooms
          name="rooms"
          rooms={this.state.rooms}
          onChange={this.props.onChange}
        />
        <Superhost
          superhost={this.props.superhost}
          onChange={this.props.onChange}
        />
        <Amenities
          name="amenities"
          amenities={this.state.amenities}
          onChange={this.props.onChange}
        />
        <Facilities
          name="facilities"
          facilities={this.state.facilities}
          onChange={this.props.onChange}
        />
      </MoreFilter>
    );
  }
}
