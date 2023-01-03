import styled from "styled-components";

const AlbumTitleComp = ({ category, engCategory }) => {
  return (
    <TitleText>
      <div>
        {category} 앨범 ({engCategory} Albums)
      </div>
    </TitleText>
  );
};
export default AlbumTitleComp;

const TitleText = styled.div`
  width: 100%;
  & > div {
    width: 70%;
    margin: 30px auto;
    border-bottom: 5px double black;
    font-size: 1.5rem;
    font-weight: 500;
    padding: 10px 0;
  }
`;
