import React from "react";
import "../App.css";
import HeaderContainer from "../components/Header/Container";
import BodyContainer from "../components/Body/Container";
import BodyComp from "../components/BodyComp";
import styled from "styled-components";

function Main() {
  return (
    <MainBox>
      <div>
        <div>
          <HeaderContainer />
        </div>
      </div>
      <div>
        <div>
          <BodyComp />
        </div>
      </div>
    </MainBox>
  );
}

const MainBox = styled.div`
  width: 100%;
  & > div:first-child {
    width: 100%;
    position: fixed;
    top: 0;
    background-color: white;
    z-index: 3;
    & > div {
      width: 60%;
      margin: 0 auto;
      padding: 30px 0;
    }
  }
  & > div:last-child {
    padding-top: 95px;
    & > div {
      width: 100%;
    }
  }
`;

export default Main;
