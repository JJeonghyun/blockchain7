const fs = require("fs");
const path = require("path");

// console.log("dirname : " + path.dirname(__filename));
// // 파일의 경로
// console.log("extname : " + path.extname(__filename));
// // 파일의 확장자
// console.log("basename : " + path.basename(__filename));
// // 파일의 이름
// console.log(path.join(__dirname, "..", ".."));
// // 경로를 합친다
// // console.log(path.join(__dirname, "..", "..","fileSystem"));
// // path란 경로에 대해서 관리하는 모듈

// fs.writeFile("./test.txt", "아뇽하세요", (data) => {
//   console.log(data);
// });
// // 파일을 생성한다(파일명, 파일내용, 실행성공 시 호출할 콜백함수)

// fs.readFile("./test.txt", (err, data) => {
//   console.log(data);
//   console.log(data.toString());
// });

// const fsFrom = fs.promises;
// fsFrom
//   .writeFile("./test1.txt", "프라미스여 ~")
//   .then(() => {
//     return fsFrom.readFile("./test1.txt");
//   })
//   .then((data) => {
//     console.log(data);
//     console.log(data.toString());
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fs.writeFileSync("./test2.txt", "싱크 확인");

function tryTest() {
  try {
    let data = fs.readFileSync("./test11.txt");
    console.log("data : " + data);
  } catch (err) {
    console.log(err);
  }
}

tryTest();

let data = fs.readFileSync("./test.txt");
console.log("data : " + data.toString());
data = fs.readFileSync("./test1.txt");
console.log("data : " + data.toString());
data = fs.readFileSync("./test2.txt");
console.log("data : " + data.toString());

async function readFileSyncFunc(filePath) {
  const data = await fs.promises.readFile(filePath);
  console.log("test : " + data);
  //   return data;
}

readFileSyncFunc("./test2.txt");

// fs.createReadStream()
// 알아서 공부해보자

console.log("__filename : " + __filename);
// 파일 이름을 포함한 경로
console.log("__dirname" + __dirname);
// 현재 파일 경로
// 위 변수들은 ES6에 없다 (__filename, __dirname)

// import fs from 'fs';
// ES6 문법
