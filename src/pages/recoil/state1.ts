import {atom, selector} from 'recoil';

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

export const incrementNextId = selector({
  key: 'incrementNextId',
  get: () => {},
  set: ({get, set}) => {
    const id = get(nextIdState);
    set(nextIdState, id + 1);
  },
});

export const toggleTodo = selector({
  key: 'toggleTodo',
  get: () => {},
  set: ({get, set}, id) => {
    set(
      todoState,
      get(todoState).map((todo: any) => (todo.id === id ? {...todo, done: !todo.done} : todo)),
    );
  },
});

export const removeTodo = selector({
  key: 'removeTodo',
  get: () => {},
  set: ({get, set}, id) => {
    set(
      todoState,
      get(todoState).filter((todo: any) => todo.id !== id),
    );
  },
});

export const createTodo = selector({
  key: 'createTodo',
  get: () => {},
  set: ({get, set}, todo: any) => {
    const todos = get(todoState);
    set(
      todoState,
      todos.concat({
        id: todos.length + 1,
        ...todo,
      }),
    );
  },
});
