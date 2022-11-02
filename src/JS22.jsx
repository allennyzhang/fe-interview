import React from "react";

export default function JS22() {
  // const outputCurrentTimeWithIndex = () => {
  //   for (var i = 0; i < 5; i++) {
  //     setTimeout(function () {
  //       console.log(new Date(), i);
  //     }, 1000);
  //   }
  //   console.log(new Date(), i);
  // };

  const executionSequence = () => {
    async function foo() {
      console.log("1: foo");
    }
    async function bar() {
      console.log("2: bar start");
      await foo();
      console.log("3: bar end");
    }
    console.log("4: script start");
    setTimeout(function () {
      console.log("5: setTimeout");
    }, 0);
    bar();
    new Promise(function (resolve) {
      console.log("6: promise executor");
      resolve();
    }).then(function () {
      console.log("7: promise then");
    });
    console.log("8: script end");
  };

  return (
    <div className="react">
      <h3>
        Can you analyze the output of this code after execution and explain
      </h3>
    </div>
  );
}
