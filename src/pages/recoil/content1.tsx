import React from 'react';
import {createGlobalStyle} from 'styled-components';

import RecoilTodoTemplate from './components/recoilTodoTemplate';
import RecoilTodoHead from './components/recoilTodoHead';
import RecoilTodoList from './components/recoilTodoList';
import RecoilTodoCreate from './components/recoilTodoCreate';

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
