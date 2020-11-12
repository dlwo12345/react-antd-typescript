import {routes} from '@/router';
import {Menu, Layout, Row, Col} from 'antd';
import {PieChartOutlined} from '@ant-design/icons';
import React, {FC} from 'react';
import {NavLink, useLocation} from 'react-router-dom';

const {Header} = Layout;
const HeaderComponent: FC = () => {
  const location = useLocation();

  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[location.pathname]}>
        {routes
          .filter((route) => route.meta.navigation.show)
          .map((route) => {
            return (
              <Menu.Item key={route.path}>
                <NavLink to={route.path} exact={route.exact} activeClassName="active">
                  {route.name}
                </NavLink>
              </Menu.Item>
            );
          })}
      </Menu>
    </Header>
  );
};

export default HeaderComponent;
