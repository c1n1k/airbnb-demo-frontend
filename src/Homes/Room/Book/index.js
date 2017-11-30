import React, { Component } from "react";
import Input from "../../../UI/Input";
import Counter from "../../../UI/Counter";
import SingleCalendar from "../../../UI/Calendar/SingleCalendar";
import {
  Wrap,
  Header,
  Price,
  Value,
  Review,
  ReviewStar,
  ReviewCount,
  Body,
  Row,
  RowSubmit,
  Col,
  Label,
  BookDropdown as Dropdown,
  Request,
  Remark,
  Tip,
  TipText,
  TipTitle,
  TipIcon,
  Guest,
  GuestRow,
  GuestLabel,
  Actions,
  Close
} from "./styled.js";

const formatLabel = guest => {
  const guestCount = guest.adults + guest.children;

  if (guestCount > 1) {
    return guest.adults && guest.infants
      ? `${guestCount} guest, ${guest.infants} infant`
      : `${guestCount} guest`;
  }

  return "Guest";
};

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      guest: {
        adults: 1,
        children: 0,
        infants: 0
      }
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  close = () => {
    this.setState(prevState => ({
      isOpen: false
    }));
  };

  changeCounterGuest = (name, count) => {
    this.setState({
      guest: {
        ...this.state.guest,
        [name]: name === "adults" && count < 1 ? 1 : count
      }
    });
  };

  render() {
    return (
      <Wrap>
        <Header>
          <Price>
            <Value>$41</Value>
            per night
          </Price>
          <Review>
            <ReviewStar />
            <ReviewStar />
            <ReviewStar />
            <ReviewStar />
            <ReviewStar />
            <ReviewCount>111</ReviewCount>
          </Review>
        </Header>
        <Body>
          <Row>
            <Col>
              <Label>Check In</Label>
              <SingleCalendar />
            </Col>
            <Col>
              <Label>Check Out</Label>
              <SingleCalendar />
            </Col>
          </Row>
          <Row>
            <Label>Guests</Label>
            <Dropdown
              onToggle={this.toggle}
              isOpen={this.state.isOpen}
              label={formatLabel(this.state.guest)}
            >
              <Guest>
                <GuestRow>
                  <GuestLabel>Adults</GuestLabel>
                  <Counter
                    name="adults"
                    onChange={this.changeCounterGuest}
                    counter={this.state.guest.adults}
                  />
                </GuestRow>
                <GuestRow>
                  <GuestLabel>
                    Children
                    <span>Ages 2 — 12</span>
                  </GuestLabel>
                  <Counter
                    name="children"
                    onChange={this.changeCounterGuest}
                    counter={this.state.guest.children}
                  />
                </GuestRow>
                <GuestRow>
                  <GuestLabel>
                    Infants
                    <span>Under 2</span>
                  </GuestLabel>
                  <Counter
                    name="infants"
                    onChange={this.changeCounterGuest}
                    counter={this.state.guest.infants}
                  />
                </GuestRow>
              </Guest>
              <Actions>
                <Close type="button" onClick={this.toggle}>
                  Сlose
                </Close>
              </Actions>
            </Dropdown>
          </Row>
          <RowSubmit>
            <Request primary={true}>Request to Book</Request>
            <Remark>You won’t be charged</Remark>
          </RowSubmit>
        </Body>
        <Tip>
          <TipText>
            <TipTitle>This home is on people's mind</TipTitle>
            <p>It’s been viewed 500+ times in the past week.</p>
          </TipText>
          <TipIcon />
        </Tip>
      </Wrap>
    );
  }
}
