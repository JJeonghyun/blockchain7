let x = [];

let oddArr = [];
let evenArr = [];

function oddEven(x, name) {
  for (let i = 0; i <= x; i++) {
    if (i % 2 == 1) oddArr.push(i);
    else if (i % 2 == 0) evenArr.push(i);
  }
  if (name == "홀수") console.log(oddArr + " " + name);
  else if (name == "짝수") console.log(evenArr + " " + name);
}

x = prompt(`숫자와 홀수/짝수를 입력하세요.`).split(" ");

oddEven(x[0], x[1]);

let inputNum;
let numArr = [];
let original;

inputNum = prompt(`369게임을 시작하겠습니다. 목표 숫자를 입력하세요`);

for (let i = 1; i <= inputNum; i++) {
  original = i;
  numArr = [...String(original)];
  let count = 0;
  for (let j = 0; j <= numArr.length - 1; j++) {
    if (numArr[j] == 3 || numArr[j] == 6 || numArr[j] == 9) {
      count++;
    }
  }
  if (count == 0) {
    console.log(original);
  } else {
    console.log(original + " clap !".repeat(count));
  }
}

// numArr = [...inputNum];
// console.log(numArr);

// function num11(number) {
//   let nums = number.toString().split("");
//   let clap = [];

//   for (let num of nums) {
//     if (num === "3" || num === "6" || num === "9") {
//       clap.push("짝!");
//     }
//     if (clap.indexOf("짝!") == -1) {
//       return nums.join("");
//     }
//   }
//   return clap;
// }

// console.log(num11(359));

//   if (inputNum % 10 == 3) {
//     console.log(inputNum + " clap");
//   } else if (inputNum % 10 == 6) {
//     console.log(inputNum + " clap");
//   } else if (inputNum % 10 == 9) {
//     console.log(inputNum + " clap");
//   } else console.log(i);

// if (numArr.includes("3")) console.log(numArr + " clap");
// if (numArr.includes("6")) console.log(numArr + " clap");
// if (numArr.includes("9")) console.log(numArr + " clap");

// for (let i = 0; i <= inputNum; i++) {
//   console.log(i);
//   if (numArr[0] == 3) {
//     console.log(numArr[0] + "짞!");
//     continue;
//   } else if (numArr[0] == 6) {
//     console.log(numArr[0] + "짞!");
//   } else if (numArr[0] == 9) {
//     console.log(numArr[0] + "짞!");
//   }
// }

// for (let i = 0; i < inputNum; i++) {
//   if (numArr[0] % 10 == 3 || numArr[0] % 10 == 6 || numArr[0] % 10 == 9) {
//     console.log(numArr[i] + "짝");
//   } else if (
//     numArr[1] % 10 == 3 ||
//     numArr[1] % 10 == 6 ||
//     numArr[1] % 10 == 9
//   ) {
//   } else if (
//     numArr[2] % 10 == 3 ||
//     numArr[2] % 10 == 6 ||
//     numArr[2] % 10 == 9
//   ) {
//   }
// }
// console.log(inputNum + " 박수 횟수  " + count);

// function game369() {
//   for (let j = 1; j <= 40; j++) {
//     // 0 ~ 9 사이 수
//     if (Math.floor(j / 10) == 0 && j % 3 == 0) {
//       console.log(j + "  Clap!");
//     }

//     // 10 ~ 20 사이 수
//     else if (Math.floor(j / 10) == 1) {
//       a = j % 10;
//       if (j == 10) {
//         console.log(j);
//       } else if (a % 3 == 0) console.log(j + " Clap!");
//       else console.log(j);
//     }
//     // 20 ~ 30 사이 수
//     else if (Math.floor(j / 10) == 2) {
//       a = j % 10;
//       if (j == 20) {
//         console.log(j);
//       } else if (a % 3 == 0) console.log(j + " Clap!");
//       else console.log(j);
//     }

//     // 30 ~ 40 사이 수
//     else if (Math.floor(j / 10) == 3) {
//       a = j % 10;
//       if (j == 30) console.log(j + " Clap!");
//       else if (a % 3 == 0) console.log(j + " Clap!Clap!");
//       else console.log(j + " Clap!");
//     } else console.log(j);
//   }
// }
// game369();
