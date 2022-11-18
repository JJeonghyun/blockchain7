import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import BodyComp from "./components/BodyComp";
import styled from "styled-components";

function App() {
  return (
    <AppElem>
      <HeaderContainer>
        <HeaderInnerContainer>
          <Header />
        </HeaderInnerContainer>
      </HeaderContainer>
      {(function () {
        if ("/" == "/")
          return (
            <BodyContainer>
              <BodyInnerContainer>
                <BodyComp />
              </BodyInnerContainer>
            </BodyContainer>
          );
        else {
          return <div>tq</div>;
        }
      })()}
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
export default App;
