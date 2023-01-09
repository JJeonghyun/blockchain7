const IBlock = require("./block.interface");

const {
  lib: { merkle, SHA256, hexToBinary },
  constants: {
    BLOCK_GENERAION_INTERVAL,
    DIFFICULTY_ADJUSTMENT_INTERVAL,
    TIME_UNIT,
  },
} = require("./config");

class Block extends IBlock {
  constructor() {
    super();
  }
  create(_previousBlock, _adjustmentDifficulty, _adjustmentTimestamp, _data) {
    try {
      const { height, hash: previousHash } = _previousBlock;
      this.height = height + 1;
      this.previousHash = previousHash;
      const merkleRoot = this.getMerkleRoot(_data);

      if (merkleRoot.isError) throw new Error(merkleRoot.error);
      this.merkleRoot = merkleRoot.value;
      this.nonce = 0;
      this.timestamp = Date.now();

      this.difficulty = this.getDifficulty({
        height: this.height,
        timestamp: this.timestamp,
        previousDifficulty: _previousBlock.difficulty,
        _adjustmentDifficulty,
        _adjustmentTimestamp,
      });
      this.hash = this.createHash(this);
      this.data = _data;
      this.updateBlock(
        _previousBlock,
        _adjustmentDifficulty,
        _adjustmentTimestamp
      );
      return this;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  getMerkleRoot(_data) {
    return Array.isArray(_data)
      ? {
          isError: false,
          value: _data.length
            ? merkle("sha256").sync(_data).root()
            : "0".repeat(64),
        }
      : { isError: true, error: "이거 오류" };
  }

  createHash(_block) {
    return SHA256(
      Object.entries(_block)
        .filter((item) => item[0] !== "hash" && item[0] !== "data")
        .join("")
    );
  }

  getDifficulty({
    height,
    timestamp,
    previousDifficulty,
    adjustmentDifficulty,
    adjustmentTimestamp,
  }) {
    if (height < DIFFICULTY_ADJUSTMENT_INTERVAL) return 0;
    if (height < DIFFICULTY_ADJUSTMENT_INTERVAL * 2) return 1;
    if (height % DIFFICULTY_ADJUSTMENT_INTERVAL !== 0)
      return previousDifficulty;
    const timeTaken = timestamp - adjustmentTimestamp;
    const timeExpected =
      TIME_UNIT * BLOCK_GENERAION_INTERVAL * DIFFICULTY_ADJUSTMENT_INTERVAL;

    if (timeTaken < timeExpected * 0.5) return adjustmentDifficulty + 1;
    if (timeTaken > timeExpected * 1.5) return adjustmentDifficulty - 1;

    return adjustmentDifficulty;
  }

  updateBlock(_previousBlock, _adjustmentDifficulty, _adjustmentTimestamp) {
    let hashBinary = hexToBinary(this.hash);
    while (!hashBinary.startsWith("0".repeat(this.difficulty))) {
      this.nonce += 1;
      this.timestamp = Date.now();

      this.difficulty = this.getDifficulty(
        _previousBlock.difficulty,
        _adjustmentDifficulty,
        _adjustmentTimestamp
      );
      this.hash = this.createHash(this);
      hashBinary = hexToBinary(this.hash);
    }
  }

  isValidNewBlock(_newBlock, _previousBlock) {
    if (_newBlock.height !== _previousBlock.height + 1) {
      return { isError: true, error: "Block height is incorrect " };
    }
    if (_newBlock.previousHash !== _previousBlock.hash) {
      return { isError: true, error: "hash of previous Block is incorrect" };
    }
    if (this.createHash(_newBlock) !== _newBlock.hash) {
      return { isError: true, error: "hash of block is incorrect" };
    }

    return { isError: false, value: _newBlock };
  }
}

module.exports = Block;
