# html standard

## living standard

https://html.spec.whatwg.org

## implemented standard

html, css, js의 브라우저 구현 현황을 확인
https://caniuse.com

## html content

html content 분류를 이해해야 standard를 읽을 수 있음

block, inline이란 단어는 사라짐

```
flow , pharsing, interactive, embedded, sectioning, heading, metadata content
```

### flow content

body에 포함할 수 있는 요소도 가능

### metadata content

일부는 flow content (default display : none)

```
base, link, meta, noscript, script, style, template. title
```

### heading content

```
h1 ~ h6
```

### sectioning content

heading, header footer의 범위

```
article, aside, nav, section
```

### phrasing content

예전의 inline

### palpable content

비어이있지 않은 hidden속성이 없는

### script-supporting element

```
script, noscript
```

### transparent content

부모의 콘텐츠 모델을 따름, 자식 요소로 무엇이든 담을 수 있음

```
a,ins,del,object,video
```

# a 요소를 사용할 떄 주의할 점

- a는 부모 요소의 content를 따른다.
- 자식 요소로 무엇이든 담을 수 있음

```html
<p>
  <a>
    <div></div>
  </a>
</p>
```

위의 요소는 유효하지 않음 a는 p 테그의 pharsing content인데 자식 요소로 flow content가 오고있음
