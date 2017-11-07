import React from "react";
import styled from "styled-components";

const Nav = styled.nav`display: flex;`;

const NavLink = styled.a`
  padding: 5px 11px;
  display: inline-block;
  font-size: 14px;
  text-decoration: none;
  color: #383838;
`;

export default () => {
  return (
    <Nav>
      <NavLink href="">Become a host</NavLink>
      <NavLink href="">Help</NavLink>
      <NavLink href="">Sign Up</NavLink>
      <NavLink href="">Login</NavLink>
    </Nav>
  );
};
