// 설치 명령어
// npm i merkle

const merkle = require("merkle");

// merkle 라이브러리가 머클 트리를 쉽게 사용할 수 있게 도와준다.

const data = [
  "123125",
  "12312sdgjks",
  "adfsgjsiodhgfsd",
  "재혁아 생일축하한다!",
];
// 머클트리
// 인자값 : 암호화 방법
// sync(data) 함수로 트리를 만들어 준다.
const merkleTree = merkle("sha256").sync(data);
// root() : 생성한 머클 트리의 root값을 가져오는 함수
const root = merkleTree.root();

// SHA256(문자열).toString().toUpperCase()
// 머클 트리에서 sha256 알고리즘을 사용하는데 문자열로 변환과 대문자로 변환을 둘 다 해주고
// 값을 반환해 준다.

console.log(root);
// 2696446C63E16B7EA640FA9DC2C88158D55D7A42F0FF8B161584326989074C7B
