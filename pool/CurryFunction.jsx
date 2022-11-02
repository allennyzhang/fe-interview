export default function CurryFunction() {
  return (
    <div className="q4">
      <h3>Curry function</h3>
      <p>
        Currying is a transformation of functions that translates a function
        from callable as <code>f(a, b, c)</code> into callable as{" "}
        <code>f(a)(b)(c)</code>.
      </p>
      <p>Please implement the curry function</p>
      {/* <div>curry(add)(5)(3): {curry(add)(5)(3)}</div> */}
    </div>
  );
}

function curry(fn) {
  // TODO
}

function add(a, b) {
  return a + b;
}

// const curriedAdd = curry(add);
// curriedAdd(5)(3) <==> add(5, 3)

// const addFive = curriedAdd(5);
// console.log(addFive(3)) -> 8
// console.log(addFive(9)) -> 14
// console.log(addFive(0)) -> 5
