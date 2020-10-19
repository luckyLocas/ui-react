import React from "react";
import {
  HomeOutlined,
  TableOutlined,
} from '@ant-design/icons';

const routerConfig = [
  {
    path: '/', name: '首页', exact: true, code: 'home', component: 'views/fragments/home/'
  },
  {
    path: '/login', name: '登录页', code: 'login', component: 'views/fragments/login/'
  },
  {
    path: '/home', leftMenu: true, name: '首页', icon: <HomeOutlined />,
    exact: true, code: 'home', component: 'views/fragments/home/'
  },
  {
    path: '/table', leftMenu: true, name: '表格', icon: <TableOutlined />,
    exact: false, code: 'table', component: 'views/business/table/tableBasis',
    children: [
      {
        path: '/table/tableBasis', leftMenu: true, name: '基础表格',
        exact: true, code: 'tableBasis', component: 'views/business/table/tableBasis'
      },
      {
        path: '/table/tableDetail', leftMenu: true, name: '详情表格',
        exact: true, code: 'tableDetail', component: 'views/business/table/tableDetail'
      }
    ]
  }
]

export default routerConfig;