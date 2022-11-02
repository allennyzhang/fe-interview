import React, { useState } from "react";

// component start
export function React21() {
  const [number, setNumber] = useState(30);
  const [hasTheme, setHasTheme] = useState(false);
  const themeStyles = {
    backgroundColor: hasTheme ? "blue" : "white",
    color: hasTheme ? "white" : "blue"
  };

  const fibonacciValue = fibonacci(number);
  const allPrimeNumbers = getPrimeNumbers(number);
  const handleSetNumber = (value) => setNumber(Math.min(40, value));

  return (
    <>
      <h4>React Performance</h4>
      <input
        type="number"
        value={number}
        onChange={(e) => handleSetNumber(e.target.value)}
      />
      <button onClick={() => setHasTheme((prev) => !prev)}>Toggle Theme</button>
      <div style={themeStyles}>
        <span>Fibonacci Value: </span>
        {fibonacciValue}
        <div>
          <span>Prime Numbers: </span>
          <ol>
            {allPrimeNumbers.map((item) => (
              <PrimeComponent key={item} item={item} />
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

const PrimeComponent = ({ item }) => {
  return <li>{item}</li>;
};
// component end

// Common function start
const fibonacci = (num) => {
  var num1 = 0;
  var num2 = 1;
  var sum;
  var i = 0;
  for (i = 0; i < num; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }
  return num2;
};

const getPrimeNumbers = (num) => {
  const result = [];
  for (let i = 0; i <= num; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  return result;
};

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};
// Common function end
