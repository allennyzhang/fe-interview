import { useState } from "react";

export default function React31() {
  const [value, setValue] = useState("");

  const handleChange = (value) => setValue(value);

  return (
    <div>
      <h4>
        Display typed value under input box after stop typing more than 1 second
      </h4>
      <label>Input Value ： </label>
      <input
        type="text"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
      <br />
      <label>Lazy display： {value}</label>
    </div>
  );
}
