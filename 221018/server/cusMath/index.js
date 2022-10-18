function sum(a, b) {
  return a + b;
}
function multiplay(a, b) {
  return a * b;
}

module.exports = { sum, multiplay };

// 모듈을 외부로 내보낼 때 module.exports를 사용한다
// module.exports는 객체 형식이다
