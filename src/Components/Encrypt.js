import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdOutlineContentCopy } from "react-icons/md";

export default function Encrypt() {
  const [Param, setParam] = useState(0);
  const [Sentence, setSentence] = useState("");
  const [Cipher, setCipher] = useState("");

  function caesarCipher(s, k) {
    let normal = "abcdefghijklmnopqrstuvwxyz";
    let cal = Math.round(k / 26);
    let nc = "abcdefghijklmnopqrstuvwxyz";
    for (let k = 0; k < cal; k++) {
      normal += nc;
    }
    let a = normal.substring(0, k);
    let b = normal.substring(k);
    let cy = b + a;
    let res = "";
    for (let i = 0; i < s.length; i++) {
      let c = s[i];
      if (c.match(/[A-Z]/)) {
        let C = c.toLowerCase();
        let ci = normal.indexOf(C);
        res += cy[ci].toLocaleUpperCase();
      } else if (c.match(/[a-z]/)) {
        let ci = normal.indexOf(c);
        res += cy[ci];
      } else {
        res += c;
      }
    }
    setCipher(res);
  }

  useEffect(() => {
    Sentence.length > 1 && caesarCipher(Sentence, Param);
  }, [Sentence, Param]);

  return (
    <Container>
      <h2>Encrypt</h2>
      <div className="input_values">
        <label htmlFor="param">
          Rotation Value: <small>(Enter a number greater than 1)</small>
        </label>
        <input
          type="number"
          name="param"
          id="param"
          min="1"
          max="101"
          value={Param}
          onChange={(e) =>
            e.target.value < 101 &&
            e.target.value > 0 &&
            setParam(e.target.value)
          }
        />
      </div>
      <div className="input_values">
        <label htmlFor="Sentence">Sentence to Encrypt:</label>
        <input
          type="text"
          name="Sentence"
          id="Sentence"
          min="1"
          value={Sentence}
          onChange={(e) => setSentence(e.target.value)}
        />
      </div>
      <div className="input_values">
        <p>Results:</p>
        <div
          className="value"
          role="button"
          onClick={() => {
            navigator.clipboard.writeText(Cipher).then(
              () => window.alert("Copied successfully to the clipboard"),
              () =>
                window.alert("There was an error when coping to the clipboard")
            );
          }}
        >
          {Cipher} <MdOutlineContentCopy />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: min(700px, 100%);
  margin: auto;
  & > h2 {
    text-align: center;
  }
  input {
    background-color: transparent;
    border: none;
    border-bottom: 2px dashed var(--white);
    padding: 0px 8px;
    color: var(--white);
    outline: none;
    flex: 1;
  }
  & > .input_values {
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex-wrap: wrap;
    & > .value {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      color: var(--light);
      cursor: pointer;
      padding: 0 8px;
      border-bottom: 2px dashed var(--light);
    }
  }
`;
