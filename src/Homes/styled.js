import styled from "styled-components";
import Filter from "./Filter";
import Link from "../UI/Link";
import Button from "../UI/Button";

export const Wrap = styled.div``;

export const FilterToggler = styled(Button)`
  ${props => {
    if (props.isOpen || props.isFill) {
      return `
        color: #fff;
        background-color: #008489;
      `;
    }
  }};
`;

export const FilterLink = styled(Link)`
  font-size: 16px;
`;

export const FilterRow = styled.div`
  padding: 0;
  display: flex;
  white-space: nowrap;
`;

export const FilterWrap = styled(Filter)`
  position: relative;
  display: inline-block;
  margin: 0 6px;
  vertical-align: top;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const FilterMore = styled(FilterWrap)`
  position: static;
`;

export const Overlay = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: ${props => (props.isOpen ? "block" : "none")};
  background-color: rgba(255, 255, 255, 0.8);
`;

export const Md = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    margin: 0 6px;
  }
`;
