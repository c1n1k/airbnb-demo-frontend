import React, { Component } from "react";
import { MoreFilter } from "./styled";
import Rooms from "./Rooms";
import Superhost from "./Superhost";
import Amenities from "./Amenities";
import Facilities from "./Facilities";

export default class extends Component {
  render() {
    return (
      <MoreFilter>
        <Rooms
          name="rooms"
          rooms={this.props.rooms}
          onChange={this.props.onChange}
        />
        <Superhost
          superhost={this.props.superhost}
          onChange={this.props.onChange}
        />
        <Amenities
          name="amenities"
          amenities={this.props.amenities}
          onChange={this.props.onChange}
        />
        <Facilities
          name="facilities"
          facilities={this.props.facilities}
          onChange={this.props.onChange}
        />
      </MoreFilter>
    );
  }
}
