# where - jms

### jms 지도가 필요한 사람들을 위해 만들게 된 토이 프로젝트

<br/>

- 프로젝트 참여 인원:

`Front-End: 1명`

<br/>

- 사용 기술 스택:

`React, SWR, Next.js, TypeScript, Tailwind, Sass, GitHub`

<br/>

- 프로젝트 진행 기간:

`23.03.26 - 23.04.06`

<br/>

## 데이터

Mockdata를 만들어 사용했으며 공개적으로 알려진 JMS 교회를 대상으로, 직접 추가함

<br/>

## 💻 설치 방법

    yarn install
    yarn dev

<br/>

## 📂 파일 구조
```bash
📦hooks
 ┣ 📜useChurches.ts
 ┣ 📜useCurrentChurch.ts
 ┗ 📜useMap.ts
📦public
 ┣ 📂images
 ┃ ┣ 📜markers-selected.png
 ┃ ┣ 📜markers.png
 ┃ ┗ 📜naver.png
 ┣ 📜churches.json
 ┗ 📜favicon.ico
📦src
 ┣ 📂pages
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📜hello.ts
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂home
 ┃ ┃ ┃ ┣ 📜DetailContent.tsx
 ┃ ┃ ┃ ┣ 📜DetailSection.tsx
 ┃ ┃ ┃ ┣ 📜Map.tsx
 ┃ ┃ ┃ ┣ 📜MapPart.tsx
 ┃ ┃ ┃ ┣ 📜Marker.tsx
 ┃ ┃ ┃ ┗ 📜Markers.tsx
 ┃ ┃ ┗ 📜Header.tsx
 ┃ ┣ 📜_app.tsx
 ┃ ┣ 📜_document.tsx
 ┃ ┣ 📜index.tsx
 ┃ ┗ 📜test.tsx
 ┗ 📂styles
 ┃ ┣ 📜detail.module.scss
 ┃ ┣ 📜globals.scss
 ┃ ┗ 📜map.module.scss
📦types
 ┣ 📜churches.ts
 ┗ 📜map.ts
📦.eslintrc.json
📦.gitignore
📦.prettierrc
📦next.config.js
📦package.json
📦postcss.config.js
📦README.md
📦tailwind.config.js
📦tsconfig.json
 ```

## 기능

1. Header
  - 지도 좌표와 zoom level 초기화, url clip-board 복사를 통한 제 3자에게 전달 가능하도록 기능 구현

2. Map(=Home) 페이지 구현
	- getStaticProps를 적용한 동적 페이지.
  - URL의 query에 따라 지도 view가 변경되도록 처리
  - Naver Maps API를 사용한 지도 기능 구현.

3. 디테일 페이지 구현
  - 마커 클릭 시 활성화되어지도록 구현.
  - 마커가 선택되지 않을 시 버튼 비활성화, 선택되었을 때 교회명과 추가 정보를 볼 수 있는 버튼 활성화
  - 네이버 상세 정보 아이콘 클릭 시 실제 naver map 서비스로 이동
  
  
## 기술 채택 이유

  클라이언트 상태관리로 SWR 채택
  
	- React-query를 사용하며 동일하게 서버 상태 관리를 수행하는 SWR이 궁금했고
    별도의 Provider가 필요없이 컴포넌트에서 바로 사용이 가능하다는 점이 좋았다.
    또한 체감상 SWR이 러닝 커브가 좀 더 낮다고 판단했기에 SWR을 채택하게 되었다.
    
    
