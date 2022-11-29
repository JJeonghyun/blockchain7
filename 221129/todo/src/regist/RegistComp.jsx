import { useState } from "react";
const RegistComp = ({ regist, userInfo = [] }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");
  return (
    <div>
      <div>회원가입</div>
      <input
        type={"text"}
        placeholder={"ID를 입력하세요"}
        value={id}
        onInput={(e) => {
          setId(e.target.value);
        }}
      />
      <input
        type={"password"}
        placeholder={"PW를 입력하세요"}
        value={pw}
        onInput={(e) => {
          setPw(e.target.value);
        }}
      />
      <input
        type={"text"}
        placeholder={"이름 입력하세요"}
        value={name}
        onInput={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          regist(id, pw, name);
          setId("");
          setPw("");
          setName("");
        }}
      >
        가입
      </button>
      <button>취소</button>
      {/* {[...userInfo].map((item, index) =>
        item.id ? <div key={index}>{item.id} 님 어서오세용</div> : ""
      )} */}
    </div>
  );
};
export default RegistComp;
