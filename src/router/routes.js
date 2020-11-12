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
    meta: {
      navigation: {
        show: false,
      },
    },
  },
  {
    path: '/home',
    name: 'home',
    component: lazy(() => {
      return new Promise((resolve) => {
        setTimeout(() => resolve(import('@/pages/home/Container')), 1000);
      });
    }),
    meta: {
      navigation: {
        show: true,
      },
    },
  },
  {
    path: '/test',
    name: 'test',
    component: lazy(() => {
      return new Promise((resolve) => {
        setTimeout(() => resolve(import('@/pages/test/Container')), 1000);
      });
    }),
    meta: {
      navigation: {
        show: true,
      },
    },
  },
  {
    path: '*',
    component: NotFound,
    meta: {
      navigation: {
        show: false,
      },
    },
  },
  // setTimeout 왜걸어놨지?
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: lazy(() => {
  //     return new Promise((resolve) => {
  //       setTimeout(() => resolve(import('@/pages/test/Container')), 1000);
  //     });
  //   }),
  //   meta: {
  //     navigation: {
  //       show: true,
  //     },
  //   },
  // },
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: lazy(() => import('@/pages/home/Container')),
  //   meta: {
  //     navigation: {
  //       show: true,
  //     },
  //   },
  // },
  // {
  //   path: '/test',
  //   name: 'test',
  //   component: lazy(() => import('@/pages/test/Container')),
  //   meta: {
  //     navigation: {
  //       show: true,
  //     },
  //   },
  // },
  // {
  //   path: '/example',
  //   name: 'example (use Layout)',
  //   component: lazy(() => {
  //     return new Promise((resolve) => {
  //       setTimeout(() => resolve(import('@/components/example/Container')), 1000);
  //     });
  //   }),
  //   meta: {
  //     navigation: {
  //       show: true,
  //     },
  //   },
  //   routes: [ // 하위 라우터
  //     {
  //       path: '/example/full',
  //       name: 'FullLayout(Sider and Content)',
  //       component: lazy(() => import('@/components/example/full/Container')),
  //       meta: {
  //         navigation: {
  //           show: true,
  //         },
  //       },
  //     },
  //     {
  //       path: '/example/content',
  //       name: 'Content Layout(Only Content)',
  //       component: lazy(() => import('@/components/example/content/Container')),
  //       meta: {
  //         navigation: {
  //           show: true,
  //         },
  //       },
  //     },
  //   ],
  // },
];

export default routes;
