# hash change를 이용한 router 이동

```js
window.addEventListener("hashChange", () => {});
```

# innerHTML을 사용해서 DOM API사용량 줄이기 (feat. handlebars)

- 1. 템플릿 랜더링 참고
- 아래와 같이 innerHTML로 dom사용을 줄여보기

```js
function newsFeed() {
  let template = `
    <div class="container mx-auto p-4">
      <h1>Hacker News</h1>
      <ul>
        {{__news_feed__}}      
      </ul>
      <div>
        <a href="#/page/{{__prev_page__}}">이전 페이지</a>
        <a href="#/page/{{__next_page__}}">다음 페이지</a>
      </div>
    </div>
  `;

  template = template.replace("{{__news_feed__}}", newsList.join(""));
  template = template.replace("{{__prev_page__}}", store.currentPage > 1 ? store.currentPage - 1 : 1);
  template = template.replace("{{__next_page__}}", store.currentPage + 1);
}
```

# 재귀를 이용한 댓글 구현

- 2. 댓글, 대댓글 구현 참고

```js
  function makeComment(comments, called = 0) {
    const commentString = [];

    for(let i = 0; i < comments.length; i++) {
      commentString.push(`
        <div style="padding-left: ${called * 40}px;" class="mt-4">
          <div class="text-gray-400">
            <i class="fa fa-sort-up mr-2"></i>
            <strong>${comments[i].user}</strong> ${comments[i].time_ago}
          </div>
          <p class="text-gray-700">${comments[i].content}</p>
        </div>
      `);

      if (comments[i].comments.length > 0) {
        commentString.push(makeComment(comments[i].comments, called + 1));
      }
    }

    return commentString.join('');
  }

  container.innerHTML = template.replace('{{__comments__}}', makeComment(newsContent.comments));
}
```

# 전역 상태 설정, 읽음 표시

- 3. 상태와 UI의 연결
