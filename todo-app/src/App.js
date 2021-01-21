import React, { useState, useRef, useCallback, useEffect } from 'react';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

// function createBulkTodos() {
//   const array = [];
//   for (let i = 1; i <= 2500; i++) {
//     array.push({
//       id: i,
//       text: `할 일 ${i}`,
//       checked: false,
//     });
//   }
//   return array;
// }


const App = () => {
  const [todos, setTodos] = useState
    ([
      {
        id: 1,
        text: '리액트 투두리스트 만들기',
        checked: true,
      },
      {
        id: 2,
        text: '토플 오답노트',
        checked: false,
      },
      {
        id: 3,
        text: '블로그 포스팅',
        checked: true,
      },
    ])

  //고유값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(3);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos => todos.concat(todo));
      nextId.current += 1; //nextId 1씩 더하기
    },
    [todos],
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos => todos.filter(todo => todo.id !== id));
    },
    [todos]
  )

  const onToggle = useCallback(
    id => {
      setTodos(todos =>
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      )
    },
    [todos],
  )

  useEffect(() => {
    var num = 0
    for (var i = 0; i < todos.length; i++) {
      if (todos[i].checked === true) {
        num += 1
        if (num === todos.length) {
          alert("축하합니다.");
        }
      }
    }
  }
    , [todos]);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;