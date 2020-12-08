// AuthRoute를 거친 라우터를 정의하고 component를 지정합니다.
// 지정된 route는 @/App.js에서 사용됩니다.
// refs = https://reacttraining.com/react-router/web/guides/static-routes

// 하위 route는 routes의 배열로 작성합니다.
import NotFound from '@/pages/NotFound';
import {lazy} from 'react';

const routes = [
  {
    path: '/',
    name: 'root',
    exact: true,
    component: lazy(() => import('@/pages/home/Container')),
  },
  {
    path: '/home',
    name: 'home',
    component: lazy(() => import('@/pages/home/Container')),
  },
  {
    path: '/recoil',
    name: 'recoil',
    component: lazy(() => import('@/pages/recoil/Container')),
  },
  {
    path: '/modal',
    name: 'modal',
    component: lazy(() => import('@/pages/modal/Container')),
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default routes;
