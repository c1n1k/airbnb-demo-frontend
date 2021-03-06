import React from "react";
import styled from "styled-components";
import Icon from "../Icon";

const NextPage = styled.span`
  position: relative;
  display: block;
  width: 40px;
  height: 40px;
  color: inherit;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(72, 72, 72, 0.16);
`;

const NextPageIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -8px 0 0 -4px;
  width: 10px;
  height: 18px;
  display: inline-block;
`;

const NextPageIconRight = props => {
  return (
    <NextPageIcon>
      <Icon icon="right" width="10" height="18" fill="#383838" />
    </NextPageIcon>
  );
};

export default props => {
  return (
    <NextPage href={props.href}>
      <NextPageIconRight />
    </NextPage>
  );
};
