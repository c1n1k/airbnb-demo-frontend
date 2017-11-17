import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import Main from "../UI/Main";
import Row from "../UI/Row";
import Inner from "../UI/Inner";
import InnerGrid from "../UI/Inner/InnerGrid";
import Pagination from "../UI/Pagination";
import Track from "../UI/Track";
import Filter from "./Filter";
import GMap from "./GMap";
import Card from "./Card";
import data from "./data";

const Wrap = styled.div`
  padding-bottom: 45px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const HomesHeader = styled.div`
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
`;

const HomesMain = styled(Main)`
  padding-top: 136px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Content = styled.div`
  @media (min-width: 980px) {
    width: calc(100% * (2 / 3));
  }

  @supports (display: grid) {
    width: auto;
    grid-column: 1 / -1;

    @media (min-width: 980px) {
      grid-column: span 8;
    }
  }
`;

const HomesContent = styled.div`
  position: relative;
  flex-grow: 1;
`;

const List = styled.ul`
  margin: 24px -8px 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  @supports (display: grid) {
    margin-left: 0;
    margin-right: 0;

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 16px;
    }
  }
`;

const ListItem = styled.li`
  margin: 0 0 40px;
  padding: 0 8px;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }

  @supports (display: grid) {
    padding: 0;
    width: auto;
  }
`;

const Remark = styled.p`
  margin-top: 40px;
  font-size: 16px;
  text-align: center;
  color: #636363;
`;

export default () => {
  const items = data.map(item => {
    return (
      <ListItem key={item.name}>
        <Card
          name={item.name}
          to={item.to}
          price={item.price}
          img={item.img}
          mastery={item.mastery}
          beds={item.beds}
          hosterStatus={item.hosterStatus}
          reviewCount={item.reviewCount}
        />
      </ListItem>
    );
  });
  return (
    <Wrap>
      <HomesHeader>
        <Header />
        <Row>
          <Inner>
            <Track>
              <Filter />
            </Track>
          </Inner>
        </Row>
      </HomesHeader>
      <HomesMain>
        <HomesContent>
          <InnerGrid>
            <Content>
              <List>{items}</List>
              <Pagination all="300+" />
              <Remark>
                Enter dates to see full pricing. Additional fees apply. Taxes
                may be added.
              </Remark>
            </Content>
          </InnerGrid>
          <GMap />
        </HomesContent>
      </HomesMain>
      <Footer />
    </Wrap>
  );
};
