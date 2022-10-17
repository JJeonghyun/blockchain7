console.log("testing");

// 서버(server)는 외부에서 접속하는 컴퓨터이다
// port : 일종의 문이다
// http : 80port를 사용
// https : 443port를 사용
// SSH : 22port를 사용
// FTP : 21port를 사용
// DB(maria) : 3306 port를 사용
// 서버는 보통 3가지로 나뉜다 (종류가 아니라 구분)
// Web Server, Application Server, Database Server
// Web Server는 HTML 파일 주는 서버 (Front End)
// Application Server는 데이터를 주는 서버 (Back End)
// Database Server는 데이터를 저장하는 서버(DB)
// WAS : Web Application Server ==> Web Server + Application Server, 혼자서 HTML파일도 주고 데이터도 주는 서버

// Node.js
// JavaScript를 브라우저 환경이 아닌 OS환경에서 실행하기 위한 런타임 환경
// 싱글 스레드 / 이벤트 기반 / 논 블로킹 I/O
// 이벤트 기반 : 이벤트 루프가 있어 정의된 이벤트에 대해서 코드를 실행한다
// 싱글 스레드
//  프로세스 랑 스레드
//      프로세스 : 프로그램 단위 < 우리가 실행한 프로그램에 대한 것? 정보?
//      스레드 : CPU의 작업 단위 < 프로세스가 실행하기 위해서 CPU에게 받는? 할당 받는 영역
//      프로세스가 실행되면 스레드를 받아 -> 실행이 완료되면 스레드르 CPU에게 반환한다
//      싱글 스레드라서 한번에 여러 작업을 실행하지 못한다
//      크롬에서 탭을 나누면 스레드는 그만큼 최소 하나씩 가져간다
//      JavaScript는 기본적으로 싱글 스레드인데, 다만 멀티 스레드 기능을 사용할 수 있게 해주는 라이브러리가 있다

// 논 블로킹 I/O
// I/0 -> In Out
// 논 블로킹 ? -> 동기/비동기, 블로킹 / 논-블로킹
// 동기 : 실행되는 작업이 서로 연관을 가진다 -> 하나가 실행이 완료된 후에 그 반환값을 사용해 다른 작업을 실행한다
const a = 1;
const b = 2;
function add(a, b) {
  return a + b;
}
console.log(add(a, b));
// console 객체의 log 메서드를 실행하기 위해 add 함수를 실행한다
// add가 끝나야 console log 메서드를 실행한다
// 전형적인 동기 방식

// 비동기 : 작업을 실행하는데 별 관계가 없다 -> 함께 실행 될 수 있다
//  이벤트 함수들

setTimeout(() => {
  console.log(b);
}, 1000);
console.log(a);

// 블로킹 / 논-블로킹
// 블로킹 : 동기 작업은 이전 작업을 기다려야 한다 -> 이전 작업이 끝날 때 까지 멈춰둬야 한다
// 논-블로킹 : 이전 작업과 무관하게 작업이 진행된다 -> 즉, 멈추지 않는다

// 블로킹과 동기 방식으로 계속 코드를 써왔다

// 싱글 스레드는 하나의 작업만을 진행하는데 어떻게 논 블로킹이 성립되는가 ?
// 답은 시분할(라운드 로빈)
// 시분할 : 시(간)분할, 코드를 일정 시간으로 짤라서 실행한다
// 여러 작업을 할 때 각 코드에 대해서 일정한 시간 동안 진행 후 다른 코드를 진행한다. 한번 다 돌린 후에 다시 이어서 진행한다

// REST API Server, Socket Server
