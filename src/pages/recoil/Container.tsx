import React from 'react';
import {createGlobalStyle} from 'styled-components';

import {RecoilRoot} from 'recoil';
import RecoilTodoTemplate from './components/RecoilTodoTemplate';
import RecoilTodoHead from './components/RecoilTodoHead';
import RecoilTodoList from './components/RecoilTodoList';
import RecoilTodoCreate from './components/RecoilTodoCreate';
import {WithFullLayout} from '@/layouts';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const Container = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <RecoilTodoTemplate>
        <RecoilTodoHead />
        <RecoilTodoList />
        <RecoilTodoCreate />
      </RecoilTodoTemplate>
    </RecoilRoot>
  );
};

export default WithFullLayout(Container);
