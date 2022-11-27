import { Outlet } from 'react-router-dom';
import Sidenav from '../_components/sidebar/Sidenav';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './style.css';

function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLogin = localStorage.getItem('isLoggin');
    if (isLogin !== 'true') navigate('/login');
  }, []);
  return (
    <>
      <div className="layout">
        <div className="navContainer">
          <Sidenav></Sidenav>
        </div>
        <div className="outletContainer">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}

export default Layout;
