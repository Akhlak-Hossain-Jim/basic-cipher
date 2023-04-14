import React, { useState } from "react";
import styled from "styled-components";
import Decrypt from "./Components/Decrypt";
import Encrypt from "./Components/Encrypt";
import Header from "./Components/Header";

export default function App() {
  const [Tab, setTab] = useState("encrypt");
  const tabs = [
    {
      name: "Encrypt",
      handle: "encrypt",
      component: <Encrypt />,
    },
    {
      name: "Decrypt",
      handle: "decrypt",
      component: <Decrypt />,
    },
  ];
  return (
    <Container>
      <Header />
      <main>
        <nav>
          {React.Children.toArray(
            tabs.map((tab) => (
              <button
                className={`item ${Tab === tab.handle ? "active" : ""}`}
                onClick={() => setTab(tab.handle)}
              >
                {tab.name}
              </button>
            ))
          )}
        </nav>
        {{ encrypt: <Encrypt />, decrypt: <Decrypt /> }[Tab]}
      </main>
    </Container>
  );
}

const Container = styled.div`
  width: min(1440px, 100%);
  margin: auto;
  & > main {
    padding: 24px;
    padding-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    & > nav {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 24px;
      & > button {
        background-color: transparent;
        color: var(--white);
        border: none;
        outline: none;
        &.active {
          color: var(--light);
          position: relative;
          &::after {
            content: "";
            position: absolute;
            height: 2px;
            bottom: 0;
            left: 50%;
            background-color: var(--light);
            transform: translateX(-50%);
            width: 115%;
            /* transform-origin: left; */
          }
        }
      }
    }
  }
`;
