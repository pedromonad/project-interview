import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@material-tailwind/react';

import { router } from './routes';

import './style.css';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
