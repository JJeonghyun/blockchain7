const today = new Date();
console.log(today);

console.log(today.toLocaleString());
console.log(today.toUTCString());

console.log(today.getDate()); // 일 수 (ex. 8일) : 8
console.log(today.getDay()); // 요일을 0~6(일 ~ 토)
console.log(today.getMonth());

// 날짜 관련은 Date를 생각하면 된다.

console.log(Date.now());
console.log(new Date(Date.now()));
