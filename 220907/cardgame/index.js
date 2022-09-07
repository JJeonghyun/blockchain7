//function card() {}
//function card1() {}

// const card1Group = document.getElementById("cardgroup1");
// const card1 = document.getElementsByClassName("card1");
// const card1_1 = document.getElementsByClassName("card1")[0];
//
// console.log(card1Group);
// console.log(card1);
// console.log(card1_1);
//
// const card2Group = document.getElementById("cardgroup2");
// const card2 = document.getElementsByClassName("card2");
//
// console.log(card2Group);
// console.log(card2);

//let firstCard, secondCard;
//let result1, result2;
//let click = 0;
//
//function card(num) {
//  if (click == 0) {
//    firstCard = num;
//  } else if (click == 1) {
//    secondCard == num;
//  }
//  click++;
//}
//
//function result(num) {
//  if (clickCount < 2) return;
//  switch (num) {
//    case "+":
//      alert(firstNum + secondNum);
//      break;
//    case "-":
//      alert(firstNum - secondNum);
//      break;
//    case "*":
//      alert(firstNum * secondNum);
//      break;
//    case "/":
//      alert(firstNum / secondNum);
//      break;
//    case "%":
//      alert(firstNum % secondNum);
//      break;
//  }
//}

let card1Div2 = document.getElementById("addArr2");
let card1Div3 = document.getElementById("addArr3");
let card1Div4 = document.getElementById("addArr4");
let card1Div5 = document.getElementById("addArr5");
let card1Div6 = document.getElementById("addArr6");
let card1Div7 = document.getElementById("addArr7");
let card1Div8 = document.getElementById("addArr8");
let card1Div9 = document.getElementById("addArr9");
let card1Div10 = document.getElementById("addArr10");
let card1Div11 = document.getElementById("addArr11");
let card1Div12 = document.getElementById("addArr12");
let card1Div13 = document.getElementById("addArr13");
let card1Div14 = document.getElementById("addArr14");
let card1Div15 = document.getElementById("addArr15");
let card1Div16 = document.getElementById("addArr16");

let numArr = [];

for (let i = 1; i < 9; i++) {
  numArr.push(i);
}
let setSel1 = [];

function shuffle(arr) {
  if (!arr?.length || typeof arr != "object") return "배열이 아니네 다시 ㄱㄱ";
  for (let i = 0; i < 100; i++) {
    const first = parseInt(Math.random() * arr.length);
    const second = parseInt(Math.random() * arr.length);

    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
  }
  return arr;
}

function cardNum() {
  setSel1 = shuffle(numArr);
  for (let i = 0; i < 8; i++) {
    let card1Div1 = document.getElementById("addArr1");
    card1Div1.innerHTML = setSel1[i];
  }
}
function reset() {
  let card1Div = document.getElementById("addArr");
  card1Div.innerHTML = ``;
}

function checkNum() {
  let spanNum = document.getElementById("addArr");
  spanNum.innerHTML += numArr[0];
}
