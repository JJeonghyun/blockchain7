import React from "react";
import styled from "styled-components";

class EventComp extends React.Component {
  constructor(props) {
    super(props);
    this.startNum = this.props.startNum;
    this.endNum = this.props.endNum;
  }

  insertImg(startNum, endNum) {
    let tempArr = [];
    for (let i = startNum; i < endNum + 1; i++) {
      tempArr.push(
        <div key={i}>
          <img key={i} src={`imgs/capture${i}.jpg`}></img>
        </div>
      );
    }
    return tempArr;
  }
  render() {
    return (
      <FlexContainer>
        {this.insertImg(this.startNum, this.endNum)}
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
