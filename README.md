## Development Guidelines
> 프로젝트 실행 & 빌드시에는 환경변수(프로필)을 설정합니다.
> 개발 : dev (디폴트) , 운영 : prod
> ex) gulp build --prod  

### 프로젝트 설정하기
```
git clone https://github.com/funwork/funwork-webapp.git
(client) cd funwork-webapp && npm install
```

### 프로젝트 실행하기(개발모드)
```
# 각 프로젝트 루트 폴더에서 실행한다
gulp
```


### 프로젝트 빌드하기
```
gulp build
```

### 프로젝트 배포하기
```
dist 폴더 참고 (index.html / [hash].js)
```

## 개발 참여 방법
1. develop 브랜치를 기준으로 fork 한다.  
2. 원하는 기능을 개발한다.  
3. [커밋가이드라인](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines)에 맡게 커밋 메세지를 작성하여 커밋한다.  
4. Pull Request 을 보낸다.  
5. 만약 이슈번호를 기준으로 작업한거라면 맨 마지막줄에 Closes #이슈번호를 붙여준다.
6. 만약 이슈번호를 활용시 마일스톤과 라벨을 확인한다.
7. 기능 제안시에는 라벨은 idea 로 하고 Assign 은 `changhwaoh` 로 지정한다.