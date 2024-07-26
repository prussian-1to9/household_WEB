# proj_node branch
- branch for javascript based project.

## 사용 스택
- node js (npm runtime) : 20.10.0
    - type script
- mySQL

## 코드 규칙 및 준수사항
- 기본적으로 강제성을 위해 ts와 ES Lint를 사용하기 때문에 **코드 스타일 관련 규칙은 기재하지 않**습니다.
- **`/src/api/**/controllers/*.ts`** : 비즈니스 로직은 `services/`에 작성되도록 합니다.
- **`server.ts`의 로직이 길어질 경우** : express 설정 부분을 `app.ts`로 분리시켜, 핸들링이 분리될 수 있도록 해주세요.
- **주석 작성** : 비즈니스 로직이 아닌 사항이라면 **최대한 doc 파일에 개발문서 작성**을 부탁드립니다.

## npm install
- global 설치 목록 : **로컬 컴퓨터에 해당 버전or명령어로 설치**해 주어야 합니다.
- publication, development 설치 목록 : 각각 배포/개발용 설치 모듈들로, **git clone 후 `npm i`로 일괄 설치 가능**합니다.
    ```shell
    # 축약버전
    iCOOP_BE_API> npm i
    # 같은 명령어
    iCOOP_BE_API > npm install
    ```
- 에러로그 없이 `/node_modules` 디렉토리가 생성되었다면 설치 완료입니다.


### global
- npx : for type script init (**git clone을 한 경우 선택사항**입니다.)
    ```shell
    npm install -g npx
    ```

### Pub
- dotenv : 환경변수 (.env.dev, .env)
- express : request, response 핸들링에 사용합니다.
    - cors : CORS 설정용 **모듈이며, express와 같이** 사용합니다.
- mysql

### Dev
- nodemon : 개발용 hot loader
- typescript
    - typescript 내 절대경로 설정 관련 (참고 문서는 [여기](/doc/config/typescript.md))
        - tsc-alias, tsconfig-paths : tsconfig.paths.json 파일 인식을 위함
        - typescript-transform-paths : js 컴파일 시를 위함
    - ts-node-dev : ts 실행을 위함 (컴파일X)
        - ts-node와 node-dev를 합친 모듈
    - modules for type declaration
        - @types/cors
        - @types/express

# 파일구조
- DB connection과 라우터의 경우, 기존 파일 구조가 깊은 점을 고려하여 최대한 분리시켰습니다.
- .ts 파일이 컴파일되는 `/dist` 디렉토리의 경우, **`/src` 와 동일하여 생략**하였습니다.
```shell
HOUSEHOLD_WEB/
│
├── dist/           # [git ignored] .ts 파일 컴파일 시 js파일이 저장됩니다. (파일구조는 /src와 동일)
├── doc/            # 개발문서를 작성합니다.
├── node-modules/   # [git ignored] npm install 시 설치한 패키지들이 저장됩니다.
│
├── src/        # .ts 파일을 작성하는 디렉토리입니다.
│   ├── api/   # API에 대한 로직이 작성됩니다.
│   │   │
│   │   ├── v1/                  # 초기 버전 API는 여기에 작성합니다.
│   │   │   ├── controllers/    # Request에 대한 컨트롤러로, 비즈니스 로직이 들어가지 않습니다.
│   │   │   ├── middlewares/    # 미들웨어를 작성합니다.
│   │   │   ├── models/         # DB 모델을 작성합니다.
│   │   │   ├── routes/         # 라우팅을 위한 디렉토리입니다.
│   │   │   └── services/       # 비즈니스 로직을 작성합니다.
│   │   │
│   │   └── v2/ # 이후 버전으로 마이그레이션 시 해당 폴더에 작성 바랍니다.
│   │
│   ├── config/     # 서버 설정과 변수 등을 저장하여, 대부분 server.ts에서 import 해 사용합니다.
│   │   ├── connetions/         # DB Connection의 구현체를 작성합니다.
│   │   │
│   │   ├── cors.ts     # cors 설정 파일
│   │   ├── dotenv.ts   # dotenv(프로젝트 내 환경변수) 설정 파일
│   │   │
│   │   ├── MSSQL.ts    # MS SQL (SQL Server) connection에 대한 추상 클래스
│   │   ├── MySQL.ts    # MySQL connection에 대한 추상 클래스
│   │   └── Oracle.ts   # Oracle connection에 대한 추상 클래스
│   │
│   ├── lib/            # 라이브러리/유틸 파일 작성용 디렉토리 (uncommited)
│   ├── logs/           # logging용 디렉토리 (uncommited)
│   └── server.ts       # API 서버의 entry point입니다.
│
├── test/                # 테스트용 디렉토리 (uncommited)
│   ├── integration/    # Integration tests
│   └── unit/           # Unit tests
│
├── .env.dev        # [git ignored] 개발용 환경변수를 설정합니다.
├── .env.prod       # [git ignored] 실서버용 환경변수를 설정합니다.
├── .gitignore
├── eslint.config.mjs   # ES Lint 설정 파일
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json       # 타입스크립트 기본 설정 파일
└── tsconfig.paths.json # [git ignored] 타입스크립트 경로 관련 설정 파일
```


***


# Recommandation : VS Code extension for Development
- **postman** : for API testing
    - CORS 설정으로 인해 request header의 origin 값을 `http://localhost` 또는 `http://127.0.0.1` 설정을 해 주어야 원활한 테스트가 가능합니다.
- **★★★ ESLint** : for code format
    - 해당 서버는 별도 ES Lint 설정이 없으므로, 깔끔한 코드 포맷팅을 원한다면 설정 바랍니다.
- **snipets 관련**
    - Express Snippets : node js 모듈 express에 대한 스니펫을 지원합니다.
- **Utilities**
    - **★ Git graph**
    - **★ GitHub Copliot**
        - **★ GitHub Copliot Chat**
    - Bracket Highlighter
    - indent-rainbow
    - IntelliCode
        - IntelliCode API Usage Examples
    - Markdown Preview Enhanced

***

# 참고자료
- dotenv 설정 : https://charlie-choi.tistory.com/229