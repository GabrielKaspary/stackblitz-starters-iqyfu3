import { FC } from 'react';
import { createBrowserRoter, RouterProvider } from
'react-router-dom';
import {Login} from './account/login';

const router = createBrowserRoter([
  {
    path:'/',
    Element: <div>Home</div>
  },
  {
    path:'/login',
    Element:<Login />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};