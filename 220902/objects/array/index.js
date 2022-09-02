// 객체란 ? {} 로 묶인 키와 값으로 이루 어진 변수()? 상자 ?
const obj = {
  // obj = 객체
  a: 1,
  // a가 키고 1이 값이다.
  // 키의 정식 명칭은 프로퍼티(property)다.
  b: function () {
    // b와 c는 함수 = > 여기서는 메서드(method)
    console.log("b");
  },
  c: () => {
    return "c";
  },
};

// const arr = [1, 2, 3];
let arr1 = [1, 2, 3, 5, 10];
let arr2 = [2, 3, 4];
console.log(arr1);
console.log(arr1.slice(-1));
// console.log(arr1.pop());
if (arr2.length == 0) {
} else if (arr2.slice(-1) > arr1.pop()) {
} else {
}
const arr = ["김선주", "최원겸", "염예나", "정재훈", "김성진"];
// 배열도 객체이다.
// arr.push()

// push메서드를 호출
console.log(arr.length);
// 배열의 길이를 나타내는 property
let tempReturn = arr.indexOf(3);
// 배열의 있는 아이템을 찾아서 그 위치를 알려 준다. 즉, 위치를 리턴해준다. 없으면 -1, 첫번째에 있으면 0을 반환해준다. 리턴해준다.
tempReturn = arr.find(function (item) {
  console.log("item" + item);
  return item == 3;
});

// find() 검색할 때 사용할 코드
// 코드의 반환값이 true 나오는 함수를 넣어 준다.
// find() 의 반환값은 아이템의 순서가 아닌 아이템 그 자체이다.
// find() 메서드는 매개변수로 함수를 전달한다.
// 매개변수에 해당하는 함수의 매개변수(item)은 배열의 각 아이템을 적용한다.
// find() 함수는 배열의 각 아이템을 순서대로 매개변수 함수에 전달하여 리턴값을 확인한다.
// 매개변수함수에게서 받은 리턴값이 true면 해당 아이템을 반환하고(return) find() 함수를 종료한다.

// arr배열에서 find() 메서드로 item 매개변수를 이용한 함수로 3과 같아 지는 위치를 찾아서 return 값을 true로 바꿔 위치를 반환해주고 item을 매개변수로 이용한 함수를 끝내고 find() 메서드를 종료하고
// tempReturn에 리턴값으로 나온 배열arr에서 3의 위치 값으로 정의한다.

tempReturn = arr.find((item) => {
  return item[0] === "김";
});
// find는 매개변수 함수가 true인 아이템들 중 첫번째만 리턴해준다.
console.log(tempReturn);

tempReturn = arr.findIndex((item) => {
  return item[0] === "김";
});
// find는 매개변수 함수가 true인 아이템들 중 첫번째의 배열 내에서 몇번째인지 리턴해준다.
console.log(tempReturn);

tempReturn = arr.filter((item) => {
  return item[0] === "김";
});
// filter는 매개변수 함수가 true인 아이템들을 배열로 리턴해준다.

console.log(tempReturn);

tempReturn = arr.map((item) => {
  return item + " 오늘 출석함";
  return item[0] === "김";
});
// map은 return 값들을 배열로 리턴해준다.
console.log(tempReturn);

arr.forEach(function (item) {
  console.log("forEach : " + item);
});
for (let i = 0; i < arr.length; i++) {
  console.log("for " + arr[i]);
}
// forEach 메서드는 아이템을 하나씩 함수에게 매개변수로 전달해 함수를 호출한다.
// 바로 아래의 for문과 같다.
console.log(arr);
arr.reverse();
// 순서 거꾸로

console.log(arr);

console.log(arr.join(" / "));
// 배열을 문자열로 바꿔줍니다. 매개변수로 아이템 사이에 넣을 문자를 입력합니다.
console.log(arr.toString()); // 문자열로 바꿈(거의 모든 객체에 포함되어 있음)

console.log(arr.slice(1, 3));

// [1,2,3,4,5] 이라고 했을 때 1 앞이 0이고, 각 마다 숫자가 늘어난다고 생각하면 좋다.
// [0"김선주", 1"최원겸", 2"염예나", 3"정재훈", 4"김성진" 5];
console.log(arr.slice(1, -1)); // 순서가 꼬이면 안된다.
// -1은 뒤에서 부터 확인합니다. 즉 위에 배열에서 5가 0으로 기준이 되고 4가 -1]

// arr.splice(); 1부터 3개를 짜르고 날리고 남은 배열로 정의 한다.

console.log(sort()); // 기본설정은 오름차순 정렬을 해준다.
console.log(sort().reverse()); // 내림차순으로 정렬 해준다.

console.log(
  arr.sort((curr, next) => {
    if (curr > next) return 1;
    else if (curr < next) return -1;
    else return 0;
    // sort 메서드는 정렬을 해주는 메서드 입니다.
    // 1, 0, -1 로 정렬 방식 선택합니다.
    // 현재가 큰 것을 1로 주고, 다음 것이 큰 것을 -1로 주면 오름 차순으로 정렬 된다.
  })
);

console.log(
  arr.sort((curr, next) => {
    if (curr > next) return -1;
    else if (curr < next) return 1;
    else return 0;
    // 위에 반대 조건시 내림 차순이다.
  })
);

///////////////////////////////////////////////////////////////////////////////////////////////////////

const tempFind = (item) => {
  console.log(`item :  ${item} `);
  console.log(`item ===2 : ${item}`);
  return item === 3;
  // item이 3이랑 같으면 true를 리턴하고 아니면 false를 리턴한다.
};

const arrFind = function () {
  for (let i = 0; i < arr.length; i++) {
    console.log(`i : ${i}`);
    console.log(`arr[${i}] : ${arr[i]}`);

    // 1는 0부터 arr의 길이 까지 i를 하나씩 증가하면서 반복하겠다.
    if (tempFind(arr[i])) return arr[i];
    // tempFind 함수를 호출하고 매개변수로 arr의 i번째의 아이템을 전달한다.
    // tempFind 함수가 true를 리턴(반환)하면 arr의 i번째 아이템을 리턴(반환)한다.
  }
};

console.log(tempReturn);
console.log(arrFind());

const tempArr = [
  {
    name: "정재훈",
    age: 30,
    area: "대치동",
  },
  {
    name: "염예나",
    age: 32,
    area: "경기 하남",
  },
  {
    name: "장정현",
    age: 29,
    area: "서울 송파",
  },
];
console.log(tempArr.find((item) => item.area == "경기 하남"));
console.log(tempArr.findIndex((item) => item.area == "경기 하남"));
console.log(tempArr.filter((item) => item.area == "경기 하남"));
console.log(tempArr.map((item) => item.area == "경기 하남"));
// 수정하며 내용을 확인해 보세요.
