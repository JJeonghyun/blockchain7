import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import Artist from "./Artist";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <HeaderFlex>
        <LinkComp>
          <Link to="/">MONDAYKIZ COMPANY</Link>
        </LinkComp>
        <LinkComp>
          <Link to="/Artist">ARTIST</Link>
        </LinkComp>
        <LinkComp>
          <Link to="/video">VIDEO</Link>
        </LinkComp>
        <LinkComp>
          <Link to="/">SCHEDULE</Link>
        </LinkComp>
        <LinkComp>
          <Link to="/">CONTACT</Link>
        </LinkComp>
        <LinkComp>
          <Link to="/">EVERGROW</Link>
        </LinkComp>
      </HeaderFlex>
    );
  }
}

const HeaderFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  & > div {
    width: 15%;
    font-size: 1.3rem;
    text-align: center;
    color: gray;
    cursor: pointer;
    &:first-child {
      width: 25%;
      border: 4px solid black;
      font-weight: 500;
      text-overflow: ellipsis;
      white-space: nowrap;
      & > a {
        text-decoration: none;
        color: black;
      }
    }
    &:nth-child(n + 1):hover {
      color: black;
    }
  }
`;

const LinkComp = styled.div`
  & > a {
    text-decoration: none;
    color: gray;
  }
  & > a:hover {
    color: black;
  }
`;
// & : 현재 선택자(태그?)

export default Header;
