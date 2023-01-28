import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function About() {
  const [Sentence, setSentence] = useState("");
  useEffect(() => {
    let Step = 0;
    let s = "";
    let sentence =
      "This is a basic cipher functionality to encrypt or decrypt sentences in simple rotation manner.";
    let IID = setInterval(() => {
      if (Step < sentence.length) {
        s += sentence[Step];
        setSentence(s);
        Step++;
      }
    }, 50);
    return () => clearInterval(IID);
  }, []);

  return (
    <Container>
      <p>{Sentence}</p>
    </Container>
  );
}

const Container = styled.section`
  width: min(600px, 100%);
  margin: auto;
  & > p {
    text-align: center;
    color: var(--light);
    line-height: 140%;
  }
`;
