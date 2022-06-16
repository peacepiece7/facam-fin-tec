# 부록 좋은 얘기들

# 코드는 하나의 덩어리이다

- 가독성은 상대적인 개념, 내가 속한 집단의 수준을 올릴 수록 그에맞는 수준의 공부가 필요
- FF, OOP같은 개념을 꼭 공부할 것

# AST (abstract syntax tree) 추상화 문장 트리

- 소스코드를 분석해서 기계가 실행하기 좋은 상태로 많들어 주는 자료구조
- 호출관계, 사용가능한 변수 등등 뭔가 분석할 수 있는 방법이 많음

# 추상화

- 좋은 프로그램을 짜기 위해서는 다방면의 지식이 필요함
- 추상화와 관련된 여러 컨샙을 알아볼 것
- text를 추상화 레이어로 감싸서 사용할 수 있음 -> dom -> 더욱 높은 추상화 -> virtual dom -> react, viewjs

# 과거 현대의 비교

- 명시적으로 표현하도록 변경되고 있음

```js
function foo() {} // 과거 arguments로 가변인자를 받음
function foo1(...args) {} // 명시적 코드 작성으로 변경

const arr = [4, 5, 6];

const newArray = arr.concat([1, 2, 3]);
const newArray1 = [...arr, 1, 2, 3];

const obj = { a: 3, c: 2 };

Object.asign([], obj, {a:10, d:4})

const newObject = {...obj, {a:10, d:4}}

// 과거
function Baz(){
    this.name = "baz"
}
Baz.prototype.getName = function(){
    return this.name
}
const bas = new Baz()
bas.getName()

class Baz {
    constructor(){
        this.name = "baz"
    }
    getName(){
        return this.name
    }
}

const bas = new Baz()

// 클로저 -> 클레스

```

# html, css ,js 공부할 떄

# 도구를 활용하자

- html, css는 다 외우기보단 도구를 활용할 것
- dom tree viewer (html 구성)
- chrom 개발자도구 more tools 잘 활용하기

# 의도적인 수련을 해야함

- 부족한 부분, 공부하고 싶은 부분을 명확히 하고 프로잭트를 진해야해야함

### 명확한 측정을해서 앱을 기획해서 만들어봐야 함

- 그래픽이 부족하다.
- js가 부족하다.
- 비동기가 부족하다 -> 비동기 관련 기능들 검색 -> 관련 기능이 들어간 프로잭트
- 고급 기능(하이오더, 클로저, 제너릭)을 활용하고 싶다 -> 이브러리, html, css최소화되고 js를 적극 사용할 수 있는 프로잭트를 진행

# os, network, server, infra등 배워야 한다.

- 마스터라는 건 없다. 프론트만 하지말고 다 하자

# webpack도 nodejs다

- fs를 다루는 경우도 있음

# webpack

- loader라는 프로그램을 import해서 최적화하는 컨샙 (loader = entry, 바벨같은 트렌스 파일러)
- plugin을 loader가 최적화한 파일을 어떻게 출력할지를 알려주는 프로그램 (plugin = output, 이미지 최적화, 소스코드 압축)

- module -> role -> test 설정
  - 확장자를 보고 어느 로더로 보내 줄 지 결정 (.js -> babel, image -> 최적화 프로그램 로더)

### webpack boilerplate

# babel
