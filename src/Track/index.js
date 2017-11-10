import React from "react";
import styled from "styled-components";
import NextPage from "../NextPage";

const Pager = styled.span`
  position: absolute;
  top: 50%;
  right: -20px;
  margin-top: -50px;
  display: none;
  width: 40px;
  height: 40px;

  @media (min-width: 980px) {
    display: block;
  }
`;

const TrackInner = styled.div`
  width: 100%;
  margin-bottom: -30px;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;

  @media (min-width: 980px) {
    margin-bottom: 0;
  }
`;

const Track = styled.div`
  margin: 0 -8px;
  overflow-y: hidden;
  min-width: 100%;
  flex-grow: 1;

  @media (min-width: 980px) {
    overflow: visible;
  }
`;

export default props => {
  const hasPager = props.hasPager;

  return (
    <Track>
      <TrackInner>{props.children}</TrackInner>
      {hasPager && (
        <Pager>
          <NextPage href="" />
        </Pager>
      )}
    </Track>
  );
};