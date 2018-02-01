import React from "react";
import styled from "styled-components";
import Icon from "../../../UI/Icon";
import Dropdown from "../../../UI/Dropdown";
import Button from "../../../UI/Button";

export const Wrap = styled.div`
  margin: 20px 0;
  padding: 15px 24px;
  border: 1px solid rgba(118, 118, 118, 0.2);
`;

export const Header = styled.div`
  margin-bottom: 15px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
`;

export const Price = styled.div`
  margin-bottom: 10px;
  font-size: 10px;
`;

export const Value = styled.span`
  margin-right: 5px;
  display: inine-block;
  font-size: 24px;
  font-weight: bold;
`;

export const Review = styled.div`
  font-size: 12px;
`;

const Star = styled.span`
  position: relative;
  top: 1px;
  margin-right: 3px;
  display: inline-block;
  width: 12px;
  height: 12px;
`;

export const ReviewStar = props => {
  return (
    <Star>
      <Icon icon="star" fill="#008489" />
    </Star>
  );
};

export const ReviewCount = styled.span`
  margin-left: 5px;
  display: inline-block;
`;

export const Body = styled.form`
  margin-bottom: 15px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
`;

export const Row = styled.div`
  position: relative;
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
`;

export const RowSubmit = styled.div`
  margin-top: 24px;
  text-align: center;
`;

export const Label = styled.label`
  margin-bottom: 3px;
  display: block;
  width: 100%;
  font-size: 12px;
`;

export const Col = styled.div`
  width: 50%;
  &:first-child {
    margin-right: -1px;
  }
`;

export const GuestToggler = styled.button`
  height: 40px;
  width: 100%;
  padding: 0 15px;
  line-height: 40px;
  background-color: transparent;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(72, 72, 72, 0.08);
`;

export const BookDropdown = styled(Dropdown)`
  text-align: left;
`;

export const Request = styled(Button)`
  width: 100%;
  text-align: center;
`;

export const Remark = styled.div`
  margin-top: 11px;
  width: 100%;
  font-size: 12px;
  text-align: inherit;
`;

export const Tip = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 300;
  juctify-content: space-between;
  align-items: center;
`;

export const TipText = styled.div``;

export const TipIcon = styled.div`
  margin-left: 16px;
  width: 48px;
  height: 48px;
`;

export const TipTitle = styled.h5`
  margin: 0 0 6px;
  font-weight: normal;
  font-size: 14px;
`;

export const Guest = styled.div``;

export const GuestRow = styled.div`
  margin-bottom: 23px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: normal;
`;

export const GuestLabel = styled.div`
  display: block;

  span {
    margin-top: 5px;
    display: block;
    font-size: 14px;
    font-weight: 300;
  }
`;

export const Close = styled(Button)``;

export const Actions = styled.div`
  text-align: right;
`;
