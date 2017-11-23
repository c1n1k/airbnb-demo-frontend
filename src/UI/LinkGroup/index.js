import React from "react";
import styled from "styled-components";

const LinkGroup = styled.div`font-size: 15px;`;

const Head = styled.h4`
  margin: 0 0 18px;
  font-size: 15px;
  font-weight: bold;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`margin: 0 0 10px;`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
`;

export default props => {
  const items = props.group.map(item => {
    return (
      <ListItem key={item.key}>
        <Link href={item.href}>{item.text}</Link>
      </ListItem>
    );
  });
  return (
    <LinkGroup>
      <Head>{props.name}</Head>
      <List>{items}</List>
    </LinkGroup>
  );
};
