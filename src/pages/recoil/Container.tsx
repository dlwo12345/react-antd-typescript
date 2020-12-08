import React from 'react';
import {RecoilRoot} from 'recoil';
import {WithFullLayout} from '@/layouts';
import Content from './Content';

const Container = () => {
  return (
    <RecoilRoot>
      <Content />
    </RecoilRoot>
  );
};

export default WithFullLayout(Container);
