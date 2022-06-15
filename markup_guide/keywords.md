# 강의 자료를 참고하자

- https://naradesign.github.io/
- https://github.com/naradesign/naradesign.github.io

# 아래 정보는 인덱스로 활용해서, 강의 자료를 참고!

# 02. 검색 엔진 밥상 차려주기

## seo 주요 요인

- Search Engine Results Page (SERP)
- backlink (인용)
- domain authority : 도매인 권력
- page title
- meta description, viewport
- loading speed
- ssl(https)
- content quality
- UX : LCP(최대 콘텐츠 블럭 그리기), CLS(누적 배치 변경)

# 03. html 개요 알고리즘 이해

- google headingMaps extnesion (outline)
- Sectioning content (명시적 개요, html5)
  - article
  - aside
  - nav
  - section
  - section + heading (h1~6) => 명시적 개요
- heading과 sectioning content는 1:1 매핑

# 04 html 의미론

- div를 대체할만한 요소
- span을 대체할만한 요소

### header, footer

- 여러개 가능
  GNB (global navigation bar)

### section article

중첩가능, heading 추천

### article, nav, aside

### main (sectioning content 아님)

### dialog

### figure

### address

### ins, del

### progress

### strong, em, del, ins (b,i,s,u)

figure > figurecaption

### mark

# 05. 상호작용 콘텐츠의 올바른 용법

### a vs button

### details / summary

### input type

### datalist

# 06. 이미지 마크업 최적화

.jpg /.png > .webp > .avif

### picture tag 사용하기

```htm
<!-- image -->
<picture>
  <source srcset="x.avif" type="image/avif" />
  <source srcset="x.webp" type="image/webp" />
  <img src="x.jpg" />
</picture>
<!-- media -->
<picture>
  <source srcset="x.webp" media="(max-width" : 960px) />
  <img src="x.webp" />
</picture>

<!-- latina display -->
<picture>
  <source srcset="2x.avif 2x 1x.avif" type="image/avif" />
  <source srcset="2x.webp 2x 1x.webp" type="image/webp" />
  <img src="x.jpg" />
</picture>
```

### loading, decoding

```html
<!-- 로딩지연 / 디코딩 지원 -->
<img loading = "lazy" decoding="async>
```

# 02. CSS의 절대권력, 초기화

### unused CSS / reset.css / Overridden

### reset.css 추천 코드 (강의 자료 참고)

# 03. 웹은 덩어리, 구성요소, 변형의 반복으로 이루어져 있다

- BEM

# 04 레이아웃, 배치의 비밀

- display
- z-index (부모에 종속)
- transform (relative)

```css
/* keyword */
div {
  display: hidden;
  display: flow-root;
  inset: 0;
  margin: auto;
}
```

# 05 레이아웃, 여백의 비밀

# 06. 레이아웃, 애증의 플로팅

## columns layout (div 여러개 하지 말고)

```css
div {
  columns: 310px 2; /* <'column-width'> || <'column-width'>  */
  column-gap: 20px;
  column-rule: 20px solid #0002;
}
```

## break-inside: avoid;

- 자연스럽게 다음 장으로 넘기기

## flexbox froggy (flex 게임)

## flexbox defense (flex 게임)

- flex-grow
- flex-shrink
- flex-basis
- flex:
-
