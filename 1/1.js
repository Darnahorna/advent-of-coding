const { readFileSync, promises: fsPromises } = require("fs");

function syncReadFile(filename) {
  //read into array
  let contents = readFileSync(filename, "utf-8");
  let arr = contents.split(/\r?\n/);
  return arr;
}

function arrToSubArr() {
  //write content of file to array
  const arr = syncReadFile("./data.txt");
  let res = []; // result
  for (var temp, i = 0; i < arr.length; i++) {
    if (arr[i] === "") {
      temp = "";
    } else {
      if (!temp) res.push((temp = []));
      temp.push(parseInt(arr[i]));
    }
  }
  return res;
}

export default function sumSubArr() {
  //count sum of sub arrays
  let finalArr = [];
  let res = arrToSubArr();

  for (let i = 0; i < res.length; i++) {
    let subArr = res[i];
    let subSum = 0;

    for (let j = 0; j < subArr.length; j++) {
      subSum = subSum + subArr[j];
    }

    finalArr.push(subSum);
  }
  return finalArr;
}

function largestElement() {
  //find largest
  let arr = sumSubArr();
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

console.log(largestElement());
