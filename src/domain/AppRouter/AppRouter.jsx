import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../Login/Login';
import WorkSpace from '../Workspace/Workspace';

const AppRouter = () => {
  const routers = [
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/',
      component: WorkSpace,
    },
  ];
  return (
    <Switch>
      {routers.map(({ path, component }) => (
        <Route key={path} path={path} component={component} exact />
      ))}
      <Redirect to="/" />
    </Switch>
  );
};
export default AppRouter;
