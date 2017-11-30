import React from "react";
import { Switcher, Dropdown, Wrap } from "./styled";

export default props => {
  return (
    <Wrap className={props.className}>
      <Switcher type="button" onClick={props.onToggle} isOpen={props.isOpen}>
        {props.label}
      </Switcher>
      <Dropdown isOpen={props.isOpen}>{props.children}</Dropdown>
    </Wrap>
  );
};
