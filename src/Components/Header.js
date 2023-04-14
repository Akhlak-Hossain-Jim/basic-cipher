import React from "react";
import styled from "styled-components";
import About from "./About";

export default function Header() {
  return (
    <Container>
      <div className="header_logo">
        <img src="/logo.svg" alt="JIM Cipher Logo" />
      </div>
      <About />
    </Container>
  );
}

const Container = styled.header`
  padding: 12px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .header_logo {
    width: min(225px, 100%);
    & > img {
      width: 100%;
      height: auto;
    }
  }
`;
