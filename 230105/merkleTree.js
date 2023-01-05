// npm i merkle, crypto-js
const SHA256 = require("crypto-js/sha256");
const merkle = require("merkle");

// 트리를 만들고 root값을 반환해주는 함수
const createMerkle = (_data) => {
  // 받은 매개변수가 배열인지 아닌지 부터 확인
  if (!Array.isArray(_data)) return "너 배열 아니다..";

  // 배열의 값을 전체 암호화해서 merkleArr변수에 반환 해준다.
  let merkleArr = _data.map((item) => SHA256(item).toString().toUpperCase());

  // 조건 : 머클루트 한개의 값이 나올 때 까지
  // merkleArr.length가 1보다 크면 계속 반복 시키기 위함
  while (merkleArr.length > 1) {
    const tempArr = [];
    for (let i = 0; i < merkleArr.length; i += 2) {
      if (i + 1 === merkleArr.length) {
        // 홀수일 때
        tempArr.push(merkleArr[i]);
      } else {
        tempArr.push(
          SHA256(merkleArr[i] + merkleArr[i + 1])
            .toString()
            .toUpperCase()
        );
      }
    }
    merkleArr = tempArr;
  }
  return merkleArr[0];
};
const libMerkle = (_data) => {
  // 암호화 방식은 sha256이고 매개변수로 전달받은 배열을 머클트릴구조로 만들어주고 root 값을 가져온다
  const merkleRoot = merkle("sha256").sync(_data).root();
  return merkleRoot;
};

exports.createMerkle = createMerkle;
exports.libMerkle = libMerkle;

const data = [
  "asdasdfosioduhgsd",
  "adsopfihgsja;sdklbfhdiogpf[aldsgkl",
  "asdofgjhiauojslkbdhsjopaisfdghsfaioljdghkp[a'sdgbhfkretwflks,.",
  "재혁아 생일축하한다!!!",
  "성진이도 생일 축하한다!",
];
console.log("createMerkle : ", createMerkle(data));
console.log("libMerkle : ", libMerkle(data));
