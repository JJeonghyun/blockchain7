// ((p0.value == comSelect) || (p1.value == comSelect) || (p2.value == comSelect))

//     ?

//     (

//         alert("비겼습니다");
//         console.log("비겼다");
//         document.getElementById("draw").style.textShadow = "2px 3px 3px blue";
//         player1 = 0;

//     )

//     :

//     (

//         ((p0.value == 0) && (comSelect==1)) || ((p1.value == 1) && (comSelect==2)) || ((p2.value ==2) && (comSelect==0))
//                 ?
//                  (
//                     alert("졌습니다");
//                     console.log("졌다");
//                     document.getElementById("lose").style.textShadow = "2px 3px 3px blue";
//                     player1 = 0;

//                 )

//                 :
//                 (
//                     document.getElementById("win").style.textShadow = "2px 3px 3px yellow";
//                     document.getElementById("winwin").style.textShadow = "2px 3px 3px yellow";
//                     money += coin * 100;
//                     console.log(money);
//                     console.log(`코인${coin * 100}원 얻었어`);
//                     moneyElem.innerHTML = money;
//                     console.log("이겼다");
//                     player1 = 0;
//                 )

//     )

if (p0.value == comSelect || p1.value == comSelect || p2.value == comSelect) {
  alert("비겼습니다");
  console.log("비겼다");
  document.getElementById("draw").style.textShadow = "2px 3px 3px blue";
  player1 = 0;
} else if (
  (p0.value == 0 && comSelect == 1) ||
  (p1.value == 1 && comSelect == 2) ||
  (p2.value == 2 && comSelect == 0)
) {
  alert("졌습니다");
  console.log("졌다");
  document.getElementById("lose").style.textShadow = "2px 3px 3px blue";
  player1 = 0;
} else {
  document.getElementById("win").style.textShadow = "2px 3px 3px yellow";
  document.getElementById("winwin").style.textShadow = "2px 3px 3px yellow";
  money += coin * 100;
  console.log(money);
  console.log(`코인${coin * 100}원 얻었어`);
  moneyElem.innerHTML = money;
  console.log("이겼다");
  player1 = 0;
}
