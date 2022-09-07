const cards = [];
for (let i = 0; i < 4; i++) {
  cards.push(i + 1);
  cards.push(i + 1);
}
console.log(cards);

for (let i = 0; i < 10; i++) {
  const firstCard = parseInt(Math.random() * cards.length);
  const secondCard = parseInt(Math.random() * cards.length);

  const temp = cards[firstCard];
  cards[firstCard] = cards[secondCard];
  cards[secondCard] = temp;
}

console.log(cards);

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

//function cardSel(num) {}
