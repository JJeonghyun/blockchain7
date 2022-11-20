import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Home() {
  return (
    <HomeLink>
      <div>Home</div>
      <p>메인 페이지</p>
      <Link to="/about">소개</Link>
    </HomeLink>
  );
}

// routes로 감싼 route 컴포넌트로 페이지 마다의 경로를 넣고
// 해당 주소일 때 거기에 알맞는 컴포넌트 페이지로 접근한다

const HomeLink = styled.div`
  & > a {
    text-decoration: none;
    color: blue;
  }
`;

export default Home;
