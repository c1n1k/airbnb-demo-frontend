import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Icon from "../Icon";

const Item = styled(Link)`
  position: relative;
  margin: 0 8px;
  display: inline-block;
  width: 32px;
  height: 32px;
  font-size: 16px;
  line-height: 32px;
  vertical-align: top;
  text-align: center;
  text-decoration: none;
  border-radius: 50%;
  color: #008489;
`;

const Next = styled(Item)`
  margin-right: 0;
  border: solid 1px #008489;
`;

const Prev = styled(Item)`
  margin-left: 0;
  border: solid 1px #008489;
`;

const ItemIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -9px;
  margin-left: -1px;
  display: inline-block;
  line-height: 1;
`;
const PrevIcon = styled(ItemIcon)`
  transform: rotate(180deg);
  margin-top: -7px;
  margin-left: -4px;
`;

const IconRight = () => {
  return (
    <ItemIcon>
      <Icon icon="rightSmall" width="6" height="10" fill="currentColor" />
    </ItemIcon>
  );
};

const IconLeft = () => {
  return (
    <PrevIcon>
      <Icon icon="rightSmall" width="6" height="10" fill="currentColor" />
    </PrevIcon>
  );
};

const Pagination = styled.div`text-align: center;`;

const Count = styled.p`
  margin-top: 16px;
  font-size: 16px;
`;

const Range = styled.span``;

export default props => {
  return (
    <Pagination>
      <Prev to="">
        <IconLeft />
      </Prev>
      <Item to="">1</Item>
      <Item to="">2</Item>
      <Item to="">3</Item>
      <Item to="">…</Item>
      <Item to="">17</Item>
      <Next to="">
        <IconRight />
      </Next>
      <Count>
        <Range>1 - 8</Range> of {props.all} Rentals
      </Count>
    </Pagination>
  );
};
