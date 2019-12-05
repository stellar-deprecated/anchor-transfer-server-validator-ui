import React from "react";
import s from "./ResultSet.module.css";
export default function ResultEntry({ result }) {
  return (
    <div className={result.success ? s.Success : s.Failure}>
      <span className={s.Icon}>{result.success ? "✅" : "❌"}</span>
      {result.name}
      <div className={s.Message}>{result.message}</div>
    </div>
  );
}
