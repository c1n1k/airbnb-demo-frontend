import styled from "styled-components";
import Link from "../../UI/Link";
import Inner from "../../UI/Inner";
import Button from "../../UI/Button";

export const LinkPage = styled(Link)`
  font-size: 16px;
  font-weight: normal;
`;

export const Wrap = styled.div`
  padding-bottom: 45px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Figure = styled.figure`
  position: relative;
  height: 440px;
`;

export const FigureActionsTop = styled(Inner)`
  position: absolute;
  top: 16px;
  left: 50%;
  height: auto;
  font-size: 14px;
  justify-content: flex-end;
  transform: translateX(-50%);
`;

export const FigureActionsBottom = styled(Inner)`
  position: absolute;
  bottom: 16px;
  left: 50%;
  height: auto;
  font-size: 14px;
  font-weight: bold;
  justify-content: flex-start;
  transform: translateX(-50%);
`;

export const FigureButton = styled(Button)`
  margin-left: 16px;
  font-weight: inherit;

  &:first-child {
    margin-left: 0;
  }
`;

export const ImgRoom = styled.img`
  height: 440px;
  width: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  width: calc(100% / 3 * 2 - 16px);

  @supports (display: grid) {
    width: auto;
    grid-column: span 8;
  }
`;

export const Aside = styled.div`
  position: relative;
  width: calc(100% / 3 - 16px);

  @supports (display: grid) {
    width: auto;
    grid-column: span 4;
    align-self: stretch;
  }
`;

export const Bar = styled.div`
  margin-bottom: 24px;
  padding: 16px 0;
  font-size: 18px;
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
`;

export const BarLink = styled.a`
  padding: 0 5px;
  font-size: 14px;
  text-decoration: none;
  color: #0f7276;
`;

export const Details = styled.div`
  font-size: 18px;
  font-weight: 300;
  line-height: 1.16667;
`;

export const ContentLink = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: #0f7276;
`;

export const Feature = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

export const FeatureItem = styled.li`
  width: 50%;
  margin-bottom: 24px;
  font-weight: 300;
`;

export const List = styled.ul`
  margin: 0 0 16px;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  margin-top: 4px;
  font-weight: 300;

  &:first-child {
    margin-top: 0;
  }
`;

export const Separator = styled.hr`
  margin: 20px 0;
  width: 80px;
  height: 1px;
  background-color: rgba(118, 118, 118, 0.2);
  border: none;
`;
