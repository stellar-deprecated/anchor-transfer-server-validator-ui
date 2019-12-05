import React, { useState } from "react";
import s from "./DomainField.module.css";
export default function({ onSearch }) {
  const [value, setValue] = useState("stellar-anchor-server.herokuapp.com");
  return (
    <div>
      <input
        className={s.Field}
        type="text"
        onChange={e => setValue(e.target.value)}
        value={value}
      ></input>
      <button className={s.Button} onClick={e => onSearch(value)}>
        Validate
      </button>
    </div>
  );
}
