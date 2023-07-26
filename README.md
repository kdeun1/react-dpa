# React로 어플리케이션 만들기

이 프로젝트는 Create React App으로 부트스트랩된 프로젝트이다.
React 학습과 더불어 여러 사용 방법을 적용하였다.

```
npx create-react-app ./
```

## 실행 환경

node 16.16.0, Windows OS, VSCode

## 적용 기술

### Typescript 도입

```
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

tsconfig.json 설정파일 추가

### styled-component 사용

S-dot 네이밍 사용

### craro 설치

```
npm i —save @craco/craco craco-alias
```

alias 등의 설정들을 eject없이 사용하기 위해
typescript 설정에도 paths를 추가

### axios 설치

axios instance 활용

## 실행 방법

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
