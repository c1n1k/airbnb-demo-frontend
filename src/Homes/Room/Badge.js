import React from "react";
import styled from "styled-components";
import Link from "../../UI/Link";

const Badge = styled(Link)`
  text-decoration: none;
`;

const Avatar = styled.div`
  margin: 0 auto 10px;
  overflow: hidden;
  width: ${props => (props.size ? props.size : "48")}px;
  height: ${props => (props.size ? props.size : "48")}px;
  border-radius: 50%;
`;

const BadgeName = styled.span`
  font-size: 18px;
  font-weight: 300;
  color: #767676;
`;

export default props => {
  return (
    <Badge to="">
      <Avatar size={props.size}>
        <img src={props.img} alt="Yudi & Victoria" />
      </Avatar>
      {props.name && <BadgeName>{props.name}</BadgeName>}
    </Badge>
  );
};
