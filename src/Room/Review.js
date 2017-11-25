import React from "react";
import styled from "styled-components";
import Search from "../UI/Search";
import Pagination from "../UI/Pagination";
import Section from "./Section";
import Icon from "../UI/Icon";
import Link from "../UI/Link";
import Text from "../UI/Text";
import marlee from "./marlee.png";
import michele from "./michele.png";

const Review = styled.div`
  margin-bottom: 48px;
`;

const Head = styled.div`
  margin-bottom: 24px;

  @supports (display: grid) {
    width: auto;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-column-gap: 16px;
    align-items: center;
  }
`;

const HeadText = styled.div`
  font-size: 28px;
  font-weight: bold;
  @supports (display: grid) {
    grid-column: span 5;
  }
`;

const HeadTitle = styled.h2`
  margin: 0 16px 0 0;
  display: inline-block;
`;

const Star = styled.span`
  position: relative;
  top: 1px;
  margin-right: 3px;
  display: inline-block;
  width: 19px;
  height: 19px;
`;

const HeadStar = styled(Star)`
  top: 0;
  width: 19px;
  height: 19px;
`;

const QualityStar = styled(Star)`
  width: 12px;
  height: 12px;
`;

const HeadIconStar = props => {
  return (
    <HeadStar>
      <Icon icon="star" fill="#008489" />
    </HeadStar>
  );
};

const HeadSearch = styled(Search)`
  @supports (display: grid) {
    grid-column: span 3;
  }
`;

const Quality = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  @supports (display: grid) {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr 1fr;
  }
`;

const QualityItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-weight: 300;
`;

const QualityRating = props => {
  return (
    <div>
      <QualityStar>
        <Icon icon="star" fill="#008489" />
      </QualityStar>
      <QualityStar>
        <Icon icon="star" fill="#008489" />
      </QualityStar>
      <QualityStar>
        <Icon icon="star" fill="#008489" />
      </QualityStar>
      <QualityStar>
        <Icon icon="star" fill="#008489" />
      </QualityStar>
      <QualityStar>
        <Icon icon="star" fill="#008489" />
      </QualityStar>
    </div>
  );
};

const Comment = styled.div`
  margin-bottom: 24px;
  padding: 0 0 24px;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.16667;
  border-bottom: 1px solid rgba(118, 118, 118, 0.2);
`;

const Author = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const AuthorLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Avatar = styled.figure`
  margin-right: 16px;
  width: 48px;
  height: 48px;
  overflow: hidden;
  border-radius: 50%;
`;

const AuthorName = styled.div`
  margin-bottom: 3px;
  font-size: 20px;
  font-weight: normal;
`;

const CommentDate = styled.time`
  display: block;
  font-size: 16px;
`;

export default props => {
  return (
    <Review>
      <Section>
        <Head>
          <HeadText>
            <HeadTitle>113 Reviews</HeadTitle>
            <HeadIconStar />
            <HeadIconStar />
            <HeadIconStar />
            <HeadIconStar />
            <HeadIconStar />
          </HeadText>
          <HeadSearch size="s" />
        </Head>
        <Quality>
          <QualityItem>
            Accuracy <QualityRating />
          </QualityItem>
          <QualityItem>
            Location <QualityRating />
          </QualityItem>
          <QualityItem>
            Communication <QualityRating />
          </QualityItem>
          <QualityItem>
            Check In <QualityRating />
          </QualityItem>
          <QualityItem>
            Cleanliness <QualityRating />
          </QualityItem>
          <QualityItem>
            Value <QualityRating />
          </QualityItem>
        </Quality>
      </Section>
      <Comment>
        <AuthorLink to="">
          <Author>
            <Avatar>
              <img src={marlee} alt="" />
            </Avatar>
            <div>
              <AuthorName>Marlee</AuthorName>
              <CommentDate>Novemver 2017</CommentDate>
            </div>
          </Author>
        </AuthorLink>
        <Text>
          <p>
            Perfect location. Beautiful place. Host was attentive. Everything
            you could ask for. We brought a baby and they even bought a crib for
            us so that we didn't have to try and travel with a crib.
          </p>
        </Text>
      </Comment>
      <Comment>
        <AuthorLink to="">
          <Author>
            <Avatar>
              <img src={michele} alt="" />
            </Avatar>
            <div>
              <AuthorName>Michele</AuthorName>
              <CommentDate>Novemver 2017</CommentDate>
            </div>
          </Author>
        </AuthorLink>
        <Text>
          <p>
            I've traveled a lot and use airbnb all the time. This was my
            favorite airbnb that I have ever stayed at, no joke. We were a group
            of three guys that came down for business/pleasure and we couldn't
            have been better off. The place is exactly as described and more.
            Perfect location next to everything and perfect place. I couldn't
            find something negative to say if I tried.
          </p>
        </Text>
      </Comment>
      <Pagination />
    </Review>
  );
};
