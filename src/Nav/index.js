import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 20px 0;
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);

  @media (min-width: 980px) {
    padding: 0;
    border: none;
    display: flex;
  }
`;

const Link = styled.a`
  display: block;
  padding: 10px;
  font-size: 18px;
  text-decoration: none;
  color: #383838;

  @media (min-width: 980px) {
    padding: 5px 11px;
    display: inline-block;
    font-size: 14px;
  }
`;

export default () => {
  return (
    <Nav>
      <Link href="">Become a host</Link>
      <Link href="">Help</Link>
      <Link href="">Sign Up</Link>
      <Link href="">Login</Link>
    </Nav>
  );
};
