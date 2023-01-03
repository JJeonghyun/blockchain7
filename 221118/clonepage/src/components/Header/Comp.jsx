import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
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
        <Link to="/schedule">SCHEDULE</Link>
      </LinkComp>
      <LinkComp>
        <Link to="/contact">CONTACT</Link>
      </LinkComp>
      <LinkComp>
        <Link to="/">EVERGROW</Link>
      </LinkComp>
    </HeaderFlex>
  );
};
export default HeaderComponent;

const HeaderFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  & > div {
    width: 15%;
    font-size: 1.2rem;
    text-align: center;
    color: gray;
    cursor: pointer;
    &:first-child {
      width: 20%;
      min-width: 200px;
      border: 4px solid black;
      font-weight: 500;
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
