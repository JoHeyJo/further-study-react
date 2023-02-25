"use strict";

/** Return random number <= maxNum */
const randInt = (maxNum) => Math.floor(Math.random() * maxNum);

/** Return random list item */
function choice(arr) {
  const randIdx = Math.floor(Math.random() * arr.length);
  return arr[randIdx];
}

export { randInt, choice };