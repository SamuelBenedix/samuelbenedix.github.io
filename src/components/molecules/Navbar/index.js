import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { Logo } from '../../../assets';
import {
  styMainMenu,
  styNavbarWrapper,
  styNavLink,
  styNavLinks,
  styNavItem,
  styLinkWrapper,
  styIndicator,
  styNavbarToggle,
  styCloseSidebar,
} from './styles';

import { styContainer } from '../../../global';

const Navbar = () => {
  const location = useLocation();
  const navElement = useRef();

  const [indicatorPosition, setIndicatorPosition] = useState();
  const [indicatorWidth, setIndicatorWidth] = useState();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    switch (location.pathname) {
      case '/portofolio':
        setIndicatorPosition(25);
        setIndicatorWidth(58);
        break;
      case '/about':
        setIndicatorPosition(131);
        setIndicatorWidth(58);
        break;
      case '/contact':
        setIndicatorPosition(238);
        setIndicatorWidth(72);
        break;
      case '/project':
        setIndicatorPosition(362);
        setIndicatorWidth(66);
        break;
      default:
        setIndicatorPosition(25);
        setIndicatorWidth(28);
        break;
    }
  }, [location.pathname]);

  const handleClick = (event) => {
    const linkLeft = event.target.getBoundingClientRect().left;
    const navLeft = navElement.current.getBoundingClientRect().left;
    const linkWidth = event.target.getBoundingClientRect().width;
    const singleLinkWidth = linkWidth;
    const singleLinkLeft = linkLeft - navLeft;

    setIndicatorPosition(singleLinkLeft);
    setIndicatorWidth(singleLinkWidth);
  };

  return (
    <div className={styMainMenu}>
      <div className={styContainer}>
        <nav className={styNavbarWrapper}>
          <Link to="/portofolio">
            <img src={Logo} alt="Logo" />
          </Link>
          <button
            className={styNavbarToggle}
            onClick={() => {
              setToggle(!toggle);
            }}
            type="button"
            alt="Menu"
          >
            <FiMenu size={35} color="#000" />
          </button>
          <div className={styLinkWrapper(toggle)} ref={navElement}>
            <ul className={styNavLinks(toggle)}>
              <FiX
                size={35}
                color="#000"
                className={styCloseSidebar}
                onClick={() => {
                  setToggle(!toggle);
                }}
                alt="Close"
              />
              <li className={styNavLink}>
                <Link
                  className={styNavItem(location.pathname === '/portofolio')}
                  to="/"
                  onClick={handleClick}
                >
                  Home
                </Link>
              </li>
              <li className={styNavLink}>
                <Link
                  className={styNavItem(location.pathname === '/about')}
                  to="/about"
                  onClick={handleClick}
                >
                  About
                </Link>
              </li>
              <li className={styNavLink}>
                <Link
                  className={styNavItem(location.pathname === '/contact')}
                  to="/contact"
                  onClick={handleClick}
                >
                  Contact
                </Link>
              </li>
              <li className={styNavLink}>
                <Link
                  className={styNavItem(location.pathname === '/project')}
                  to="/project"
                  onClick={handleClick}
                >
                  Project
                </Link>
              </li>
              <div
                className={styIndicator(indicatorWidth, indicatorPosition)}
              />
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
