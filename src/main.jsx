import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';
import { ProSidebarProvider } from 'react-pro-sidebar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProSidebarProvider>
      <RouterProvider router={routes} />
    </ProSidebarProvider>
  </React.StrictMode>
);
