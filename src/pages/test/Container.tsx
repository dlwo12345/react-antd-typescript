import React, {FC} from 'react';
import {Layout} from 'antd';
import {WithFullLayout} from '@/layouts';

const {Content} = Layout;

const Container: FC = () => (
  <Layout>
    <Content>
      <div className="App">test page</div>
    </Content>
  </Layout>
);

export default WithFullLayout(Container);
