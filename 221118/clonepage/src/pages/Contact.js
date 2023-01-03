import "../App.css";
import HeaderContainer from "../components/Header/Container";

import styled from "styled-components";
import FooterContainer from "../components/Footer/Container";

function Contact() {
  return (
    <MainBox>
      <div>
        <div>
          <HeaderContainer />
        </div>
      </div>
      <BodyContainer>
        <BodyInnerContainer>
          <div>
            <div>
              <div>C O N T A C T</div>
              <div>
                <img src="imgs/caret-down.svg" />
                <hr />
              </div>
              <div>info@mondaykizcompany.com</div>
              <div>070.4742.9978</div>
              <div>
                <input type="text" placeholder="NAME" />
              </div>
              <div>
                <input type="text" placeholder="E-MAIL" />
              </div>
              <div>
                <input type="text" placeholder="SUBJECT" />
              </div>
              <div>
                <textarea placeholder="MESSAGE" />
              </div>
              <div>
                <button>send</button>
              </div>
            </div>
          </div>
          <FooterContainer />
        </BodyInnerContainer>
      </BodyContainer>
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
`;

const BodyContainer = styled.div`
  padding-top: 95px;
`;

const BodyInnerContainer = styled.div`
  width: 100%;
  & > div:first-child {
    background-color: #434c52;
    color: white;
    padding: 20px 0;
    & > div {
      width: 40%;
      margin: 0 auto;
      padding: 50px 0;
      text-align: center;
      & > div {
        padding: 10px 0;
        & > img {
          filter: invert(80%);
        }
        & > hr {
          width: 1px;
          height: 42px;
          margin: 0 auto;
        }
      }
      & > div:first-child {
        font-size: 2rem;
        letter-spacing: 10px;
      }
      & > div:nth-child(n + 4) {
        width: 60%;
        margin: 0 auto;
        padding: 10px 0;
      }
      & > div:nth-child(n + 4) > input,
      textarea,
      button {
        width: 100%;
        padding: 2px 10px;
        border: 1px solid white;
        background-color: #434c52;
      }
      & > div:nth-child(n + 4) > input {
        height: 34px;
      }
      & > div:nth-child(n + 4) > textarea {
        height: 114px;
      }
      & > div:nth-child(n + 4) > input::placeholder,
      textarea::placeholder {
        color: white;
        font-size: 0.5rem;
      }
      & > div:last-child > button {
        color: white;
        cursor: pointer;
        height: 34px;
      }
      & > div:last-child > button:hover {
        background-color: white;
        color: black;
      }
    }
  }
`;

export default Contact;
