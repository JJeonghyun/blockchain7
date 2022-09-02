let a = 0;
let saveNum1, saveNum2;

function num(a) {
  a = parseInt(a);
  if (saveNum1 == undefined) {
    saveNum1 = a;
  } else {
    saveNum2 = a;
  }
}

function cal(a) {
  switch (a) {
    case "+":
      return saveNum1 + saveNum2;
    case "-":
      return saveNum1 - saveNum2;
    case "*":
      return saveNum1 * saveNum2;
    case "/":
      return saveNum1 / saveNum2;
    case "%":
      return saveNum1 % saveNum2;
  }
}

// function num1(a) {
//   saveNum1 = a;
//   console.log(saveNum1);
//   return saveNum1;
// }

// function num1(a) {
//     saveNum1 = a;
//     console.log(saveNum1);
//     return saveNum1;
//   }

// function num2(a) {
//   saveNum2 = a;
//   return saveNum2;
// }

// switch (a) {
//     case 0:
//       return (saveNum2 = 0);
//     case 1:
//       return (saveNum2 = 1);
//     case 2:
//       return (saveNum2 = 2);
//     case 3:
//       return (saveNum2 = 3);
//     case 4:
//       return (saveNum2 = 4);
//     case 5:
//       return (saveNum2 = 5);
//     case 6:
//       return (saveNum2 = 6);
//     case 7:
//       return (saveNum2 = 7);
//     case 8:
//       return (saveNum2 = 8);
//     case 9:
//       return (saveNum2 = 9);
//     default:
//       break;
//   }

// function revNum(n) {
//   n = parseInt(n);
//   console.log(n);
//   return n;
// }
