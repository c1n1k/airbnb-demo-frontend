import React from "react";
import Rheostat from "rheostat";
import "rheostat/css/slider.css";
import "rheostat/css/slider-horizontal.css";
import "./rheostat.css";
import { Price, PriceMin, PriceMax, PriceRemark } from "./styled";

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
