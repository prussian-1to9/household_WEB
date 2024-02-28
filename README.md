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