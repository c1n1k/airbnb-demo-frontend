import React from "react";
import styled from "styled-components";
import Toggle from "../../UI/Toggle";

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
