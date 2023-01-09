class IBlock {
  version;
  height;
  timestamp;
  previousHash;
  hash;
  merkleRoot;
  nonce;
  difficulty;
  data;
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
