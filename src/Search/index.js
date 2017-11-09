import React from "react";
import styled from "styled-components";
import Input from "../Input";
import Icon from "../Icon";
// import searchIcon from "./search.svg";

const Search = styled.div`position: relative;`;

const SearchInput = styled(Input)`padding-left: 50px;`;

const SearchIcon = styled.span`
  position: absolute;
  top: 13px;
  left: 16px;
  display: inline-block;
  opacity: 0.6;
  pointer-events: none;
`;

const SearchIconSearch = props => {
  return (
    <SearchIcon>
      <Icon icon="search" width="22" height="22" fill="#3d3d3d" />
    </SearchIcon>
  );
};

export default () => {
  return (
    <Search>
      <SearchIconSearch />
      <SearchInput placeholder="Try Miami" />
    </Search>
  );
};
