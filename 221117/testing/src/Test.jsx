import React, { useState } from "react";

export default function ({ test, children }) {
  //   let count = 0;
  const [count1, setCount1] = useState(0);

  //   const [id, setId] = useState("");
  //   const [pw, setPw] = useState("");
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [gender, setGender] = useState("");

  const [info, setInfo] = useState({
    id: "",
    pw: "",
    name: "",
    email: "",
    gender: "",
  });

  const { id, pw, name, email, gender } = info;
  const onChange = (e) => {
    const { id, pw, name, email, gender } = e.target;

    setInfo({
      ...info,
      // [name]: value,
    });
  };

  const onReset = () => {
    setInfo({
      id: "",
      pw: "",
      name: "",
      email: "",
      gender: "",
    });
  };

  //   const onChangeUserId = (e) => {
  //     setId(e.target.value);
  //   };
  //   const onChangeUserPw = (e) => {
  //     setPw(e.target.value);
  //   };
  //   const onChangeUserName = (e) => {
  //     setName(e.target.value);
  //   };
  //   const onChangeUserEmail = (e) => {
  //     setEmail(e.target.value);
  //   };
  //   const onChangeUserGender = (e) => {
  //     setGender(e.target.value);
  //   };
  //   const onClick = () => {
  //     console.log(id);
  //     console.log(pw);
  //     console.log(name);
  //     console.log(email);
  //     console.log(gender);
  //   };

  // props다. 나중에 다시 언급할 예정
  // props는 상위 컴포넌트에서 설정된 값이다
  // props.children은 상위 컴포넌트에서 해당 컴포넌트의 자식으로 설정된 값이다'
  const tempArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {/* <button
        onClick={function () {
          console.log(count1);
          setCount1(count1 + 1);
        }}
      >
        {count1}
      </button> */}
      {/* <div style={{ fontSize: "30px", backgroundColor: "red" }}>
        {test} {children}
      </div> */}
      <div className="info-flex">
        <div className="info-item">
          <div className="info-text">ID </div>
          <input
            type="text"
            name="id"
            onChange={onChange}
            value={id}
            autoComplete="off"
          />
        </div>
        <div className="info-item">
          <div className="info-text">PW </div>
          <input
            type="password"
            name="pw"
            onChange={onChange}
            value={pw}
            autoComplete="off"
          />
        </div>
        <div className="info-item">
          <div className="info-text">이 름 </div>{" "}
          <input
            type="text"
            name="name"
            onChange={onChange}
            value={name}
            autoComplete="off"
          />
        </div>
        <div className="info-item">
          <div className="info-text">이메일 </div>
          <input
            type="email"
            name="email"
            onChange={onChange}
            value={email}
            autoComplete="off"
          />
        </div>
        <div className="info-item">
          <div className="info-text">성별 </div>
          <input
            type="text"
            name="gender"
            onChange={onChange}
            value={gender}
            autoComplete="off"
          />
        </div>
        <div className="info-item">
          <input type="submit" value="가입" id="submit-btn" />
          <input type="reset" value="취소" id="reset-btn" />
        </div>
      </div>
      {/* {infoArr.map((item, index) => {
        return <li key={index}>{item}</li>;
      })} */}
      {/* {tempArr.map((item, index) => {
        return <li key={`test-${index}`}>{item}</li>;
      })} */}
    </>
    // 빈 태그가 가능하다
    // HTML 태그의 형제 방식으로 return하지 못한다 < 하나로 구조를 묶어서 return 해야한다
  );
  // HTML 문법 내에 JavaScript 변수 / 함수 등등을 사용할 경우 {}로 묶어준다.
}

// Component란 여러 개의 함수들을 모아서 하나의 특정한 기능을 수행할 수 있도록
// 구성한 작은 기능적 단위
// React는 View를 위한 라이브러리 > Front End에 보여주기 위한 라이브러리
// > 랜더링이 주된 기능이다. > 기능은 div 등등의 Element 구조로 많이 나뉘어진다
