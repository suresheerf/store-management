import { createBrowserRouter } from 'react-router-dom';
import Login, { login } from './login/Login';
import NotFound from './_components/404';
import Layout from './layout/Layout';
import Home from './home/Home';
import Paddu from './paddu/Paddu';
import Products from './products/Products';
const routes = createBrowserRouter([
  {
    path: '/login',
    action: login,
    element: <Login />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'home',
        index: true,
        element: <Home></Home>
      },
      {
        path: 'paddu',
        element: <Paddu></Paddu>
      },
      {
        path: 'products',
        element: <Products></Products>
      }
    ]
  },
  {
    path: '*',
    element: <NotFound></NotFound>
  }
]);

export default routes;
