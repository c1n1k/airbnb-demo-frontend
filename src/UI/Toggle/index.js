import React from "react";
import styled from "styled-components";

const Toggle = styled.label`
  position: relative;
  display: inline-block;
  width: 64px;
  height: 40px;
  background-color: rgba(72, 72, 72, 0.08);
  border: solid 1px rgba(72, 72, 72, 0.3);
  border-radius: 20px;
`;

const Control = styled.input`
  position: absolute;
  z-index: -1;
  margin: 0;
  opacity: 0;
`;

const Slider = styled.span`
  position: relative;
  top: -1px;
  left: -1px;
  display: block;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border: 1px solid rgba(72, 72, 72, 0.3);
  border-radius: 50%;
  transition: transform 0.2s ease-in-out, background-color 0.2s, box-shadow 0.2s,
    color 0.2s;
  transform: translate3d(0, 0, 0);
  cursor: pointer;
  color: #484848;

  &:before,
  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -1px 0 0 -5px;
    width: 10px;
    height: 2px;
    transform-origin: 50%;
    content: "";
    border-radius: 1px;
    background-color: currentColor;
    transition: transform .2s;
  }

  &:before {
    transform: rotate(-45deg);
  }

  &:after {
    transform: rotate(45deg);
  }

  ${Control}:checked + & {
    color: #fff;
    background-color: #008489;
    box-shadow: inset 0 0 0 2px #fff;
    transform: translate3d(24px, 0, 0);
  }

  ${Control}:checked + &:before {
    width: 12px;
    transform: rotate(-45deg) translate3D(1px, 1px, 0);;
  }

  ${Control}:checked + &:after {
    transform-origin: 50% 100%;
    width: 7px;
    transform: rotate(45deg) translate3D(-1px, 3px, 0);
  }

  }
`;

export default props => {
  return (
    <Toggle>
      <Control type="checkbox" name={props.name} />
      <Slider />
    </Toggle>
  );
};
