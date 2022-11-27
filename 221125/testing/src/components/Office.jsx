import { useState, useContext } from "react";
import { OfficeContext } from "./ReducerTest.jsx";
import styled from "styled-components";

function Office() {
  const { result, requestDispatch } = useContext(OfficeContext);
  const [balance, setBalance] = useState(10000);

  const [certificate, setCertificate] = useState([
    { type: "주민등록등본", identityCard: "주민등록증" },
    { type: "주민등록초본", identityCard: "주민등록증" },
    { type: "건묵출대장", identityCard: "집문서" },
    { type: "지방세납세증명", identityCard: "주민등록증" },
    { type: "운전면허 정보", identityCard: "운전면허증" },
    { type: "전입신고", identityCard: "주민등록증" },
    { type: "코로나19 격리통지서", identityCard: "신속항원서" },
    { type: "병적증명서 발급", identityCard: "전역증" },
  ]);

  return (
    <>
      <CertificateBtnBox>
        {certificate.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              requestDispatch({
                type: item.type,
                payload: {
                  identityCard: item.identityCard,
                  pay: { balance, setBalance },
                },
              });
            }}
          >
            {item.type} 발급
          </button>
        ))}
      </CertificateBtnBox>
      <div>
        {result} ! / 보유 금액 : {balance}
      </div>
    </>
  );
}

export default Office;

const CertificateBtnBox = styled.div`
  padding: 0 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 250px;
  flex-wrap: wrap;
  & > button {
    cursor: pointer;
    width: 200px;
    padding: 0 5px;
    margin: 0 10px;
  }
`;
