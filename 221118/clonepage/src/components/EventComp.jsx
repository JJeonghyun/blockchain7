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
          <img src="imgs/capture1.jpg" alt="didi" />
        </div>
        <div>
          <img src="imgs/capture2.jpg" alt="didi" />
        </div>
        <div>
          <img src="imgs/capture3.jpg" alt="didi" />
        </div>
        <div>
          <img src="imgs/capture4.jpg" alt="didi" />
        </div>
        <div>
          <img src="imgs/capture1.jpg" alt="didi" />
        </div>
        <div>
          <img src="imgs/capture6.jpg" alt="didi" />
        </div>
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
    padding: 5px;
  }
  & > div > img {
    width: 100%;
  }
`;

export default EventComp;
