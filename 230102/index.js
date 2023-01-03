// function solution(money) {
//   let answer = [];
//   answer.push(parseInt(money / 5500), parseInt(money % 5500));
//   return answer;
// }

// function solution(numbers, k) {
//   if (!(numbers.length % 2)) {
//     let oddArr = numbers.filter((item) => item % 2 == 1);
//     if (oddArr.length < k) {
//       return oddArr[k - oddArr.length - 1];
//     } else return oddArr[k - 1];
//   } else {
//     let oddArr = numbers.filter((item) => item % 2 == 1);
//     let evenArr = numbers.filter((item) => item % 2 == 0);
//     let tempArr = [...oddArr, ...evenArr];

//     return tempArr[k - 1];
//   }
// }

// let numbers = [1, 2, 3, 4, 5, 6];
// solution(numbers, 5);

// function solution(numbers, k) {
//   k = (2 * (k - 1)) % numbers.length;
//   return numbers[k];
// }

// let numbers = [1, 2, 3, 4, 5, 6];
// console.log(solution(numbers, 5));

function solution(price) {
  if (price >= 500000) {
    price *= 0.8;
  } else if (price >= 300000) {
    price *= 0.9;
  } else if (price >= 100000) {
    price *= 0.95;
  }
  return Math.floor(price);
}

// 가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
