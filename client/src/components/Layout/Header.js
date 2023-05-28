import React from "react";
import { Styled, styled } from "styled-components";
import { NavLink,Link } from "react-router-dom";

function Header() {
  return (
    <Header1>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to='/' className="navbar-brand" >
              Tezz Quality
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to='/' className="nav-link " >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/about' className="nav-link " >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/register' className="nav-link" >
                 Register 
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to='/login' className="nav-link" >
                 Login
                </NavLink>
              </li>
            
              <li className="nav-item">
                <NavLink to='/cart' className="nav-link">
                 Cart (0)
                </NavLink>
              </li>
            
            </ul>
          </div>
        </div>
      </nav>
    </Header1>
  );
}

export default Header;

const Header1 = styled.div`
  
  
`;