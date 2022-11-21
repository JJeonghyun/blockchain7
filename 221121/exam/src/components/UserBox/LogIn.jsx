import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";

export default function LogIn({ users, setUser }) {
  const [userId, setId] = useState("");
  const [userPw, setPw] = useState("");
  const [ableId, setAbleId] = useState(false);
  const [ablePw, setAblePw] = useState(false);

  useEffect(() => {
    // console.log(userId);
    setId(userId.length ? userId.match(/[a-z]/gi)?.join("") : "");
    if (userId.length < 5) setAbleId(false);
    else setAbleId(true);
  }, [userId]);

  useEffect(() => {
    if (userPw.length < 10) setAblePw(false);
    else setAblePw(true);
  }, [userPw]);

  function onLogIn() {
    const tempUser = users.find((item) => item.userId === userId);
    if (tempUser && tempUser.userPw === userPw) setUser(tempUser.userId);
  }

  return (
    <LoginBox>
      <input
        onInput={(e) => {
          setId(e.target.value);
        }}
        placeholder="ID"
        value={userId}
      />
      <input
        onInput={(e) => {
          setPw(e.target.value);
        }}
        placeholder="PW"
        value={userPw}
        type={"password"}
      />
      <button
        onClick={() => {
          if (!(ableId && ablePw)) return;
          onLogIn();
        }}
      >
        가오니 로그인해라
      </button>
    </LoginBox>
  );
}

const LoginBox = styled.div``;
