# Fastcampus Site

## Contributor

- peacepiece (태욱)

## Tech Requirement (Tech Stack)

- Create-next-app
- Next.js
- Typescript
- ESLint
- Babel 설정

## Docker

- Dockerfile을 이용해서 Docker Container
- Docker Compose를 사용하고 있습니다

## Script

```
$ npm run dev

```

```
$ npm run build
$ npm run deploy
```

# .github (CODEOWNERS 작성)

- codeowner가 머지 리뷰를 남길 수 있음

# 테스트

- Jest

```
$ npm run test
```

## jest (unit test)

- Since the release of Next.js 12, Next.js now has built-in configuration for Jest.

```
$ npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

- 그외는 공식문서 따라서 ㄱㄱ
