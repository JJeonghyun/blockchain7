### jest를 사용해보자

- jest는 TDD 개발에 용이하고
- 테스트 코드를 작성할 수 있다.
- 페이스북에서 만든 Framework

- 개발용으로 설치하기 위해 --save-dev

  - npm i --save-dev jest

- 설치 했으면
  - package.json에서 확인 후
  - 테스트 파일 만들어 놓고 근데 js파일이 아니라 test.js파일로 만들어 주자
  - 테스트 코드를 사용하는 파일이라고 명시한 것
  - script > "test": "jest merkle.test.js" 로 변경해준다
  - npm test
