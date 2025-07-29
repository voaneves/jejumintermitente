import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import './index.css';

// A definição de todas as rotas fica aqui
const router = createHashRouter([
  {
    path: '/',
    element: <App />, // App.tsx é o elemento "pai", o layout
    children: [ // As páginas são "filhas" do layout
      {
        index: true, // A rota inicial
        element: <Index />,
      },
      {
        path: '*', // Rota para "não encontrado"
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
