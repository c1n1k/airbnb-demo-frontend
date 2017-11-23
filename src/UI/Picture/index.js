import React from "react";
import styled from "styled-components";

const Picture = styled.picture``;

export default props => {
  const img = props.img;
  return (
    <Picture>
      <source srcSet={`${img.double}`} media="(max-width: 980px)" />
      <source srcSet={`${img.double} 2x`} />
      <img src={img.normal} alt={props.alt} />
    </Picture>
  );
};
