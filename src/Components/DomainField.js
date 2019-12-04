import React, { useState } from "react";

export default function() {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={e => setValue(e.target.value)}
        value={value}
      ></input>
    </div>
  );
}
