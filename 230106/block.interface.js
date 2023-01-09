class IBlock {
  // 인터페이스
  // 자주 사용하려고 설계도를 미리 작성 해놓음
  version; // 블록 버전
  height; // 블록의 높이
  timestamp; // 블록 생성 시간
  previousHash; // 이전 블록의 해시
  hash; // 블록 해쉬
  merkleRoot; // 머클루트
  nonce; // 난이도에 대해서 퀴즈를 풀어가는 값
  difficulty; // 블록 난이도
  data; // 블록의 내용

  // 블록이 매개변수로 전달될 떄 값이 없으면 null을 넣겠다 라는 뜻
  constructor(_block = null) {
    if (_block == null) {
      this.version = "1.0.0";
      return this;
    }
    this.version = _block.version;
    this.height = _block.height;
    this.timestamp = _block.timestamp;
    this.previousHash = _block.previousHash;
    this.hash = _block.hash;
    this.merkleRoot = _block.merkleRoot;
    this.nonce = _block.nonce;
    this.difficulty = _block.difficulty;
    this.data = _block.data;
  }
}

module.exports = IBlock;
