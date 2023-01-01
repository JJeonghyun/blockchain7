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

// class Penguin {
//   constructor(name) {
//     this.name = name;
//     console.log(`${this.name}이 나타났다`);
//   }
//   flying() {
//     console.log(`${this.name}이 날고 있어!`);
//   }
//   getName() {
//     return this.name;
//   }
// }
// const p1 = new Penguin("펭수");
// const p2 = new Penguin("뽀로로");
// const p3 = new Penguin("핑구");
// const p4 = new Penguin("펭순이");

// p1.flying();
// p2.flying();
// p3.flying();
// p4.flying();

// this 는 함수를 호출 할 때 결정
const car = {
  name: "KIA",
  getName: function () {
    console.log("car getName", this);
  },
};
// car.getName(); // A.b

// const globalCar = car.getName;
// globalCar(); // b를 호출

// const car2 = {
//   name: "hyundai",
//   getName: car.getName,
// };
// car2.getName();
// const bindGetName = car2.getName.bind(car);
// bindGetName();

const btn = document.getElementById("button");
btn.addEventListener("click", car.getName.bind(car));

// 화살표 함수에서의 this의 함수는 속해 있는 곳의 상위 this를 받는다
// const testCar = {
//   name: "benz",
//   getName: function () {
//     console.log("getName", this);
//     const innerFunc = () => {
//       console.log("innerFunc", this);
//     };
//     innerFunc();
//   },
// };

// testCar.getName();

const ageTest = {
  unit: "살",
  ageList: [10, 20, 30],
  getAgeList: function () {
    const result = this.ageList.map((age) => {
      return age + this.unit;
    });
    console.log(result);
  },
};

ageTest.getAgeList();
