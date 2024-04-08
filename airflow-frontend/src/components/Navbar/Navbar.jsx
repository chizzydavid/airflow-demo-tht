import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="airflw__navbar">
      <div className="airflw__navbar-links">
        <div className="airflw__navbar-links_logo">
        <Link className='nav_link' to="/"> <img src={logo} /> </Link>
        </div>
        <div className="airflw__navbar-links_container">
            <Link className='nav_link' to="/"> Home </Link>
            <p><a href="#">Features</a></p>
            <p><a href="#">Documentation</a></p>
            <p><a href="#">Contact Us</a></p>
        </div>
      </div>
      <div className="airflw__navbar-sign">
        <Link className='nav_link' to="/list-dags"> DAGS </Link>

        <button type="button">
          <Link className='nav_link' to="/create-dag"> Create DAG </Link>
        </button>
      </div>
      <div className="airflw__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="airflw__navbar-menu_container scale-up-center">
          <div className="airflw__navbar-menu_container-links">
            <Link className='nav_link' to="/"> Home </Link>
            <p><a href="#">Features</a></p>
            <p><a href="#">Documentation</a></p>
            <p><a href="#">Contact Us</a></p>
          </div>
          <Link className='nav_link' to="/list-dags"> DAGS </Link>
          <button type="button">
            <Link className='nav_link' to="/create-dag"> Create DAG </Link>
          </button>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

