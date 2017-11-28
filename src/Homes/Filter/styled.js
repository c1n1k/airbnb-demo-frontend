import React from "react";
import styled from "styled-components";
import Icon from "../../UI/Icon";
import Link from "../../UI/Link";

export const FilterLink = styled(Link)`
  font-size: 16px;
`;

export const InstantBook = styled.div``;

export const InstantRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 1.14286;
`;

export const InstantText = styled.div``;
export const InstantToggle = styled.div`
  margin-left: 10px;
  flex-shrink: 1;
`;

export const InstantHead = styled.div`
  margin-bottom: 7px;
  width: 100%;
  font-size: 18px;
`;

export const DatesRange = styled.div`
  margin-left: -10px;
  margin-right: -10px;

  & .DayPicker__horizontal {
    box-shadow: none;
  }

  & .CalendarMonth_caption {
    padding-bottom: 40px;
  }
`;

export const Guest = styled.div``;

export const GuestRow = styled.div`
  margin-bottom: 23px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: normal;
`;

export const GuestLabel = styled.div`
  display: block;

  span {
    margin-top: 5px;
    display: block;
    font-size: 16px;
    font-weight: 300;
  }
`;

export const Price = styled.div`
  position: relative;
  font-weight: 300;
  font-size: 12px;
`;

export const PriceMin = styled.span`
  font-size: 16px;
`;
export const PriceMax = styled.span`
  font-size: 16px;
`;
export const PriceRemark = styled.div`
  margin: 10px 0 30px;
`;

export const RoomType = styled.div`
  margin-bottom: 15px;
  padding-right: 60px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const RoomIcon = styled.span`
  position: absolute;
  top: 5px;
  right: -60px;
  width: 32px;
  height: 32px;
`;

export const IconHome = () => {
  return (
    <RoomIcon>
      <Icon icon="home" fill="currentColor" />
    </RoomIcon>
  );
};

export const IconPrivate = () => {
  return (
    <RoomIcon>
      <Icon icon="private" fill="currentColor" />
    </RoomIcon>
  );
};

export const IconShared = () => {
  return (
    <RoomIcon>
      <Icon icon="shared" fill="currentColor" />
    </RoomIcon>
  );
};

export const Section = styled.div`
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
`;

export const SectionTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: normal;
`;

export const SectionRow = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-size: 20px;
`;

export const SectionLabel = styled.span`
  padding-top: 8px;
  flex-grow: 1;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.16;
`;

export const SectionCol = styled.div`
  width: 50%;
`;

export const SectionRemark = styled.div`
  margin: 3px 0;
  display: block;
  font-size: 16px;
  line-height: 1.16;
`;

export const MoreFilter = styled.div``;
