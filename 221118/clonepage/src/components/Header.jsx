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
        <div>
          <Link to="/">MONDAYKIZ COMPANY</Link>
        </div>
        <div>
          <Link to="/Artist">ARTIST</Link>
        </div>
        <div>VIDEO</div>
        <div>SCHEDULE</div>
        <div>CONTACT</div>
        <div>EVERGROW</div>
      </HeaderFlex>
    );
  }
}

// const ButtonItem = styled.button`
// `;

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
      color: black;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &:nth-child(n + 1):hover {
      color: black;
    }
  }
  & > div a {
    text-decoration: none;
    color: black;
  }
`;
// & : 현재 선택자(태그?)

export default Header;
