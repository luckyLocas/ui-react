import React from "react";
import { Menu } from 'antd';
import {
  TagsOutlined,
} from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import routerConfig from "framework/router/config";
import './index.less'

const { SubMenu } = Menu;

function MenuSider() {
  const history = useHistory();
  const { location: { pathname } } = history;
  const currentPath = pathname.split('/');
  const selectkey = currentPath[currentPath.length - 1];
  const openkey = currentPath.length > 1 ? [currentPath[1]] : [''];

  /**
   * 组装菜单项
   */
  function renderMenu() {
    const menuList = [];
    routerConfig.map((item, index) => {
      if (item.leftMenu) {
        if (item.children) {
          menuList.push(
            <SubMenu key={item.code} icon={item.icon ? item.icon : <TagsOutlined />} title={item.name}>
              {item.children.map((subItem) =>
                <Menu.Item key={subItem.code} onClick={() => {
                  history.push(subItem.path)
                }}>{subItem.name}</Menu.Item>
              )}
            </SubMenu>
          )
        } else {
          menuList.push(
            <Menu.Item onClick={() => { history.push(item.path) }} key={item.code} icon={item.icon ? item.icon : <TagsOutlined />}>
              {item.name}
            </Menu.Item>
          )
        }
      }
    })
    return menuList;
  }

  console.log('history', openkey, selectkey);

  return (
    <Menu theme="dark" mode="inline" selectedKeys={selectkey ? selectkey : 'home'} defaultOpenKeys={openkey}>
      {renderMenu()}
    </Menu>
  );
}

export default MenuSider;