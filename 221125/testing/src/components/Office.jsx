import { useState, useContext } from "react";
import { OfficeContext } from "./ReducerTest";

function Office() {
  const { result, requestDispatch } = useContext(OfficeContext);
  const [balance, setBalance] = useState(10000);
  // 발급받을 때 마다 돈이 줄어들도록
  // 발급 금액도 달라야한다.
  return (
    <div>
      <div
        className="office"
        onClick={() => {
          requestDispatch({
            type: "주민등록등본",
            // 어떠한 작업을 할것 이냐?
            payload: {
              // 작업에 필요한 데이터
              identityCard: "주민등록증",
              pay: { balance, setBalance },
            },
          });
        }}
      >
        {result}
      </div>
      {/* <div
        className="office"
        onClick={() => {
          requestDispatch({
            type: "주민등록초본",
            // 어떠한 작업을 할것 이냐?
            payload: {
              // 작업에 필요한 데이터
              identityCard: "주민등록증",
              pay: balance,
              setPay: setBalance(balance - 700),
            },
          });
        }}
      >
        {result}
      </div> */}
    </div>
  );
}

export default Office;
