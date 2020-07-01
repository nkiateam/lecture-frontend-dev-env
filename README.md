# 프론트엔드 개발 환경의 이해 
본내용은 "[프론트엔드 개발 환경의 이해와 실습](https://www.inflearn.com/course/프론트엔드-개발환경)" 강의 자료를 바탕으로 정리된 내용입니다.

- 강의노트:   
      [강의노트1(웹팩 기초)](https://gonghojin.github.io/seminar/2020/05/21/front-dev-env.html)  
      [강의노트2(린트,프리티어,웹팩 개발서버)](https://gonghojin.github.io/seminar/2020/05/28/front-dev-env-2.html)  
- 실습 답지: [답안지](https://gonghojin.github.io/seminar/2020/06/21/front-dev-env-3.html)


## 실습 방법
1. git clone https://github.com/nkiateam/lecture-frontend-dev-env.git

2. VSCODE(또는 기타 IDE)에서 clone 받은 directory 열기

3. 각 Lab에 맞는 브런치로 checkout(clone 받은 소스 최상위(/lecture-frontend-dev-env)에서 명렁어 실행
    ~~~
     git checkout -f 1-webpack/1-entry
    ~~~

4. 각 Lab마다 풀어나가야 할 문제가 TODO로 적혀 있습니다. 전체검색(ctrl+shift+f)으로 TODO를 찾아서 해결하시면 됩니다.  
    모든 문제는 [강의노트](https://gonghojin.github.io/seminar/2020/05/21/front-dev-env.html) 를 보시면 해결 가능합니다.

5. 문제를 해결하셨다면 또는 해결 방법을 참조하고 싶다면  
    [답안지](https://gonghojin.github.io/seminar/2020/06/21/front-dev-env-3.html) 를 확인해 주세요

6. 문제 완료 후, 다음 Lab으로 넘어주세요(브런치 이동)
    ~~~
     git checkout -f 브랜치명 (아래 참조)
    ~~~

## 브랜치
- `1-webpack/1-entry`: 웹팩 엔트리/아웃풋 실습(Lab 1)
    ~~~
     git checkout -f 1-webpack/1-entry
    ~~~
- `1-webpack/2-loader`: 웹팩 로더 실습(Lab 2)
    ~~~
     git checkout -f 1-webpack/2-loader
    ~~~
- `1-webpack/3-plugin`: 웹팩 플러그인 실습(Lab 3)
    ~~~
     git checkout -f 1-webpack/3-plugin
    ~~~
- `3-lint/1-eslint`: 린트 실습(Lab 4)
    ~~~
     git checkout -f 3-lint/1-eslint
    ~~~
- `3-lint/2-prettier`: 프리티어 실습(Lab 5)
    ~~~
     git checkout -f 3-lint/2-prettier
    ~~~
- `4-webpack/1-dev-server`: 웹팩 개발 서버 실습(Lab 6)
    ~~~
     git checkout -f 4-webpack/1-dev-server
    ~~~
- `master`: 최종 결과물 
