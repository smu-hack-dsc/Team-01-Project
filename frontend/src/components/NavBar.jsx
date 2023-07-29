import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from 'pages/Home';
import Projects from 'pages/Projects';
import Community from 'pages/Community';
import Profile from 'pages/Profile';
import Login1 from 'components/LoginSignup/Login1';
import { IonIcon } from '@ionic/react';
import { menuOutline } from 'ionicons/icons';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const menuRef = useRef();

  const handleClickOutsideMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };
  
  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutsideMenu);
    } else {
      document.removeEventListener('click', handleClickOutsideMenu);
    }

    return () => {
      document.removeEventListener('click', handleClickOutsideMenu);
    };
  }, [isMenuOpen]);

  return (
    <Router>
      <nav className="font-DMSans bg-white shadow-lg fixed w-full top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-black font-bold text-3xl ml-10">Logo</span>
              </div>
            </div>
            <div className="hidden md:block ml-auto">
              <div className="flex space-x-4">
                <NavLink
                  exact
                  to="/login"
                  className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium text-xl"
                  activeClassName="bg-gray-200"
                >
                  Login
                </NavLink>
                <NavLink
                  exact
                  to="/"
                  className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium text-xl"
                  activeClassName="bg-gray-200"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/projects"
                  className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium text-xl"
                  activeClassName="bg-gray-200"
                >
                  Projects
                </NavLink>
                <NavLink
                  to="/community"
                  className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium text-xl"
                  activeClassName="bg-gray-200"
                >
                  Community
                </NavLink>
                <NavLink
                  to="/profile"
                  className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium text-xl"
                  activeClassName="bg-gray-200"
                >
                  Profile
                </NavLink>
              </div>
            </div>
            <div className="mt-1 md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="block text-gray-600 hover:text-black focus:text-black focus:outline-none"
                aria-label="Menu"
                ref={menuRef}
              >
                <IonIcon icon={ menuOutline } size="large"/>
                  {isMenuOpen ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5 11h14v2H5v-2zm0-7h14v2H5V4zm0 14h14v2H5v-2z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 5h18v2H3V5zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"
                    />
                  )}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="absolute right-0 md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink
                onClick={toggleMenu}
                exact
                to="/login"
                className="block text-black hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium text-purple-500"
                activeClassName="bg-gray-200"
              >
                Login
              </NavLink>
              <NavLink
                onClick={toggleMenu}
                exact
                to="/"
                className="block text-black hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium"
                activeClassName="bg-gray-200"
              >
                Home
              </NavLink>
              <NavLink
                onClick={toggleMenu}
                to="/projects"
                className="block text-black hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium"
                activeClassName="bg-gray-200"
              >
                Projects
              </NavLink>
              <NavLink
                onClick={toggleMenu}
                to="/community"
                className="block text-black hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium"
                activeClassName="bg-gray-200"
              >
                Community
              </NavLink>
              <NavLink
                onClick={toggleMenu}
                to="/profile"
                className="block text-black hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium"
                activeClassName="bg-gray-200"
              >
                Profile
              </NavLink>
            </div>
          </div>
        )}
      </nav>

      <Routes>
        <Route path="/login" Component={Login1} />
        <Route path="/" Component={Home} />
        <Route path="/projects" Component={Projects} />
        <Route path="/community" Component={Community} />
        <Route path="/profile" Component={Profile} />
      </Routes>
    </Router>
  );
};

export default Navbar;
