import React from "react";
import styled from "styled-components";
import Input from "../Input";
import Icon from "../Icon";
// import searchIcon from "./search.svg";

const Search = styled.div`
  position: relative;
`;

const SearchInput = styled(Input)`
  padding-left: 50px;

  ${props => {
    if (props.size === "s") {
      return `
        padding-left:34px;
        height: 32px;
        font-size: 14px;
      `;
    }
  }};
`;

const SearchIcon = styled.span`
  position: absolute;
  z-index: 1;
  top: 13px;
  left: 16px;
  display: inline-block;
  opacity: 0.6;
  width: 22px;
  height: 22px;
  pointer-events: none;

  ${props => {
    if (props.size === "s") {
      return `
        top: 8px;
        left: 10px;
        width: 16px;
        height: 16px;
      `;
    }
  }};
`;

const SearchIconSearch = props => {
  return (
    <SearchIcon size={props.size}>
      <Icon icon="search" fill="#3d3d3d" />
    </SearchIcon>
  );
};

export default props => {
  return (
    <Search className={props.className}>
      <SearchIconSearch size={props.size} />
      <SearchInput placeholder="Try Miami" size={props.size} />
    </Search>
  );
};
