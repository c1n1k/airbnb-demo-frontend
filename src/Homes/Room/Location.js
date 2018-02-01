import React from "react";
import styled from "styled-components";
import GoogleMap from "google-map-react";

const Location = styled.div`
  margin-bottom: 48px;
`;

const MapWrap = styled.div`
  height: 612px;
`;

const Desc = styled.p`
  margin: 1em 0 0;
`;

export default props => {
  return (
    <Location className={props.className}>
      <MapWrap>
        <GoogleMap
          apiKey={process.env.REACT_APP_MAP_APIKEY}
          center={[59.938043, 30.337157]}
          zoom={9}
        />
      </MapWrap>
      <Desc>
        Exact location information is provided after a booking is confirmed.
      </Desc>
    </Location>
  );
};
