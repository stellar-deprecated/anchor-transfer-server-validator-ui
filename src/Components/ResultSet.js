import React from "react";
import ResultEntry from "./ResultEntry";

export default function({ results }) {
  if (!results) return null;
  return (
    <div className="results">
      {results.map(result => {
        return <ResultEntry key={result.name} result={result} />;
      })}
    </div>
  );
}
