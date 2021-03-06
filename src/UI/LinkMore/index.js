import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "../Icon";

const LinkMore = styled(Link)`
  display: inline-block;
  font-size: 14px;
  white-space: nowrap;
  text-decoration: none;
  color: inherit;
`;

const Text = styled.span`
  display: inline-block;
  margin-right: 7px;
`;

const LinkIcon = styled.span`
  display: inline-block;
  width: 5px;
  height: 9px;
`;

const LinkIconRight = () => {
  return (
    <LinkIcon>
      <Icon icon="right" fill="#383838" />
    </LinkIcon>
  );
};

export default props => {
  return (
    <LinkMore to={props.to}>
      <Text>{props.text}</Text>
      <LinkIconRight />
    </LinkMore>
  );
};
