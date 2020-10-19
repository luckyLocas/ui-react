import React from "react";
import ReactDom from "react-dom";
import PageRouter from "framework/router";

import './app.less';

class Index extends React.Component {
  render() {
    return <PageRouter />
  }
}


ReactDom.render(<Index />, document.getElementById('root'));