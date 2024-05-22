import React, { ReactElement } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { type Router } from '@remix-run/router';
import { Theme } from 'react-daisyui';

import Main from './routes/Main';
import About from './routes/About';

const router: Router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/about',
    element: <About />
  }
]);

export default function App(): ReactElement {
  return (
    <>
      <Theme dataTheme='main'>
        <RouterProvider router={router} />
      </Theme>
    </>
  );
}
