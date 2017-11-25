import React from "react";
import styled from "styled-components";
import Toggle from "../../UI/Toggle";
import {
  InstantBook,
  InstantRow,
  InstantText,
  InstantToggle,
  InstantHead
} from "./styled";

export default props => {
  return (
    <InstantBook>
      <InstantRow>
        <InstantText>
          <InstantHead>Instant Book</InstantHead>
          Listings you can book without waiting for host approval.
        </InstantText>
        <InstantToggle>
          <Toggle
            name="instantBook"
            onChange={props.onChange}
            isActive={props.instantBook}
          />
        </InstantToggle>
      </InstantRow>
    </InstantBook>
  );
};
