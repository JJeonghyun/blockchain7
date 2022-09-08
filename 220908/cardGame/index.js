function shuffle(arr, count) {
  if (!arr?.length || typeof arr != "object") return "배열이 아니네 다시 ㄱㄱ";
  for (let i = 0; i < count; i++) {
    const first = parseInt(Math.random() * arr.length);
    const second = parseInt(Math.random() * arr.length);

    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
  }
  return arr;
}

let cards = [];

for (let i = 0; i < 8; i++) {
  cards.push(i + 1);
  cards.push(i + 1);
}

cards = shuffle(cards, 100);
// 카드를 섞어주는 함수(자체제작)

console.log(cards);

let firstCardIdx = -1;
let secondCardIdx = -1;

function selectNum(cardNum) {
  console.log("firstCardIdx : " + firstCardIdx);
  console.log("secondCardIdx : " + secondCardIdx);
  const tempElem = document.getElementById("card" + cardNum);
  const firstElem = document.getElementById("card" + firstCardIdx);
  // 첫번째 선택한 카드의 태그가 정의됩니다.
  const secondeElem = document.getElementById("card" + secondCardIdx);
  // 매개변수로 받은 cardNum는 id의 'card' 뒤에 붙은 숫자와 동일하게
  // 되어 있으며 cardNum와 'card'을 붙여서 id를 찾아옵니다.
  if (tempElem.innerHTML) return;
  // 클릭한 div에 값에 있는가 ? << 선택하거나 맞춘 카드 인가 ? 선택을 했거나 맞춘 카드들은 재선택 불가능

  if (firstCardIdx > -1 && secondCardIdx > -1) {
    // 카드 두장으로 모두 선택 했는가 ? 카드 두장을 모두 선택해서 index값이 cards 배열의 위치들로 재정의되어있는지
    if (cards[firstCardIdx] != cards[secondCardIdx]) {
      // 카드 두장이 다른가 ? 선택한 두 장의 카드의 배열 수가 다른지를 확인 후 다르면 숫자를 초기화하고 위치도 초기화
      firstElem.innerHTML = "";
      secondeElem.innerHTML = "";
      // 카드를 다시 뒤집는다.
    } else {
      firstElem.style.backgroundColor = "green";
      secondeElem.style.backgroundColor = "green";
    }
    firstCardIdx = -1;
    secondCardIdx = -1;
    // 선택한 카드들에 대한 위치 정보를 없앤다.
  }
  if (firstCardIdx < 0) {
    // 첫번째 카드를 선택하지 않았는가 ?
    firstCardIdx = cardNum;
    // 첫번째 카드의 index(cards 기준)를 정의한다.
    tempElem.innerHTML = cards[cardNum];
  } else if (secondCardIdx < 0) {
    // 두번째 카드를 선택하지 않았는가 ?
    secondCardIdx = cardNum;
    tempElem.innerHTML = cards[cardNum];
  }
  //   else if (cards[firstCardIdx] != cards[secondCardIdx]) {
  //     firstElem.innerHTML = "";
  //     secondeElem.innerHTML = "";
  //     firstCardIdx = -1;
  //     secondCardIdx = -1;
  //   }else {
  //     firstCardIdx = -1;
  //     secondCardIdx = -1;
  //   }

  // 찾은 클릭 당한 태그에 내용으로 cards[랜덤으로 배치한 카드들] 중에
  // cardNum - 1(왜냐면 배열의 시작은 0부터 이기에)을 찾아 출력하도록 한다.
}
