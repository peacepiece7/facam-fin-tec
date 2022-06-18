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
