"use strict";
// 엄격모드 : ES6 안됨, var 명령어 안됨

// DB의 Table에 관련해서 전부 관리한다
// MVC < Model, View, Controller
// 프로그래밍의 기초
// 디자인 패턴 중 하나로 보통의 프로그래밍에서 많이 사용된다
// View : 보이는 거, Controller : 조작, 통제 등등, Model : 저장하는 거

const Sequelize = require("sequelize");
// sequelize : DB에 연결한다 => 무슨 DB든 다 가능하다. mySQL와 함께 사용하는 경우를 계속 하고있다
// MongoDB < noSQL(관계가 없다)
// mysql2 : DB에 연결한다. => mySQL에 접근

const Table1 = require("./table1.js");
const Table2 = require("./table2.js");

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = { Table1, Table2 };

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
// config -> config.json에서의 username, password, database의 정보가 담긴다

Table1.init(sequelize);
Table2.init(sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

// class A {
//   constructor(){
//       this.a = 1;
//   }
//   test(num){
//     console.log(num);
//   }
//   static testStatic(num){
//     console.log(num);
//   }
// }
// const testA = new A();
// testA.test(1);
// // testA.testStatic(1);
// // A.test(1);
// A.testStatic(1);

// const tempDate = new Date();
// // tempDate.now(); // 일단 적인 메서드
// Date().now() // static 메서드

// console.log(new A());
// class B extends A {
//   constructor() {
//     super();
//     this.b = 2;
//   }
// }
// console.log(new B());
