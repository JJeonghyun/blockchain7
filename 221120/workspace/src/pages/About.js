import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function About() {
  return (
    <AboutLink>
      <div>소개 페이지</div>
      <Link to="/">홈으로</Link>
    </AboutLink>
  );
}

const AboutLink = styled.div`
  & > a {
    text-decoration: none;
    color: blue;
  }
`;

export default About;
