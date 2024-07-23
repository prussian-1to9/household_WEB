# Typescript 설정

## 설치 및 프로젝트 설정
- typescript는 js파일로 컴파일 후 사용되기 때문에, 반드시 **개발용으로 설치**하여야 합니다. **(`npm i`로 일괄 install 하였을 경우 생략 가능)**
```shell
npm i -D typescript # 설치
npx tsc --init # tsconfig 파일 생성
```

## tsconfig.json 설정
- 타입스크립트 작동 방식에 대해 설정하는 파일입니다.
- 설정 별 의미에 대해 주석으로 설명을 첨부하였습니다. 로컬환경 구축 시 참고 부탁드립니다.
- `extends`를 이용하여 절대경로 설정은 분리해 주었으니, 아래에 설명할 [tsconfig-paths 설정](#tsconfig-paths-설정)을 참고 바랍니다.
- 컴파일 되는 `outDir` 속성은 `/dist` 디렉토리로 지정하였습니다. 이에 따라, 아래와 같이 준수 바랍니다.
    - `/src/*` : **`.ts` 파일만** 위치
    - `/dist/*` : 컴파일 된 **`.js` 파일만** 위치

### tsconfig-paths 설정
- .ts 파일 내에서 사용할 절대경로에 대한 설정입니다.
- 초기설정 : 아래와 같이 사용하고, 이후 확장성을 고려하여 tsconfig.paths.json으로 파일을 분리하였습니다.
    ```json
    {
    "ts-node": { // require 미설정시 오류 발생합니다. 꼭 기재해주세요. (node 20)
        "require": ["tsconfig-paths/register", "typescript-transform-paths"]
    },
    "compilerOptions": {
        "baseUrl": "./", // baseUrl에 설정한 경로대로 절대경로 지정 : project 파일 root 경로
        "paths": {       // 매핑할 alias - 실제 경로 매핑
        "@/*": ["src/*"],
        "@_config/*": ["src/config/*"],
        "@_routes/*": ["src/routes/*"],
        },
        "plugins": [
        { "transform": "typescript-transform-paths" }
        ]
    }
    }
    ```


#### 주의점 : package.json 설정
- 별칭에 대한 설정 : 컴파일되는 js 파일에 대한 `_mouduleAliases` 설정이 필요합니다.
- script 설정 : typescript 사용과, 절대경로 및 별칭 사용을 위해 `scripts` 값 조정이 필요합니다.
- 초기설정 : 위의 tsconfig.paths.json에 따른 pacakge.json 설정입니다.
```json
{
    "scripts": { // 최소한의 옵션만 기재하였습니다.
        "start": "node dist/server.js",
        "dev": "nodemon --exec ts-node -r tsconfig-paths/register src/server.ts",
        "build": "npx ttsc -p ./tsconfig.json",
    },
    "_moduleAliases": {
        "@": "./dist",
        "@_config": "./dist/config",
        "@_routes": "./dist/routes"
    },
}
```