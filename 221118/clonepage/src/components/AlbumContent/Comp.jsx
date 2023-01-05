import styled from "styled-components";

const AlbumContentComp = ({ imgName, tempArr }) => {
  return (
    <AlbumsContainer>
      <div>
        {tempArr.map((item, index) => (
          <div key={`album-box${index}`}>
            <div key={`img-box${index}`}>
              {
                <img
                  key={`img-${index}`}
                  src={`imgs/${imgName}Img${index + 1}.jpg`}
                  alt="didi"
                />
              }
            </div>
            <div key={`text-box${index}`}>
              {index + 1}집 {imgName}
            </div>
          </div>
        ))}
      </div>
    </AlbumsContainer>
  );
};
export default AlbumContentComp;

const AlbumsContainer = styled.div`
  width: 100%;
  background-color: #ececec;
  & > div {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    & > div {
      width: 13.2%;
      background-color: white;
      margin: 15px;
      text-align: center;
      position: relative;

      & > div {
        width: 100%;
        font-size: 0.7rem;
        color: #454545;
        padding: 1px 0;
        & > img {
          width: 100%;
        }
      }
    }
  }
`;
