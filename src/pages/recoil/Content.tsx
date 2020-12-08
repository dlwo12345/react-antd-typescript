import React from 'react';
import {createGlobalStyle} from 'styled-components';

import RecoilTodoTemplate from './components/RecoilTodoTemplate';
import RecoilTodoHead from './components/RecoilTodoHead';
import RecoilTodoList from './components/RecoilTodoList';
import RecoilTodoCreate from './components/RecoilTodoCreate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const Content = (props: any) => {
  return (
    <>
      <GlobalStyle />
      <RecoilTodoTemplate>
        <RecoilTodoHead />
        <RecoilTodoList />
        <RecoilTodoCreate />
      </RecoilTodoTemplate>
    </>
  );
};

export default Content;
