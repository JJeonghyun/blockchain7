import React from "react";
import styled from "styled-components";

function FooterComp() {
  const footerText = {
    text: "Copy right Mondaykiz company 2017-2022 All Rights Reserved",
  };

  return <Footer>{footerText.text}</Footer>;
}

const Footer = styled.div`
  width: 65%;
  margin: 0 auto;
  padding: 15px 0;
  color : #505050;
  font-size:0.7rem
  letter-spacing:0.1em
`;

export default FooterComp;
