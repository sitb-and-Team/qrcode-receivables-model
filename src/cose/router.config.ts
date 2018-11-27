/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2018/8/8
 */
import { Home } from '../container/Home';
import { SuccessPage } from '../container/SuccessPage';
import { ErrorPage } from '../container/ErrorPage';

export interface RouterConfig {
  path: string;
  component: any
}

// 路由path
export const routerPath = {
  home: '/home',
  successPage: '/successPage',
  errorPage: '/errorPage'
};

// 路由基本配置
export const routerConfig: Array<RouterConfig> = [{
  path: routerPath.home,
  component: Home
}, {
  path: routerPath.successPage,
  component: SuccessPage
}, {
  path: routerPath.errorPage,
  component: ErrorPage
}];
