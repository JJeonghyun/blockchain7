import styled from "styled-components";

const TitleComponent = () => {
  return (
    <TitleBox>
      <div>MONDAYKIZ</div>
    </TitleBox>
  );
};
export default TitleComponent;

const TitleBox = styled.div`
  width: 65%;
  margin: 0 auto;
  & > div {
    display: flex;
    justify-content: center;
    align-item: center;
    font-size: 2rem;
    padding: 30px 0;
  }
`;
