# docker 내 node 설치
- 관련 AWS 공식 문서 [링크](https://docs.aws.amazon.com/ko_kr/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html)
- amazonlinux 이미지를 사용하나, 로컬 테스트 환경은 docker 컨테이너이기 때문에 별도 AWS 설정은 필요하지 않는 조건으로 진행합니다.
- nvm(Node Version Manager)을 통해 node를 설치합니다.
- **node version** : 20.10.0 LTS


## nvm 내려받기
- AWS 공식 문서에 있는 대로, nvm 파일을 내려 받습니다.
    ```bash
    # Profile not found 오류가 뜨는 경우가 있어 touch를 해주도록 합니다.
    touch ~/.bash_profile
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    ```
- 아래의 로그가 노출된다면 설치 성공
    ```bash
    => Close and reopen your terminal to start using nvm or run the following to use it now:

    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
    [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
    ```

- 터미널 재기동
- `nvm -v`로 설치 확인
    - `nvm` 명령어가 인식되지 않는다면, 로그에 기재된 내용이 존재하는지 확인합니다.
        ```bash
        # vi도 가능
        vim ~/.bash_profile

        # 확인할 문구
        export NVM_DIR="$HOME/.nvm"
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
        [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

        # 재시작
        source ~/.bash_profile

        # 재확인
        nvm -v
        ```

## node 설치
```bash
# 20.10.0 LTS 버전으로 설치
nvm install 20.10.0 --lts

# 설치 확인
node -v
```
- 성공 시 : `v20.10.0` 프린팅 됨
- 설치가 불가능한 경우 issue 생성 부탁드립니다.