import { useState } from "react";

const LogInComp = ({ login, userInfo = [] }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  return (
    <div>
      <div>로그인</div>
      <input
        type={"text"}
        placeholder={"ID를 입력하세요"}
        value={id}
        onInput={(e) => {
          setId(e.target.value);
        }}
      />
      <input
        type={"text"}
        placeholder={"PW를 입력하세요"}
        value={pw}
        onInput={(e) => {
          setPw(e.target.value);
        }}
      />
      <button
        onClick={() => {
          login(id, pw);
          setId("");
          setPw("");
        }}
      >
        확인
      </button>
      <button>취소</button>
      {[...userInfo].map((item, index) =>
        item.check ? (
          <div key={index}>
            {item.id} 님 어서오세용 <button key={index}>로그아웃</button>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
};
export default LogInComp;
