import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Outlet, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../img/logo.png'; 

const Header = () => {

  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/Login');
  };

  return (
    <div className="header">
      <ul className='header-ul'>
        <li className='logo'>
          <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
        </li>
        <li className='two'><a href="">Главная</a></li>
        <li className='loginbut'><Link to ="login" onClick={handleLoginClick}>Войти</Link></li>
      </ul>
    </div>
  );
};

export default Header;
