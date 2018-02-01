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

const TrackRow = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 30px;
  margin-bottom: -30px;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;

  @media (min-width: 980px) {
    margin-bottom: 0;
    padding-bottom: 0;
    overflow: visible;
  }
`;

const TrackInner = styled.div`
  display: flex;
  overflow: hidden;
`;

const Track = styled.div`
  position: relative;
  margin: 0 -8px;
  overflow: hidden;
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
      <TrackInner>
        <TrackRow>{props.children}</TrackRow>
      </TrackInner>
      {hasPager && (
        <Pager className="pager">
          <NextPage href="" />
        </Pager>
      )}
    </Track>
  );
};
