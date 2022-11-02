import React from "react";

export default function JS21() {
  const criterias = [
    "no duplicate within in the array from the same group",
    "if age is missing, skip it",
    "if age is not missing, but is not a valid number, add to group 0",
    "should not have any whitespaces",
    "all results in upper case",
    "group age 0~9 to 0, 10~19 to 1, 20~29 to 2 and so on"
  ].map((item, idx) => <li key={idx}>{item}</li>);

  const inputs = [
    { name: "     Adam", age: 23 },
    { name: "Eric", age: 30 },
    { name: "Anna ", age: "15" },
    { name: "Chen", age: 15 },
    { name: "ToMmy", age: 9 },
    { name: "TOMmy", age: "7" },
    { name: "Sam" },
    { name: "SamuEL", age: "abc" }
  ];

  const calculate = (inputs) => {
    // write your code here
    return [];
  };

  return (
    <div className="react">
      <h3>ES6 Features</h3>
      <h4>Criteria</h4>
      <ul>{criterias}</ul>
      <h4>Output</h4>
      <div>{JSON.stringify(calculate(inputs), undefined, 2)}</div>
    </div>
  );
}
