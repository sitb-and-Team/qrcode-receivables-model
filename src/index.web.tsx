/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2018/8/7
 */
import 'whatwg-fetch'
import 'babel-polyfill';
import 'es6-promise';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Promise } from 'es6-promise';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import './styles/index.scss';

import { routerConfig } from './cose/router.config';
require('es6-promise').polyfill();

const theme = createMuiTheme({
  palette: {
    primary: { main: blue[500] },
    secondary: {
      main: blue[500],
      contrastText: '#fff'
    }
  }
});


function run() {
  ReactDOM.render(
    <main>
      <section className="background"/>
      <HashRouter>
        <Switch>
          <MuiThemeProvider theme={theme}>
            {
              routerConfig.map((values, index) => (
                <Route exact
                       key={index}
                       path={values.path}
                       component={values.component}
                />
              ))
            }
          </MuiThemeProvider>
        </Switch>
      </HashRouter>
    </main>,
    document.getElementById('application') as HTMLElement
  );
}

// 异步回调加载
new Promise((resolve: any) => {
  if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', resolve);
  } else {
    (window as any).attachEvent('onload', resolve);
  }
}).then(run);
