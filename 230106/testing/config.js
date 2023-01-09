const merkle = require("merkle");
const SHA256 = require("crypto-js").SHA256;
const hexToBinary = require("hex-to-binary");

const DIFFICULTY_ADJUSTMENT_INTERVAL = 10;
const BLOCK_GENERAION_INTERVAL = 10;
const TIME_UNIT = 60 * 1000;

module.exports = {
  lib: {
    merkle,
    SHA256,
    hexToBinary,
  },
  constants: {
    DIFFICULTY_ADJUSTMENT_INTERVAL,
    BLOCK_GENERAION_INTERVAL,
    TIME_UNIT,
  },
};
