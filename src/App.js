import React from "react";
import styled from "styled-components";
import About from "./Components/About";
import Decrypt from "./Components/Decrypt";
import Encrypt from "./Components/Encrypt";
import Header from "./Components/Header";

export default function App() {
  return (
    <Container>
      <Header />
      <main>
        <About />
        <Encrypt />
        <Decrypt />
      </main>
    </Container>
  );
}

const Container = styled.div`
  width: min(1440px, 100%);
  margin: auto;
  & > main {
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
`;
