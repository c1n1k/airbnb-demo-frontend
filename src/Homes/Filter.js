import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";

const FilterRow = styled.div`
  padding: 0 8px;
  white-space: nowrap;
`;

export default () => {
  return (
    <FilterRow>
      <Button type="button">Dates</Button>
      <Button type="button">Guests</Button>
      <Button type="button">Room type</Button>
      <Button type="button">Price</Button>
      <Button type="button">Instant book</Button>
      <Button type="button">More filters</Button>
    </FilterRow>
  );
};
