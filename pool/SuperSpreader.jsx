export default function LinkedList() {
  return (
    <div>
      <h3>Find the super-spreader through transmission routes</h3>
      <p>
        At early stage of COVID outbreak, spotting the "super-spreader" is the
        key to stop the spread.
      </p>
      <p>
        We have collected a lot transmission routes data, please help to find
        out the super-spreader patient.
      </p>
      <img src="super-spreader.png" alt="linked-list" />
      <div>
        The super-spreader patient is:{" "}
        {findSuperSpreader(a2, b3)?.name || "null"}
      </div>
    </div>
  );
}

const p1 = { name: "p1", spreader: null };
const p2 = { name: "p2", spreader: p1 };
const p3 = { name: "p3", spreader: p2 };
const a1 = { name: "a1", spreader: p3 };
const a2 = { name: "a2", spreader: a1 };
const b1 = { name: "b1", spreader: p3 };
const b2 = { name: "b2", spreader: b1 };
const b3 = { name: "b3", spreader: b2 };

function findSuperSpreader(headA, headB) {
  // TODO
  return p3;
}
