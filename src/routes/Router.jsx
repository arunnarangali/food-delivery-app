import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { routes } from './routes';

const Router = () => {
  return (
    <Routes>
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
    </Routes>
  );
};

export default Router;
