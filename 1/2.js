import sumSubArr from "./1";

function threeLargest(arr) {
  let sorted = arr.sort((a, b) => {
    return a > b ? -1 : 1;
  });
  let sum = 0;
  for (let i = 0; i < 3; i++) {
    sum = sum + sorted[i];
  }
  return sorted;
}

console.log(threeLargest(sumSubArr));
