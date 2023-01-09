// npm i --save-dev jest
const Block = require("./block");

// 제네시스 블록

const IBlock = require("./block.interface");

const genesis = new IBlock({
  version: "1.0.0",
  height: 0,
  timestamp: Date.now(),
  previousHash: "0".repeat(64),
  hash: "0".repeat(64),
  merkleRoot: "0".repeat(64),
  nonce: 0,
  difficulty: 0,
  data: ["asdawsdasdasdasdasdasdasdasdasdasdasdasd"],
});

const {
  lib: { hexToBinary },
  constants: {
    DIFFICULTY_ADJUSTMENT_INTERVAL,
    BLOCK_GENERAION_INTERVAL,
    TIME_UNIT,
  },
} = require("./config");

// 테스트 단위

describe("최초 블록 체크", () => {
  it("오브젝트인지 확인", () => {
    // 첫 블록이 객체인지 확인한다.
    // expect를 통해 같은지 확인하는 검사식 expect().toBe()
    expect(typeof genesis).toBe("object");
  });
  it("최초 블록의 값을 확인", () => {
    expect(genesis.version).toBe("1.0.0");
    expect(genesis.data).toEqual(["asdawsdasdasdasdasdasdasdasdasdasdasdasd"]);
    // toEqual 객체의 내용이 같은지를 확인 할 수 있다.
    // 객체 || 배열에서 사용 가능
  });
});

// 블록 난이도에 대한 테스트의 모음
describe("block check", () => {
  const block = new Block(genesis);
  // 블록을 생성 해준다

  const adjustmentDifficulty = 0;
  // 난이도를 구하기 위한 이전 난이도를 정의한다

  const adjustmentTimestamp = Date.now();
  // 난이도를 구하기 위한 이전 시간을 정의한다

  it("", () => {});
  it("", () => {});

  // 블록 난이도에 대한 테스트의 모음
  //   describe("difficulty check", () => {
  //     let tempBlockData;
  //     beforeEach(() => {
  //       tempBlockData = {
  //         height: 10,
  //         timestamp: Date.now(),
  //       };
  //     });
  //     // beforEach 테스트를 실행하기 전에 실행
  //     it("", () => {});
  //     it("", () => {});
  //   });
});
