let koreaFood;
let a, b, c;

while (confirm("음식 알고리즘을 시작하시겠습니까 ?")) {
  const inputData = prompt("한식/중식/일식/양식 중 원하는 것을 입력하세요 ");

  switch (inputData) {
    case "한식":
      console.log(inputData);
      a = prompt("국물이 있는 메뉴를 원하십니까? (O/X)?");
      if (a == "O" || a == "o") {
        console.log("한식 중에 국물이 포함된 메뉴를 선택 !");
        confirm("한식 중에 국물이 포함된 메뉴를 선택 !");
        b = prompt("맑은 국 음식이 좋습니까? (O/X)");
        if (b == "O" || b == "o") {
          console.log("한식이며 맑은 국물인 음식인걸 선택 !");
          confirm("한식이며 맑은 국물인 음식인걸 선택 !");
          c = prompt("밥과 면 당신의 선택은 ?");
          if (c == "밥") {
            console.log("한식에서 맑은 국물이 있는 밥요리를 선택 !");
            console.log("설렁탕, 곰탕 등 당첨 :)");
            confirm("한식에서 맑은 국물이 있는 밥요리를 선택 !");
          } else if (c == "면") {
            console.log("한식에서 맑은 국물이 있는 면요리를 선택 !");
            console.log("칼국수 나 먹으세요");
            confirm("한식에서 맑은 국물이 있는 면요리를 선택 !");
          } else {
            confirm("올바른 입력 값이 아닙니다.");
          }
        } else if (b == "X" || b == "x") {
          console.log("한식이며 맑은 국물이 포함되지 않은 음식을 선택 !");
          confirm("한식이며 맑은 국물이 포함되지 않은 음식을 선택 !");
          c = prompt("밥과 면 당신의 선택 ?");
          if (c == "밥") {
            console.log("한식에서 맑은 국물이 아니면서 밥 요리 선택 !");
            confirm("한식에서 맑은 국물이 아니면서 밥 요리 선택 !");
            console.log("김치찌개, 된장찌개, 부대찌개 등");
            confirm("김치찌개, 된장찌개, 부대찌개 등");
          } else if (c == "면") {
            console.log("한식에서 맑은 국물이 아니면서 면요리 선택 !");
            console.log("냉면, 열무국수");
            confirm("한식에서 맑은 국물이 아니면서 면요리 선택 !");
            confirm("냉면, 열무국수");
          } else {
            confirm("올바른 입력 값이 아닙니다.");
          }
        } else {
          confirm(" 올바른 입력 값이 아닙니다.");
        }
      } else if (a == "X" || a == "x") {
        console.log("한식 중에 국이 없는 메뉴를 선택 !");
        confirm("한식 중에 국이 없는 메뉴를 선택 !");
        b = prompt("볶음요리가 좋습니까? 아니면 조림요리가 좋습니까 ?");
        if (b == "볶음요리") {
          console.log("한식 중 볶음요리를 선택 !");
          confirm("한식 중 볶음요리를 선택 !");
          c = prompt("육류가 포함된 볶음요리가 좋습니까 ?(O/X)");
          if (c == "O" || c == "o") {
            console.log("육류가 포함된 볶음요리를 선택 !");
            console.log("제육볶음, 낙지볶음, 닭볶음 ");
            confirm("육류가 포함된 볶음요리를 선택 !");
            confirm("제육볶음, 낙지볶음, 닭볶음 ");
          } else if (c == "X" || c == "x") {
            console.log("그 외 볶음요리를 선택 !");
            console.log(
              "가지볶음, 달걀부추볶음, 당근연근볶음, 오이버섯볶음, 애호박 새우젓 볶음 "
            );
            confirm("그 외 볶음요리를 선택 !");
            confirm(
              "가지볶음, 달걀부추볶음, 당근연근볶음, 오이버섯볶음, 애호박 새우젓 볶음 "
            );
          } else {
            confirm("올바른 입력 값이 아닙니다.");
          }
        } else if (b == "조림요리") {
          console.log("한식 중 조림요리를 선택 !");
          confirm("한식 중 조림요리를 선택 !");
          c = prompt("육류가 포함된 조림요리가 좋습니까 ?(O/X)");
          if (c == "O" || c == "o") {
            console.log("육류가 포함된 조림요리를 선택 !");
            console.log(
              "삼겹살무조림, 쇠고기장조림, 오향돼지고기장조림, 자반고등어조림, 조기조림, 애호박 닭고기 조림"
            );
            confirm("육류가 포함된 조림요리를 선택 !");
            confirm(
              "삼겹살무조림, 쇠고기장조림, 오향돼지고기장조림, 자반고등어조림, 조기조림, 애호박 닭고기 조림"
            );
          } else if (c == "X" || c == "x") {
            console.log("그 외 조림요리를 선택 !");
            console.log(
              "생땅콩조림, 알감자조림, 연근조림, 우엉조림, 토란조림, 표고버섯된장조림"
            );
            confirm("그 외 조림요리를 선택 !");
            confirm(
              "생땅콩조림, 알감자조림, 연근조림, 우엉조림, 토란조림, 표고버섯된장조림"
            );
          } else {
            confirm("올바른 입력 값이 아닙니다.");
          }
        } else {
          confirm(" 올바른 입력 값이 아닙니다.");
        }
      } else {
        confirm(" 올바른 입력 값이 아닙니다.");
      }
      break;
    case "중식":
      console.log(inputData);
      a = prompt("식사류 입니까 ? 아니면 안주류 입니까?");
      if (a == "식사류") {
        console.log("중식에서 식사류를 선택 !");
        confirm("중식에서 식사류를 선택 !");
        b = prompt("면요리 입니까 ? 밥요리 입니까");
        if (b == "면") {
          console.log("중식에 면요리 식사를 선택 !");
          confirm("중식에 면요리 식사를 선택 !");
          c = prompt("국물 O / X");
          if (c == "O" || c == "o") {
            console.log("중식 중 면으로 된 국물 있는 식사류 선택 !");
            console.log("짬뽕, 울면, 중국냉면 등");
            confirm("중식 중 면으로 된 국물 있는 식사류 선택 !");
            confirm("짬뽕, 울면, 중국냉면 등");
          } else if (c == "X" || c == "x") {
            console.log("중식 중 면으로 된 국물이 없는 식사류 선택 !");
            console.log("짜장면, 간짜장, 볶음면, 볶음짬뽕 등");
            confirm("중식 중 면으로 된 국물이 없는 식사류 선택 !");
            confirm("짜장면, 간짜장, 볶음면, 볶음짬뽕 등");
          } else {
            confirm("올바른 입력 값이 아닙니다.");
          }
        } else if (b == "밥") {
          console.log("중식 중 밥요리 식사를 선택 !");
          confirm("중식 중 밥요리 식사를 선택 !");
          c = prompt("짜장 소스가 있었으면 좋겠습니까 ? (O / X)");
          if (c == "O" || c == "o") {
            console.log("중식 중 짜장소스가 곁들여 나오는 밥 식사류 선택 !");
            console.log("짜장밥, 볶음밥, 중화비빔밥, 잡채밥 등");
            confirm("중식 중 짜장소스가 곁들여 나오는 밥 식사류 선택 !");
            confirm("짜장밥, 볶음밥, 중화비빔밥, 잡채밥 등");
          } else if (c == "X" || c == "x") {
            console.log(
              "중식 중 짜장소스는 따로 제공 되지 않는 밥 식사류 선택 !"
            );
            console.log(
              "짬뽕밥, 송이덮밥, 마파두부덮밥, 잡탕밥, 중화식제육볶음 덮밥"
            );
            confirm("중식 중 짜장소스는 따로 제공 되지 않는 밥 식사류 선택 !");
            confirm(
              "짬뽕밥, 송이덮밥, 마파두부덮밥, 잡탕밥, 중화식제육볶음 덮밥"
            );
          } else {
            confirm("올바른 입력 값이 아닙니다.");
          }
        } else {
          confirm(" 올바른 입력 값이 아닙니다.");
        }
      } else if (a == "안주류") {
        console.log("중식에서 안주류 메뉴 선택 !");
        confirm("중식에서 안주류 메뉴 선택 !");
        b = prompt("안주류 중 육류가 포함 되어 있으면 좋겠습니까 ? (O / X)");
        if (b == "O" || b == "o") {
          console.log("육류가 포함된 안주류를 선택 !");
          confirm("육류가 포함된 안주류를 선택 !");
          c = prompt("돼지고기 or 닭고기");
          if (c == "돼지고기") {
            console.log("돼지고기류 안주 선택 !");
            console.log(
              "탕수육, 라조육, 깐풍육, 유린육, 경장육사, 군만두, 물만두, 왕만두"
            );
            confirm("돼지고기류 안주 선택 !");
            confirm(
              "탕수육, 라조육, 깐풍육, 유린육, 경장육사, 군만두, 물만두, 왕만두"
            );
          } else if (c == "닭고기") {
            console.log("닭고기류 안주 선택 !");
            console.log("깐풍기, 유린기, 라조기");
            confirm("닭고기류 안주 선택 !");
            confirm("깐풍기, 유린기, 라조기");
          } else {
            confirm("올바른 입력 값이 아닙니다.");
          }
        } else if (b == "X" || b == "x") {
          console.log("육류가 포함되지 않은 안주류를 선택 !");
          confirm("육류가 포함되지 않은 안주류를 선택 !");
          c = prompt(
            "볶음류 안주 와 해산물류 안주 중 무엇이 좋습니까? ex)볶음류"
          );
          if (c == "볶음류") {
            console.log("육류가 없는 볶음류 안주를 선택 !");
            console.log("팔보채, 양장피, 유산슬, 잡채, 고추잡채");
            confirm("육류가 없는 볶음류 안주를 선택 !");
            confirm("팔보채, 양장피, 유산슬, 잡채, 고추잡채");
          } else if (c == "해산물류") {
            console.log("해산물로 이루어진 안주류 선택 !");
            console.log("해삼탕, 잡탕, 누룽지탕, 깐쇼새우, 크림새우");
            confirm("해산물로 이루어진 안주류 선택 !");
            confirm("해삼탕, 잡탕, 누룽지탕, 깐쇼새우, 크림새우");
          } else {
            confirm("올바른 입력 값이 아닙니다.");
          }
        } else {
          confirm(" 올바른 입력 값이 아닙니다.");
        }
      } else {
        confirm(" 올바른 입력 값이 아닙니다.");
      }
      break;
    case "양식":
      console.log(inputData);
      a = prompt(`
    1. 애피타이저
    2. 수프
    3. 생선 요리
    4. 육류 요리
    5. 달걀 요리
    6. 기타`);
      switch (a) {
        case "1":
          console.log("식욕을 돋구기 위한 식사 전 서양음식");
          console.log("신선한 채소, 과즙, 카나페, 주스 등");
          confirm("식욕을 돋구기 위한 식사 전 서양음식");
          confirm("신선한 채소, 과즙, 카나페, 주스 등");
          break;
        case "2":
          console.log(
            "맑은 수프인 콩소메와 국물이 탁하고 걸죽한 포타지가 있는 수프"
          );
          confirm(
            "맑은 수프인 콩소메와 국물이 탁하고 걸죽한 포타지가 있는 수프"
          );
          break;
        case "3":
          console.log(
            "주된 음식으로 이용되기도 하나 정찬에서는 육류 요리 전에 내는 양식인 생선요리 !"
          );
          confirm(
            "주된 음식으로 이용되기도 하나 정찬에서는 육류 요리 전에 내는 양식인 생선요리 !"
          );
          break;
        case "4":
          console.log(
            "가장 주된 음식으로 쇠고기, 돼지고기, 양고기 등을 사용하는 육류 요리 !"
          );
          confirm(
            "가장 주된 음식으로 쇠고기, 돼지고기, 양고기 등을 사용하는 육류 요리 !"
          );
          break;
        case "5":
          console.log(
            "아침에 가장 잘 어울리는 서양 식사 중 하나인 달걀 요리 !"
          );
          confirm("아침에 가장 잘 어울리는 서양 식사 중 하나인 달걀 요리 !");
          break;
        case "6":
          console.log("육류와 잘 어울리는 채소요리, 샐러드 그리고 후식");
          confirm("육류와 잘 어울리는 채소요리, 샐러드 그리고 후식");
          break;
        default:
          confirm("올바른 입력 값이 아닙니다");
      }

      break;
    case "일식":
      console.log(inputData);
      a = prompt("밥요리 였으며 좋겠습니까 ? (O / X)");
      if (a == "O" || a == "o") {
        console.log("일식 중 밥요리를 선택 !");
        confirm("일식 중 밥요리를 선택 !");
        b = prompt(`
      1. 주먹밥 처럼 나오는 '오니기리'
      2. 높은 그릇에 덮밥처럼 '돈부리'
      3. 재료를 다 넣고 끓이는 솥밥 '카마메시'
      4. 쌀밥에 녹차를 부어 먹는 '오차즈케'
      5. 밥에 고구마, 밤, 채소를 넣고 지은 밥인 '카테메시'
      `);
        switch (b) {
          case "1":
            console.log("오니기리 선택 !");
            confirm("오니기리 선택 !");
            break;
          case "2":
            console.log("돈부리 선택 !");
            confirm("돈부리 선택 !");
            break;
          case "3":
            console.log("카마메시 선택 !");
            confirm("카마메시 선택 !");
            break;
          case "4":
            console.log("오차즈케 선택 !");
            confirm("오차즈케 선택 !");
            break;
          case "5":
            console.log("카테메시 선택 !");
            confirm("카테메시 선택 !");
            break;
          default:
            confirm("올바른 선택지가 아닙니다");
        }
      } else if (a == "X" || a == "x") {
        console.log("일식에서 면요리 선택 !");
        confirm("일식에서 면요리 선택 !");
        b = prompt("면 요리 중 국물과 관련이 있었으면 좋겠습니까 ?");
        if (b == "O" || b == "o") {
          console.log("국물과 관련 있는 면요리를 선택 !");
          confirm("국물과 관련 있는 면요리를 선택 !");
          c = prompt("국물에 면이 담겨 있으면 좋겠습니까 ?");
          if (c == "O" || c == "o") {
            console.log("일식 면요리 중 국물에 담겨 있는 요리 선택 !");
            console.log("일식 우동, 라멘 등");
            confirm("일식 면요리 중 국물에 담겨 있는 요리 선택 !");
            confirm("일식 우동, 라멘 등");
          } else if (c == "X" || c == "x") {
            console.log(
              "일식 면요리 중 국물과 관련 있지만 담겨져 있지 않는 요리 선택 !"
            );
            confirm(
              "일식 면요리 중 국물과 관련 있지만 담겨져 있지 않는 요리 선택 !"
            );
            console.log("소바, 나가시소멘");
            confirm("소바, 나가시소멘");
          } else {
            confirm("올바른 입력 값이 아닙니다.");
          }
        } else if (b == "X" || b == "x") {
          console.log("면 요리 중 국물과 관련이 없는 요리 선택 !");
          console.log("아끼우동, 야끼소바");
          confirm("면 요리 중 국물과 관련이 없는 요리 선택 !");
          confirm("아끼우동, 야끼소바");
        } else {
          confirm(" 올바른 입력 값이 아닙니다.");
        }
      } else {
        confirm(" 올바른 입력 값이 아닙니다.");
      }
      break;
    default:
      confirm("올바른 입력 값이 아닙니다.");
  }
  if (confirm("다시 하시겠습니까 ?")) {
    continue;
  } else {
    break;
  }
}
