import React, {FC} from 'react';

import './App.scss';
import {Route, Switch} from 'react-router-dom';
import {Spin} from 'antd';
import {routes} from './router';

const App: FC = () => (
  <React.Suspense fallback={<Spin />}>
    <Switch>
      {routes.map((route: any) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            render={(props: any) => (
              // pass the sub-routes down to keep nesting
              <route.component {...props} routes={route.routes} />
            )}
          />
        );
      })}
    </Switch>
  </React.Suspense>
);

export default App;
