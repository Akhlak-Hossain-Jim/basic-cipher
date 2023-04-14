import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdOutlineContentCopy } from "react-icons/md";

export default function Encrypt() {
  const [Param, setParam] = useState(0);
  const [Sentence, setSentence] = useState("");
  const [Cipher, setCipher] = useState("");

  function caesarCipher(s, k) {
    let normal = "abcdefghijklmnopqrstuvwxyz .,-";
    let cal = Math.round(k / normal.length);
    let nc = "abcdefghijklmnopqrstuvwxyz .,-";
    for (let k = 0; k < cal; k++) {
      normal += nc;
    }
    let a = normal.substring(0, k);
    let b = normal.substring(k);
    let cy = b + a;
    let res = "";
    for (let i = 0; i < s.length; i++) {
      let c = s[i];
      if (c.match(/[A-Z \-,.]/)) {
        let C = c.toLowerCase();
        let ci = normal.indexOf(C);
        res += cy[ci].toLocaleUpperCase();
      } else if (c.match(/[a-z \-,.]/)) {
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
      <p>Doing Encryption</p>
      <div className="container_box">
        <div className="container">
          <div className="input_values rotation">
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
            <textarea
              name="Sentence"
              id="Sentence"
              rows={10}
              value={Sentence}
              onChange={(e) => setSentence(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="container">
          <div className="result">
            <div className="result_heading">
              <p>Results:</p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(Cipher).then(
                    () => window.alert("Copied successfully to the clipboard"),
                    () =>
                      window.alert(
                        "There was an error when coping to the clipboard"
                      )
                  );
                }}
              >
                Copy <MdOutlineContentCopy />
              </button>
            </div>
            <div className="value">{Cipher}</div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: min(1200px, 100%);
  margin: auto;
  & > p {
    text-align: center;
  }
  input,
  textarea {
    background-color: transparent;
    border-radius: 6px;
    border: 2px dashed var(--white);
    padding: 0px 8px;
    color: var(--white);
    outline: none;
    font-size: 0.8rem;
    flex: 1;
  }
  & > .container_box {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    & > .container {
      display: flex;
      flex-direction: column;
      gap: 18px;
      & > .input_values {
        display: flex;
        flex-direction: column;
        gap: 12px;
        flex-wrap: wrap;
        &.rotation {
          flex-direction: row;
          & > label {
            & > small {
              font-size: 60%;
            }
          }
        }
      }
      & > .result {
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 12px;
        & > .result_heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          & > button {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
            padding: 0px 12px;
            margin: 0;
            font-size: 0.8rem;
            border: none;
            outline: none;
            border-radius: 6px;
            color: var(--white);
            background-color: var(--light);
          }
        }
        & > .value {
          color: var(--light);
          word-wrap: break-word;
          word-break: break-all;
          font-size: 0.83rem;
          cursor: pointer;
          padding: 0 8px;
          border: 2px dashed var(--light);
          border-radius: 6px;
          height: 100%;
          width: 100%;
          flex: 1;
        }
      }
    }
  }
`;
