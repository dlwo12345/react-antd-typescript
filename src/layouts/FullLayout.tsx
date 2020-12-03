import React, {ReactElement} from 'react';
import {Layout, Menu} from 'antd';

import {UserOutlined, VideoCameraOutlined, UploadOutlined} from '@ant-design/icons';
import {NavLink} from 'react-router-dom';
import {routes} from '@/router';

const {Header, Content, Sider, Footer} = Layout;

// Header와 Footer를 갖고 있는 layout입니다. HOC
function WithFullLayout(WrappedComponent: any): any {
  return class extends React.Component {
    render(): ReactElement {
      return (
        <Layout className="app" style={{minHeight: '100vh'}}>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
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
          </Sider>
          <Layout>
            <Header className="site-layout-sub-header-background" style={{color: 'white', textAlign: 'center', padding: 0}}>
              header 영역
            </Header>
            <Content style={{margin: '24px 16px 0'}}>
              {/* WrappedComponent는 반드시 Layout으로 wrapping되어야 하며, Layout.Content를 포함해야한다 */}
              <WrappedComponent {...this.props} />
            </Content>
            <Footer style={{textAlign: 'center'}}>footer 영역</Footer>
          </Layout>
        </Layout>
      );
    }
  };
}

export default WithFullLayout;
