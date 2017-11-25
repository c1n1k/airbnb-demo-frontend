import React from "react";
import styled from "styled-components";
import Rheostat from "rheostat";
import log10 from "rheostat/lib/algorithms/log10";
import "rheostat/css/slider.css";
import "rheostat/css/slider-horizontal.css";
import "./rheostat.css";

const Price = styled.div`
  position: relative;
  font-weight: 300;
  font-size: 12px;
`;

const PriceMin = styled.span`
  font-size: 16px;
`;
const PriceMax = styled.span`
  font-size: 16px;
`;
const PriceRemark = styled.div`
  margin: 10px 0 30px;
`;

export default props => {
  return (
    <Price>
      <div>
        <PriceMin>{props.values[0]} $</PriceMin> —{" "}
        <PriceMax>{props.values[1]} $</PriceMax>
      </div>
      <PriceRemark>The average nightly price is 75$</PriceRemark>
      <Rheostat
        {...props}
        min={props.minPrice}
        max={props.maxPrice}
        values={props.values}
        onValuesUpdated={props.onValuesUpdated}
      />
    </Price>
  );
};
