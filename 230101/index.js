// class Member {
//   number = 3;
//   getName() {
//     console.log(this);
//     return "이름";
//   }
// }

// const data = new Date();
// const member = new Member();
// console.log(member.getName());

class Penguin {
  constructor(name) {
    this.name = name;
    console.log(`${this.name}이 나타났다`);
  }
  flying() {
    console.log(`${this.name}이 날고 있어!`);
  }
  getName() {
    return this.name;
  }
}
const p1 = new Penguin("펭수");
const p2 = new Penguin("뽀로로");
const p3 = new Penguin("핑구");
const p4 = new Penguin("펭순이");

p1.flying();
p2.flying();
p3.flying();
p4.flying();
