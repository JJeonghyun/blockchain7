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
          <img key={i} src={`imgs/capture${i}.jpg`} />
          <div key={i}>
            <div key={i}>
              <img key={i} src="imgs/instarImg.png" alt="asd" />
              <div key={i}>8 days age</div>
            </div>
            <div key={i}>
              인천에서도 '외롭다' 공연 티켓 오픈되었습니다. 많은 관심
              부탁드립니다
            </div>
            <div key={i}>read more</div>
          </div>
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
    position: relative;
    &:hover > div:last-child {
      opacity: 1;
    }
    & > img {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
    & > div {
      opacity: 0;
      position: absolute;
      top: 5px;
      left: 5px;
      background-color: rgba(0, 0, 0, 0.5);
      width: calc(100% - 10px);
      height: calc(100% - 15px);
      & > div {
        width: 100%;
        color: white;
        font-size: 12px;
        padding: 0 15px;
        margin-bottom: 10px;
        &:first-child {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 80%;
          padding-top: 10px;
          & > img {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
`;

export default EventComp;
