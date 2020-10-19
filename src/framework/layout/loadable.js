import React, { useState } from 'react';
import Loadable from 'react-loadable';
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import MenuSlider from './menu'
import './index.less'

const { Header, Sider, Content } = Layout;
//通用的过场组件
const loadingComponent = (error) => {
  if (error) return null;
  return (
    <div>加载中...</div>
  )
}

//过场组件默认采用通用的，若传入了loading，则采用传入的过场组件
export default (loader, loading = loadingComponent) => {
  const [collapsed, setCollapsed] = useState(false)

  function toggle() {
    setCollapsed(!collapsed)
    window.less.modifyVars({
      '@primary-color': '#406088',
      '@layout-header-padding': '0px'
    })
      .then(() => {
        consolr.log('color');
      })
      .catch(error => {
        console.log('error');
      });
  };

  const LoadableComponent = Loadable({
    loader,
    loading
  });
  return <Layout className='homeContainer'>
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <MenuSlider />
    </Sider>
    <Layout className="site-layout">
      <Header className="site-layout-header">
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: toggle,
        })}
        <h2 className='headerTitle'>哈哈哈哈</h2>
      </Header>
      <Content
        className="site-layout-background"
      >
        <LoadableComponent />
      </Content>
    </Layout>
  </Layout>
}
