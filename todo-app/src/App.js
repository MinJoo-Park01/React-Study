import React from 'react';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

const App = () => {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );
};

export default App;