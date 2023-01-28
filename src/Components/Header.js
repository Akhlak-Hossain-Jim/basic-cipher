import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <div className="header_logo">
        <img src="/logo.svg" alt="JIM Cipher Logo" />
      </div>
    </Container>
  );
}

const Container = styled.header`
  padding: 24px;
  display: flex;
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
