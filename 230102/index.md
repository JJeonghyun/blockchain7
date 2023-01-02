# yarn build란

- 우리가 작성한 jsx, css, js, html 파일 등등을 하나로 합쳐서 Front에서 인식할 수 있는 파일로 생성해준다.
- Front에서 인식할 수 있는 파일
  - html, css, js, png, jpg, ...
- webpack, babel 라이브러리를 사용하게 된다
  - webpack이란 Javascript 모듈 번들러
    - 파일을 하나로 묶어주는 기능을 한다
    - 난독화, 코드 압축 등을 진행한다
      - 난독화 : 코드를 읽기 어렵게 만든다
  - babel 이란? Javascript 컴파일러이다 (babel 공홈 피셜)
    - 컴파일러 란? 개발자가 작성하는 프로그래밍 언어를 컴퓨터가 읽고 실행할 수 있는 언어(기계어, 011001011 등)로 바꿔준다. 보통 C++, C#, Java 등등
    - 기존의 ES6 등 최신 Javascript 문법을 지원하지 않는 브라우저를 위해 ES5 이하의 문법으로 수정해준다
    - EX) import => require()
- 하나로 완성된 build 폴더 내의 파일들을 Front의 파일로 배포하게 된다
- React로 개발된 프로젝트는 yarn build(npm build) 명령어를 실행해서 build 폴더에 생성되는 파일로 웹페이지를 배포한다
  - AWS EC2 인스턴스에 build 폴더 내에 있는 파일, 폴더를 모두 올려 웹페이지를 출력 할 수 있다

# Putty 입력순서

- sudo apt-get update
- sudo apt-get upgrade -y
  - which services should be restarted ?
    - 여러 프로그램들을 업데이트 했다.
    - 해당 프로그램들이 컴퓨터의 재시작 시 시작할 때 어떤 프로그램으로 확인을 할것인가
    - 그냥 ok눌러도 무관하다
    - 최신 Linux에 추가된 기능
- sudo apt-get install -y apache2 nodejs npm mysql-server
- sudo service apache2 status < apache2 상태확인
- sudo chmod 777 html -R

  - chomod는 권한 설정 프로그램이다
  - 777 모든 사용자, 모든 그룹에 대해서 모든 권한을 부여한다
  - -R 옵션은 하위 모든 폴더/파일에 같은 권한을 적용한다

- sudo mkdir server : mkdir은 폴더 생성
  - sudo chmod 777 server
  - cd server
  - npm install
  - npm start

sudo /usr/bin/mysql -u root -p

- mysql에 접속한다.
- 초기 비밀번호가 없다

- ALTER USER "root"@"localhost" IDENTIFIED WITH mysql_native_password BY "940214";

  - root 계정의 비밀번호를 940214로 수정한다
  - 'localhost' 는 현재 위치를 뜻하며 localhost => EC2 인스턴스 내의 mysql server를 뜻한다
  - exit; = > sudo /usr/bin/mysql -u root -p > 설정한 비번 입력해서 mysql에 정상적으로 접속되는지 확인하자

- show databases; < 현재 db(스키마)를 확인한다
- create database tesla character set utf8mb4 collate utf8mb4_general_ci; < tesla 라는 db(스키마)를 만든다

- apache의 설정을 수정한다
  - cd /etc/apache2/sites-available
    - apache에 대한 설정이 있는 폴더
    - 기본적으로 000-default.conf 파일로 설정
    - sudo vi 000-default.conf
    - vi << 윈도우로 생각하면 메모장
    - <VirtualHost \*:80> < 80 port로 요청이 들어오면 아래의 설정으로 응답한다
      - </VirtualHost> 닫는다
    - #은 주석이다
    - "DocumentRoot"는 Root 폴더를 설정한다
      - 현재는 "/var/www/html"로 설정되어 있다
    - "i"키를 누르면 수정 모드로 변경된다
      - 입력 시에는 무조건 수정모드에서 입력해야한다
      - 수정 모드를 종료하려면 esc를 입력한다
    - vi를 종료하고 싶을 때는 수정 모드가 아닌 상태로 즉 아래에 --INSERT가 아닌 상태로 ":"키를 입력후에 "q","w","!" 등을 입력한다
      - "q"는 종료를 뜻
      - "w"는 저장을 뜻
      - "!"는 강제를 뜻
      - "wq!" 강제로 저장 후에 종료해라 << "!"를 써서 강제하는 이유는 sudo를 사용했어도 저장 시 에 권한이 인정되지 않을 수 도 있다

