# docker 환경 구축
- 관련 AWS 공식 문서 [링크](https://docs.aws.amazon.com/ko_kr/AmazonECR/latest/userguide/amazon_linux_container_image.html)
- docker는 기본적으로 이미지를 기반하여 컨테이너를 생성합니다.
- from DockerHub : `amazonlinux` 컨테이너 이미지 가져오기
    - Amazon ECR Public을 이용하여 `public.ecr.aws/amazonlinux/amazonlinux:latest`도 가능하긴 하나, 제대로된 사용을 위해서는 프라이빗 레지스트리 인증 등의 **별도 절차가 필요**하기 때문에 비교적 간단한 DockerHub 사용을 권장합니다.
    ```shell
    docker pull amazonlinux
    ```

## 컨테이너 실행하기
```shell
# 초기 : 여러 옵션 + BASE 이미지 + pseudo로 초기 연결할 디렉토리 지정
docker run -it -p 8888:3000 --name BE_API_TEST amazonlinux /bin/bash

### 컨테이너 생성 이후 ###
# 컨테이너 확인
docker ps -a # a 설정이 없는 경우 : 실행중인 컨테이너만 list됨

# 컨테이너 접속
docker container start BE_API_TEST
docker exec -it BE_API_TEST /bin/bash

# [컨테이너 내부 bash] 컨테이너 종료
exit
```

### 옵션 설명
| 옵션      | 설명                              | 설정값        | 비고                      |
|:---------:|:---------------------------------:|:-------------:|:-------------------------:|
| `i`       | 표준입출력 STDIN을 오픈           |               | `t`옵션과 동시 사용 가능  |
| `t`       | 가상 tty(pseudo tty)를 통해 접속함|               | `i`옵션과 동시 사용 가능  |
| `p`       | 사용 / 연결 포트                  | `8888:3000`   | `HOST_PORT:CONTAINER_PORT`|
| `d`       | 백그라운드 실행                   |               | 사용하지 않음             |
| `--name`  | 컨테이너 명                       | `BE_API_TEST` | 원하는 이름 사용 가능     |

## 환경설정을 위해 추가설치가 필요한 패키지
```bash
yum install tar wget gzip -y
```
- tar, wget, gzip : 파일 수신, 압축 해제 등에 사용합니다.
- 기호에 따른 선택 옵션
    ```bash
    yum install vim -y
    ```
    - vim
    - ncurses