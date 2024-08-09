# Testing
- 테스팅 및 로컬 개발환경 구축에 대한 문서입니다.
- 배포 시 **AWS를 사용할 예정**으로, docker의 **AWS 이미지를 pull**하여 유사 환경을 구축합니다.

## 파일구조
```shell
HOUSEHOLD_WEB/doc/
│
├── config/     # 프로젝트 설정에 관한 개발문서입니다.
│   ├── development/    # 로컬 개발환경 구축에 대한 개발문서입니다.
│   ├── typescript.md   # BE : typescript
│   └── eslint.md       # BE : eslint
│
├── images/ # doc 디렉토리에서 사용하는 이미지들을 저장합니다.
└── README.md   # 현재 파일
```
- README.md : 개요
- 01_docker.md : docker 환경 구축
- 02_npm.md : docker 내 node.js 설치


## 환경 구축을 하기 전에...
docker 사용을 위한 기본 설정이 필요합니다.
- docker 회원가입 [(링크)](https://www.docker.com/)
- docker 설치 : [Win](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe?utm_source=docker&utm_medium=webreferral&utm_campaign=dd-smartbutton&utm_location=module&_gl=1*wdfxon*_gcl_au*MTE5NjI4NzQzOS4xNzIyNDc3ODMy*_ga*OTIyNjQ3NDc4LjE3MjI0NzYzOTQ.*_ga_XJWPQMJYHQ*MTcyMjQ3NjM5My4xLjEuMTcyMjQ3NzgzMi42MC4wLjA.) [MAC intel(AMD)](https://desktop.docker.com/mac/main/amd64/Docker.dmg?utm_source=docker&utm_medium=webreferral&utm_campaign=dd-smartbutton&utm_location=module&_gl=1*wdfxon*_gcl_au*MTE5NjI4NzQzOS4xNzIyNDc3ODMy*_ga*OTIyNjQ3NDc4LjE3MjI0NzYzOTQ.*_ga_XJWPQMJYHQ*MTcyMjQ3NjM5My4xLjEuMTcyMjQ3NzgzMi42MC4wLjA.) [MAC Apple Silicon(ARM)](https://desktop.docker.com/mac/main/arm64/Docker.dmg?utm_source=docker&utm_medium=webreferral&utm_campaign=dd-smartbutton&utm_location=module&_gl=1*66mifc*_gcl_au*MTE5NjI4NzQzOS4xNzIyNDc3ODMy*_ga*OTIyNjQ3NDc4LjE3MjI0NzYzOTQ.*_ga_XJWPQMJYHQ*MTcyMjQ3NjM5My4xLjEuMTcyMjQ3NzgzMi42MC4wLjA.) [Linux](https://docs.docker.com/desktop/linux/install/?_gl=1*66mifc*_gcl_au*MTE5NjI4NzQzOS4xNzIyNDc3ODMy*_ga*OTIyNjQ3NDc4LjE3MjI0NzYzOTQ.*_ga_XJWPQMJYHQ*MTcyMjQ3NjM5My4xLjEuMTcyMjQ3NzgzMi42MC4wLjA.)