```
proxyPreserveHost On
	proxyRequests Off
	<Proxy *>
		Order deny,allow
		Allow from all
	</Proxy>
	<Location /api>
		ProxyPass http://localhost:8081/api
		ProxyPassReverse http://localhost:8081/api
	</Location>
```

- sudo a2enmod proxy proxy_http - apache의 proxy 모듈을 활성화한다.

  - apache에서 proxy를 사용하기 위해서 확장 프로그램을 활성화한다

- sudo service apache2 restart

  - apache2를 재시작 해준다
  - 모든 설정이 변경되면 apache2를 다시 실행해서 변경된 설정이 적용되게 해야한다

- React 프로젝트 배포 시 메인 홈페이지 이외의 라우터에서 새로고침 시 404가 출력 되는 이슈 해결 방법

  - 원인 : apache2에서 폴더를 먼저 찾아 연결하기 때문에 index.html(react 프로젝트)에 연결되지 않아 생기는 문제
  - 해결 방법 : apache의 rewrite 모듈을 사용하여 수정한다
  - 순서
    1. 000-default.conf 파일을 수정하자
       - 아래의 내용을 입력하자
       ```
       	<Directory "/var/www/html">
       		AllowOverride All
       	</Directory>
       ```
       - Directory : 해당 폴더/파일에 대한 설정
       - AllowOverride All : 접근 방식에 대한 보안 설정
         - All은 새로운 접근 방식을 설정할 것이다. (덮어쓰기 가능)
    2. .htaccess
       - 해당 파일 위치 : React의 public || React의 build || 서버의 /var/www/html 폴더
         - 추천은 React의 public 폴더 << 해당 폴더는 yarn build시 그대로 build 폴더에 복사 된다. 단, index.html 파일은 수정된다
           - src 폴더 내의 모든 폴더/파일은 난독화 되어 저장된다.
       ```
       	Options -MultiViews
       	RewriteEngine On
       	RewriteCond %{REQUEST_FILENAME} !-f
       	RewriteRule ^ index.html [QSA,L]
       ```
       - Options : 이름 그대로 옵션을 설정한다.
         - MultiViews : 서버의 하위 라우터가 없을 경우 비슷한 파일을 찾아서 응답한다
       - RewriteEngine : rewrite 모듈을 사용할 것인지 설정한다
         - On
       - RewriteCond : rewrite 모듈 적용에 대한 조건을 설정한다
         - REQUEST_FILENAME : 서버 설정 상의 Root 폴더 (/var/www/html)
         - -f : 파일이 있는지 확인한다. << 없으면 모듈을 적용한다.
       - RewriteRule : 모듈 적용 규칙
         -^ index.html : 정규표현식으로 적혀있으면 라우터를 index.html로 적용, 수정 한다
         - QSA : queryString을 붙이라는 설정
         - L : 이후 다른 설정을 무시한다
       - 추천은 그냥 외우거나 그때그때 찾자
    3. sudo a2enmod rewrite
       - rewrite 모듈을 활성화한다.

- PM2를 사용해서 Node.js의 Express 서버를 백그라운드에서 실행시키자.

  - PM2는 Node.js 프로세스를 관리하는 라이브러리이다
  - 간단하게 설명하면 백그라운드에서 실행시켜두고 멈추고 등등 할 수 있다
  - 순서
    1. sudo npm i -g pm2
    2. sudo pm2 start npm -- start < 경로는 서버의 경로(/var/www/server)에서 해야한다
    3. sudo pm2 list << 실행중인 Node.js 프로그램을 확인한다
    4. sudo pm2 stop npm << npm을 멈춘다

- ubuntu 에서는 apache2이지만 Linux에서는 httpd라고 한다
  - 프로그램 설정이 살짝 다르다. 단 둘 다 apache이다
