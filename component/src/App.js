import React from 'react';
//import App from './App';
import MyComponent from "./MyComponent";

const App = () => {
  return <MyComponent name="React" favoriteNumber={1}>리액트</MyComponent>;
};
//태그 사이에 있는 내용을 보여주는 children
//숫자로 나타내면, 표시가 되긴하네,,,?
//콘솔창에 오류가 뜨긴함
export default App;