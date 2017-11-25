import React from "react";
import styled from "styled-components";
import Link from "../UI/Link";

const Wrap = styled.section`
  margin-bottom: 48px;
  font-size: 18px;
`;

const Title = styled.h2`
  margin: 0 0 16px;
  font-size: 28px;
`;

const Place = styled.p`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 300;
`;

const PlaceLink = styled(Link)`
  font-size: 16px;
  color: #636363;
`;

const TagBlock = styled.div`
  column-count: 3;
  column-gap: 16px;
  widows: 5;
`;

const TagList = styled.ul`
  margin: 0 0 24px;
  padding: 0;
  list-style: none;
  font-weight: 300;
  font-size: 14px;
`;

const TagItem = styled.li`
  margin-bottom: 3px;
`;

const TagLink = styled(Link)`
  color: #676767;
`;

export default props => {
  return (
    <Wrap className={props.className}>
      <Title>Explore other options in and around Armenia</Title>
      <Place>
        More places to stay in Armenia: <PlaceLink to="">Apartments</PlaceLink>{" "}
        &#903; <PlaceLink to="">Houses</PlaceLink> &#903;{" "}
        <PlaceLink to="">Bed & Breackfest</PlaceLink> &#903;{" "}
        <PlaceLink to="">Lofts</PlaceLink> &#903;{" "}
        <PlaceLink to="">Villas</PlaceLink>
      </Place>
      <TagBlock>
        <TagList>
          <TagItem>
            <TagLink to="">Cartagena Vacation R</TagLink>
          </TagItem>
          <TagItem>
            <TagLink to="">Bucaramanga</TagLink>
          </TagItem>
        </TagList>
        <TagList>
          <TagItem>
            <TagLink to="">Manuel Antonio</TagLink>
          </TagItem>
          <TagItem>
            <TagLink to="">
              Cartagena De Indias (Distrito Turistico Y Cultural)
            </TagLink>
          </TagItem>
          <TagItem>
            <TagLink to="">Quito</TagLink>
          </TagItem>
          <TagItem>
            <TagLink to="">Santander de Quilichad</TagLink>
          </TagItem>
        </TagList>
        <TagList>
          <TagItem>
            <TagLink to="">San Andrés Vacation Rentals</TagLink>
          </TagItem>
          <TagItem>
            <TagLink to="">Bogota</TagLink>
          </TagItem>
          <TagItem>
            <TagLink to="">
              Santa Marta (Distrito Turistico Cultural E Historico
            </TagLink>
          </TagItem>
          <TagItem>
            <TagLink to="">Rionegro</TagLink>
          </TagItem>
          <TagItem>
            <TagLink to="">Puerto Rico</TagLink>
          </TagItem>
          <TagItem>
            <TagLink to="">Willemstad Vacation Rentals</TagLink>
          </TagItem>
          <TagItem>
            <TagLink to="">Cali</TagLink>
          </TagItem>
        </TagList>
        <TagList>
          <TagItem>
            <TagLink to="">Chia</TagLink>
          </TagItem>
          <TagItem>
            <TagLink to="">Ibague</TagLink>
          </TagItem>
          <TagItem>
            <TagLink to="">Medellin</TagLink>
          </TagItem>
          <TagItem>
            <TagLink to="">Tabio</TagLink>
          </TagItem>
        </TagList>
      </TagBlock>
    </Wrap>
  );
};
