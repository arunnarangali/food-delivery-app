import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import ProtectedRoute from './ProtectedRoute';
import { routes } from './routes';

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map((route) => {
          const Component = route.element;
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                route.protected ? (
                  <ProtectedRoute>
                    <Component />
                  </ProtectedRoute>
                ) : (
                  <Component />
                )
              }
            />
          );
        })}
      </Route>
    </Routes>
  );
};

export default Router;
