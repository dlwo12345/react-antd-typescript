import React, {FC} from 'react';
import {Button} from 'antd';
import {WithFullLayout} from '@/layouts';

const Container: FC = () => (
  <div className="App">
    <Button type="primary">B111utton</Button>1111
  </div>
);

export default WithFullLayout(Container);
