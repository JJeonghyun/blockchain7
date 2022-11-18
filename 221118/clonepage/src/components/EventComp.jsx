import React from "react";
import styled from "styled-components";

class EventComp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <FlexContainer>
        <div>
          <img src="./capture1.jpg" alt="didi" />
        </div>
        <div>asd</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </FlexContainer>
    );
  }
}

const FlexContainer = styled.div`
  display: flex;
  justifiy-content: center;
  align-items: center;
  width: 100%;
  & > div {
    width: 16.6%;
  }
  & > div > img {
    width: 100%;
  }
`;

export default EventComp;
