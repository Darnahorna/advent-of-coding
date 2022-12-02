const { readFileSync, promises: fsPromises } = require("fs");

const gameMapping = {
  //A - rock
  //B - paper
  //C - scissors
  // X - rock - 1
  //Y - paper - 2
  //Z - scissors -3

  "B X": 1,
  "A Y": 4,
  "C Y": 6,
  "A Z": 8,
  "A X": 3,
  "B Y": 5,
  "C Z": 7,
  "C X": 2,
  "B Z": 9,
};

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
      temp.push(arr[i]);
    }
  }
  return res;
}

function countWins(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + gameMapping[arr[i]];
  }
  return sum;
}

console.log(countWins(syncReadFile("./data.txt")));
