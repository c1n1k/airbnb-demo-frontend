import React from "react";
import styled from "styled-components";
import Input from "../Input/Input";
// import Icon from "../Icon/Icon";
// import searchIcon from "./search.svg";

const Search = styled.div`position: relative;`;

const SearchInput = styled(Input)`padding-left: 50px;`;

export default () => {
  return (
    <Search>
      {/* <Icon icon="search" width="22" height="22" fill="#3d3d3d" /> */}
      <SearchInput placeholder="Try Miami" />
    </Search>
  );
};
