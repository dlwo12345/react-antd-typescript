import {useCallback} from 'react';
import {atom, useRecoilState} from 'recoil';

const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true,
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true,
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false,
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false,
  },
];

export const todoState = atom({
  key: 'todoState',
  default: initialTodos,
});

export const nextIdState = atom({
  key: 'nextIdState',
  default: initialTodos.length + 1,
});

export const useTodoState = () => {
  const [todos, setTodos] = useRecoilState(todoState);
  const [nextId, setNextId] = useRecoilState(nextIdState);

  const toggleTodo = useCallback(
    ({id}: any) => {
      const newValue = todos.map((todo: any) => (todo.id === id ? {...todo, done: !todo.done} : todo));
      setTodos(newValue);
    },
    [todos],
  );

  const removeTodo = useCallback(
    ({id}: any) => {
      const newValue = todos.filter((todo: any) => todo.id !== id);
      setTodos(newValue);
    },
    [todos],
  );

  const createTodo = useCallback(
    (todo: any) => {
      const newValue = todos.concat({
        id: nextId,
        ...todo,
      });

      setTodos(newValue);
      setNextId(nextId + 1); // nextId 값 1증가
    },
    [todos, nextId],
  );

  return {toggleTodo, removeTodo, createTodo};
};
