import React from "react";
import ReactDom from "react-dom";
import PageRouter from "framework/router";
import { Provider } from 'react-redux';
import store from './store'
import './app.less';

class Index extends React.Component {
  render() { 
    return <Provider store={store}>
      <PageRouter />
    </Provider>
  }
}


ReactDom.render(<Index />, document.getElementById('root'));