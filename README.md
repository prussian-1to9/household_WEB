# 환경 구축
## python / pip
- 가상환경 생성
    ```shell
    python -m venv {venv_name}
    ```
    - `.venv` (ingored in git)

- pip 업그레이드
    ```shell
    python -m pip install --upgrade pip
    ```

## django
- django 설치
    ```shell
    python -m pip install django
    python -m pip install djangorestframework
    ```

- django 프로젝트 생성
    ```shell
    django-admin startproject {new_project_name}
    ```
    - `household`

- application 추가
    ```shell
    python {manage.py_path} startapp {new_app_name}
    ```
    - `list`

- settings\.py 추가
    ```python
    INSTALLED_APPS = [
        'rest_framework',
        '{new_app_names}',
    ]
    ```

- 새 migration 생성
    ```shell
    # 최초 실행
    python {manage.py_path} makemigrations
    
    # 그 이후
    python {mange.py_path} migrate
    ```

***
## 참고한 글
- django & react 프로젝트 구축 (우선순위 순서대로)
    - https://milooy.github.io/TIL/Django/react-with-django-rest-framework.html#%E1%84%86%E1%85%A9%E1%86%A8%E1%84%91%E1%85%AD
    - https://tutorial.djangogirls.org/ko/django_start_project/
        - https://wikidocs.net/197707
    - https://choco-life.tistory.com/42
- 로그인 구현 : https://velog.io/@jwun95/React.js-Django-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B5%AC%ED%98%84-1