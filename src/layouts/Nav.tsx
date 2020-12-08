import {Menu} from 'antd';
import React from 'react';
import {NavLink} from 'react-router-dom';

const menuList = [
  {
    path: '/home',
    name: '홈',
    exact: false,
  },
  {
    path: '/recoil',
    name: 'recoil 예제',
    exact: true,
  },
  {
    path: '/modal',
    name: 'modal 예제',
    exact: true,
  },
];

const Nav = () => {
  return (
    <>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        {menuList.map((menu) => {
          return (
            <Menu.Item key={menu.path}>
              <NavLink to={menu.path} exact={menu.exact} activeClassName="active">
                {menu.name}
              </NavLink>
            </Menu.Item>
          );
        })}
      </Menu>
    </>
  );
};

export default React.memo(Nav);
