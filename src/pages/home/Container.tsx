import React, {FC} from 'react';
import {Button, Layout} from 'antd';
import {WithFullLayout} from '@/layouts';

const {Content} = Layout;

const Container: FC = () => (
  <Layout>
    <Content>
      <div className="App">
        <Button type="primary">B111utton</Button>1111
      </div>
    </Content>
  </Layout>
);

export default WithFullLayout(Container);
