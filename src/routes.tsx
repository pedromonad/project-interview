import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Error } from './pages/Error/Error';
import { Users } from './pages/Users/Users';
import { UserDetail } from './pages/UserDetail/UserDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Users />,
    errorElement: <Error />
  },
  {
    path: 'users/:username',
    element: <UserDetail />
  }
]);
