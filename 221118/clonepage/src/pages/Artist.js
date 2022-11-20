import React from "react";
import "../App.css";

import styled from "styled-components";
import Header from "../components/Header";
import ArtistComp from "../components/ArtistComp";

function Artist() {
  return (
    <AppElem>
      <HeaderContainer>
        <HeaderInnerContainer>
          <Header />
        </HeaderInnerContainer>
      </HeaderContainer>
      <BodyContainer>
        <BodyInnerContainer>
          <ArtistComp />
        </BodyInnerContainer>
      </BodyContainer>
    </AppElem>
  );
}

const AppElem = styled.div`
  width: 100%;
`;

const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 3;
`;

const HeaderInnerContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 30px 0;
`;

const BodyContainer = styled.div`
  padding-top: 95px;
`;

const BodyInnerContainer = styled.div`
  width: 100%;
`;

export default Artist;
