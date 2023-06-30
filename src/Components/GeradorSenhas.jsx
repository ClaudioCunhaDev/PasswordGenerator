import React, { useState } from "react";
import styles from "../Components/GeradorSenhas.module.css";
import { Input } from "./Input";
export const GeradorSenhas = () => {
  const [pw, setPw] = useState();
  const [copybtn, setCopybtn] = useState(false);
  const [length, setLength] = useState(12);
  const [state, setState] = useState(false);

  const handleNumber = (e) => {
    if (e.target.value < 28) {
      setLength(Number(e.target.value));
    }
  };

  const handleGerar = () => {
    setCopybtn(false);
    const characters =
      "!#$%&=qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPASDFGHJKLÇZXXVBNM1234567890";
    let newPw = "";
    for (let i = 0; i < length; i++) {
      newPw += characters[Math.floor(Math.random() * characters.length)];
    }

    setPw(newPw);
  };

  const handleCopy = () => {
    setCopybtn(true);
    if (pw) {
      navigator.clipboard.writeText(pw);
    } else {
      navigator.clipboard.writeText("Nada para copiar");
    }
  };
  return (
    <div className={styles.geradorSenhas}>
      <div className={styles.gs}>
        <h1>Password Generator</h1>
        <div className={styles.caracteres}>
          <h3>Number of Characters:</h3>
          <input
            type="checkbox"
            value={length}
            onChange={() => {
              setLength(!state ? null : 12);
              return setState((prvState) => !prvState);
            }}
          />
        </div>
        {state && (
          <Input length={length ? length : null} handleNumber={handleNumber} />
        )}
        <div className={styles.btns}>
          <button onClick={handleGerar}>Generate</button>
          <button onClick={handleCopy}>{copybtn ? "Copied" : "Copy"}</button>
        </div>
        <p>{pw}</p>
      </div>
    </div>
  );
};
