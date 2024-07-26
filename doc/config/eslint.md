# ES Linst 설정
- 해당 프로젝트는 기본적인 코드 포맷팅을 위해 ES Lint를 설정하였습니다.
- 파일 저장 시 ES Lint의 포맷이 적용되는 VS Code ES Lint (from MS) 확장 플러그인 설치 또한 권장합니다.

## npx init
- 초기 설정은 `npx`를 통해 설정해 주었습니다.
    ```shell
    npx eslint --init
    ```
- `@eslint/create-config`을 통하여 설정한 옵션 :
    ```shell
    √ How would you like to use ESLint? # ES Lint의 사용 목적
    To check syntax only
    > To check syntax find problems # problems

    √ What type of modules does your project use? # 어떤 모듈을 사용하는지
    > JavaScript modules (import/export) # esm
    CommonJS (require/exports)
    None of these

    √ Which framework does your project use? # 프로젝트에서 어떤 프레임워크를 사용하는지
    React
    Vue.js
    > None of these # none : react나 vue를 사용하지 않는 모든 경우는 여기 속합니다.

    √ Does your project use TypeScript? # ts 사용 여부
    No
    > Yes # typescript

    √ Where does your code run? # 코드 실행은 어디서?
    √ Browser # browser
    √ Node # node (space bar를 이용해 선택 가능)

    # 의존성 있는 모듈들 설치 여부
    eslint@9.x, globals, @eslint/js, typescript-eslint
    √ Would you like to install them now? > Yes
    
    # 패키지 매니저는 어떤걸 사용하는지
    √ Which package manager do you want to use?
    > npm
    yarn
    pnpm
    bun
    ```

- 초기화한 eslint 적용을 위해 npm 모듈을 동기화 시켜줍니다.
    ```shell
    # eslint init 시 나온 경고 : global로 설치한 eslint와 프로젝트 디렉토리에 설치된 eslint 버전이 상이할 경우 해당 문제가 발생할 수 있습니다.
    You may need to use '--force' when installing, or add the following to your package.json:
        "overrides": { "eslint": "^9.7.0" }
    
    # 경고창에 나온 버전 다운로드
    npm i -D eslint@9.7.0
    ```
    - 찝찝하다면 uninstall 후 다운로드 해도 됩니다.
    - 해당 프로젝트는 설정 및 권장 버전 확인 후 uninstall 후 모듈 재설치, 재설정을 진행했습니다.

## 추가 설정 : 원활한 작업환경을 위해
- npx eslint로 기본적인 초기 설정을 완료했다면, `eslint.config.mjs` 가 생성됩니다.
- 아래의 설정을 추가해줍니다.
    ```javascript
    /* import 부 : 추가 import가 없어 생략합니다. */
    export default [
        { files: ["**/*.{js,mjs,cjs,ts}"] },
        { languageOptions: { globals: { .. globals.browser, ...globals.node } } },
        pluginJs.configs.recommended,
        ...tseslint.configs.recommended,
        {
            rules: {
                "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
                "@typescript-eslint/no-explicit-any": "off",
                "no-unused-vars": "off", // ts에서 underscore 처리를 했지만, js 옵션은 별도입니다. warn 설정 시 원활한 실행이 불가능 합니다.
            }
        }
    ]
    ```

- ***주의사항*** : `rules` 옵션이 `...tseslint.configs.recommended`보다 ***상단에 설정될 경우 우선순위가 낮아져*** `no-expclit-any` 설정이 의도대로 적용되지 않을 수 있으니, **반드시 하단**에 기재해 주시길 바랍니다.

### 설정 설명
- `@typescript-eslint/no-unused-vars: Array`
    - `"warn"` : 사용하지 않는 변수는 WARN 등급으로 띄웁니다.
    - `{ "argsIgnorePattern": "^_" }` : 변수 앞에 underscore(_)가 붙은 경우를 제외합니다.
    - 활용 예시:
        ```javascript
        // src/server.ts
        /* ===== [error handler] ===== */
        // for 404 errors
        app.use((req: Request, res: Response, _next: NextFunction) => {
            /* 내부 로직 생략 */
            // 로직 내에서 NextFunction 변수인 next는 사용하지 않습니다.
        });
        ```
- `@typescript-eslint/no-explicit-any`
    - `off`: typescript의 타입 지정 시 `any`를 허용합니다. `warn` 이상 등급 지정 시 원활한 실행이 되지 않을 수 있습니다.
- `no-unused-vars`
    - ES Lint가 js 파일을 검사하는 경우의 옵션으로, 사용하지 않는 변수가 있는지 검사합니다.
    - **typescript**에 대한 ES Lint 설정과 **별개**로 작동하는 옵션이므로, **underscore(_)**와 함께 변수나 argument를 선언하여도 **javascript에서는 ignore되지 않**습니다.
    - `off` : underscore 처리한 변수들이 필터링되지 않도록 옵션을 아예 배제시킵니다.


***


## VS Code extension : ES Lint

> **extension 설치 권장 이유**
> 아래와 같은 이유로 VS Code 사용시 extension 설치를 권장합니다.
> - 일일히 `npm run lint`를 해야하는 번거로움
> - 코드 편집기 화면에서 어떤 syntax가 오류를 초래하는지 예측 가능


- lint와 관련된 여러가지 extension이 있습니다만, 그 중 Microsoft가 공식 출시한 ESLint를 설치합니다.
    ![MS:ESLint](/doc/images/eslint00.png)
- extension을 설치하여도 **setting값을 조정하지 않으면 ESLint가 적용되지 않으므로** 이하의 설명에 따라 설정해 줍니다.

### 기본 설정 방법 : e.g. 파일 저장 시 ES Lint 포맷 적용
1. open setting.json file(VS Code config file)
    ![Edit in settings.json](/doc/images/eslint01.png)
2. add settings below: VS code 에디터를 통한 파일 저장시 lint가 적용되도록 하는 설정입니다.
3. default Formatter 설정도 가능하나, 예측 가능한 포맷팅을 위해 별도 설정을 하지 않았습니다.
    ```json
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "editor.formatOnSave": true,
    ```
- 적용 예시 :
    ![e.g.settings.json](/doc/images/eslint02.png)
