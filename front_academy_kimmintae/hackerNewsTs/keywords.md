# config 시작

- 1_config_setting 참고
- webpack 버리고 싶어지는 명령어로 실행

```
npm i --save-dev parcel
npx parcel ./index.html
```

# rest clinet

- 2_generic 참고
- rest clinet를 vscode extensions에서 설치 후 .http 파일에 양식을 맞춰 작성 후 오른쪽 버튼 클릭 send a request선택

# generic

- 2_generic 참고
- n개의 유형을 입력할 때 n개의 유형을 출력하는 방식
- 특정 함수의 리턴값으로 두 개의 타입이 올경우 사용자는 어떤 타입이 올지 예상할 수 없음 => generic으로 해결해보기
- e.g a,b,c,d의 입력 중 a의 입력 => a를 출력, b를 입력 => b를 출력
