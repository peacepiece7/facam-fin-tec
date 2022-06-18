# install

```
yarn create next-app
```

# READEME.md작성

## 추가적인 babel 설정 필요

- preset을 해야 ie11이 default로 지원됨
- build-in 시점에 오류가 나는 경우들 모두

# eslint (airbnb)

```
$ npm install eslint-config-airbnb-typescript \
            @typescript-eslint/eslint-plugin@^5.13.0 \
            @typescript-eslint/parser@^5.0.0 \
            --save-dev

```

# test

- 공식문서 그래로 따라하면 됨!

- jest.config.js
- jest.setup.js
- \_\_mocks\_\_
- \_\_tests\_\_

```
$ npm i --save-dev @testing-library/jest-dom @testing-library/react jest jest-environment-jsdom

$ npm i identity-obj-proxy
```

# 배포 환경

- 많은 논의를 거치자 항상 aws가 답은 아니다.
- vercel(next)
- aws (eks)

# docker

- Install Docker on your machine.
- `$ npx create-next-app --example with-docker nextjs-docker --typesciprt`
- `$ docker login`
- Build your container:`$ docker build -t nextjs-docker .`
- Run your container: `$ docker run -p 3000:3000 nextjs-docker`

# 배포환경

## 무엇이 우선이냐가 중요, devOps가 없다면 유연하게 대처

- docker
- kubernetes (분산 컨테이너)
- rolling up (무중단 배포)
- EC2에서 바로 빌드
- nextjs는 vercel도 굿 초이스

# Data flow & User scenario

## Data flow

- data flow을 작성해야함
  - 인증, api에서 오는 데이터, 클라이언트에서 관리할 데이타
- user의 행동을 scenario로 작성해야함 (혼자서 작성하면 안됨)

## User Scenario

### main page로 봤을때

- 로그인 한 유저 & 구매안함
- 로그인 한 유저 & 구매함
- 로그인 안 한 유저

### 컴포넌트 단위로 user scenario작성 e.g gnb menu

++ 아래와 같이 작성해야 유닛 테스트를 작성할 수 있고, 상수를 고민하지 않고 적용할 수 있다.
++ 정의 되지 않은 단어는 꼭 추가 설명을 달아놓는다 (특정 옵션)
메뉴

- 카테고리 버튼이 보여야 한다.
- 카테고리 버튼에 마우스를 올리면 메뉴가 확장된다.
- 최신 혹은 어드민이 지정한 메뉴가 상단에 노출되어야한다.
  - 어드민이 지정한 메뉴 : XXX API를 호출하면 된다.
  - 메뉴는 어드민이 n일에 하번씩 변경한다.
- 메뉴는 메인메뉴의 서브메뉴가 존재한다.
  - 메인 메뉴는 언제나 노출한다.
  - 서브메뉴는 메인메뉴의 묶여있는 구룹에 한해서 노출된다.
- 강의 전체보기를 클릭하면 강의 목록으로 넘어간다.

배너

- 어드민에서 지정한 배너가 상단에 노출되어야한다.
  - 베너는 5초마다 자동으로 롤링한다.

강의목록

- 4단 그리드로 보여주어야 한다.
- 특정 옵션의 강의 목록이 노출되어야한다.
  - 특정 옵션 : 태그, 카테고리, 신규런칭
- 특정 카테고리의 강의 목록이 노출되어야한다.
- 타입
  - 목록형
  - 슬라이드형
- 강의 데이터
  - 썸네일
  - 태그
    - 태그 목록 API
    - 강의 요약
    - 강의 제목
    - URL
