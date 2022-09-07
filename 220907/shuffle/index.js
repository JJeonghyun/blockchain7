const cards = [];

for (let i = 0; i < 8; i++) {
  cards.push(i + 1);
  cards.push(i + 1);
}
// 카드 1~8까지 쌍으로 8페어 16장;
console.log(cards);

for (let i = 0; i < 100; i++) {
  const firstCard = parseInt(Math.random() * cards.length);
  //  // 첫번째 카드 선택  ex) 1번째
  const secondCard = parseInt(Math.random() * cards.length);
  //  // 두번째 카드 선택  ex) 6번째
  const temp = cards[firstCard]; // << 숫자 1
  //  // temp = 1 / cards[firstCard] = 1
  //  // 첫번째 카드를 임시 저장
  cards[firstCard] = cards[secondCard]; // << 숫자 4
  // 첫번째 카드 자리에 두번째 카드를 저장
  // cards[firstCard] =4  /  cards[secondCard] = 4
  cards[secondCard] = temp;
  // 두번째 카드자리에 temp를 저장
  // cards[secondCard] = 1
}
console.log(cards);
