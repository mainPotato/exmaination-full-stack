import React from 'react';
import { Transition } from 'react-transition-group';
import { Outlet, useLocation } from 'react-router-dom';
import './LoginLayout.css';

function LoginLayout() {
  return (
    <div className={`login-container`}>
      <div className='image'>
        <img src="https://auts.ac.in/wp-content/uploads/2023/06/webpage-auts-aboutus-3jun23.png" alt="login" />
      </div>
      <div className="login-details">
        <Outlet />
      </div>
    </div>
  );
}

export default LoginLayout;
