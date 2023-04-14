import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function About() {
  const [Sentence, setSentence] = useState("");
  let sentence =
    "This is a basic cipher functionality to encrypt or decrypt sentences in simple letter rotation manner.";
  useEffect(() => {
    let Step = 0;
    let s = "";
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
      <div className="back">{sentence}</div>
      <p>{Sentence}</p>
    </Container>
  );
}

const Container = styled.section`
  width: min(700px, 100%);
  margin: auto;
  position: relative;
  & > .back {
    text-align: center;
    opacity: 0;
    line-height: 120%;
    font-size: 0.8rem;
  }
  & > p {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    color: var(--light);
    line-height: 120%;
    font-size: 0.8rem;
  }
`;
