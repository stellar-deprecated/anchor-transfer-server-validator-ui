import React, { useCallback, useState } from "react";
import DomainField from "./Components/DomainField";
import ResultSet from "./Components/ResultSet";
import Loading from "./Components/Loading";
import "./App.css";
import Validate from "transfer-server-validator";

function App() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const onSearch = useCallback(
    async domain => {
      setResults(null);
      setLoading(true);
      const results = await Validate(domain);
      setLoading(false);
      setResults(results);
    },
    [setResults]
  );

  return (
    <div className="App">
      <DomainField onSearch={onSearch} />
      <ResultSet results={results} />
      <Loading active={loading} />
    </div>
  );
}

export default App;
