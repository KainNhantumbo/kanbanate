import { Route, Routes } from 'react-router-dom';
import NotFoundError from './routes/404';
import { JSX } from 'react';

type RouteType = { path: string; element: JSX.ElementType };

const routes: RouteType[] = [
  { path: '*', element: NotFoundError }
];

export default function AppRouter() {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.element />} />
      ))}
    </Routes>
  );
}
