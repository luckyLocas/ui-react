/**
 * 页面路由控制
 */
import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import routerConfig from "framework/router/config";
import { getStore } from "framework/utils/localStorage";
import Login from "fragments/login/";
import loadable from '../layout/loadable';
import { removeStore } from '../utils/localStorage';

export interface IRoute {
  path: string;
  component: string;
  name: string;
  code: string;
  exact?: boolean;
  children?: IRoute[];
}

function RouterGuard(props: IRoute) {
  const token = getStore('token');
  console.log('token', token, props);
  const { component, path } = props;
  if (!token) return <Login />;

  if (path === '/login') {
    removeStore('token');
    return <Login />;
  }
  if (path === '/' || !path) {
    return loadable(() => import('../../views/fragments/home'))
  }

  return loadable(() => import(/* webpackChunkName:"com" */`../../${component}`))
}

function renderRoute(router: IRoute[]) {
  return <Switch>
    {router.map(config => {
      if (config.children) {
        return renderRoute(config.children)
      } else {
        return <Route
          key={config.code}
          path={config.path}
          exact={config.exact}
          render={props => <RouterGuard {...config} {...props} code={config.code} />}
        />
      }
    })}
  </Switch>
}

function pageRouter() {
  return <BrowserRouter>
    {renderRoute(routerConfig)}
  </BrowserRouter>
}

export default pageRouter;