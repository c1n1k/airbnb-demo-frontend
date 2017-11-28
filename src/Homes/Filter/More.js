import React, { Component } from "react";
import Checkbox from "../../UI/Checkbox";
import {
  Section,
  SectionTitle,
  SectionRow,
  SectionCol,
  MoreFilter
} from "./styled";
import Beds from "./Beds";
import Superhost from "./Superhost";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: {
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
        parking: this.props.amenities.parking || false,
        pool: this.props.amenities.pool || false,
        wheelchair: this.props.amenities.wheelchair || false
      }
    };
  }

  updateState = (name, value) => {
    this.setState(
      {
        [name]: value
      },
      () => {
        this.props.onChange(this.props.name, this.state);
      }
    );
  };

  changeCounterRooms = (count, name) => {
    this.setState({
      rooms: {
        ...this.state.rooms,
        [name]: count
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

  render() {
    return (
      <MoreFilter>
        <Beds rooms={this.props.rooms} onChangeHandle={this.props.onChange} />
        <Superhost
          superhost={this.props.superhost}
          onChangeHandle={this.props.onChange}
        />
        <Section>
          <SectionTitle>Amenities</SectionTitle>
          <SectionRow>
            <SectionCol>
              <Checkbox
                name="heating"
                checked={this.state.amenities.heating}
                changeHandle={this.onChange}
              >
                Heating
              </Checkbox>
            </SectionCol>
            <SectionCol>
              <Checkbox
                name="kitchen"
                checked={this.state.amenities.kitchen}
                changeHandle={this.onChange}
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
                changeHandle={this.onChange}
              >
                TV
              </Checkbox>
            </SectionCol>
            <SectionCol>
              <Checkbox
                name="wifi"
                checked={this.state.amenities.wifi}
                changeHandle={this.onChange}
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
                changeHandle={this.onChange}
              >
                Elebator
              </Checkbox>
            </SectionCol>
            <SectionCol>
              <Checkbox
                name="parking"
                checked={this.state.facilities.parking}
                changeHandle={this.onChange}
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
                changeHandle={this.onChange}
              >
                Pool
              </Checkbox>
            </SectionCol>
            <SectionCol>
              <Checkbox
                name="wheelchair"
                checked={this.state.facilities.wheelchair}
                changeHandle={this.onChange}
              >
                Wheelchair accessible
              </Checkbox>
            </SectionCol>
          </SectionRow>
        </Section>
      </MoreFilter>
    );
  }
}
