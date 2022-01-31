import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../../../assets';
import {
  styMainMenu,
  styNavbarWrapper,
  styNavLink,
  styNavLinks,
  styNavItem,
  styLinkWrapper,
  styIndicator,
} from './styles';

import { styContainer } from '../../../global';

const Navbar = () => {
  const location = useLocation();
  const navElement = useRef();

  const [indicatorPosition, setIndicatorPosition] = useState();
  const [indicatorWidth, setIndicatorWidth] = useState();

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
          <Link to="/">
            <img src={Logo} alt="React Logo" />
          </Link>
          <div className={styLinkWrapper} ref={navElement}>
            <ul className={styNavLinks}>
              <li className={styNavLink}>
                <Link
                  className={styNavItem(location.pathname === '/')}
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
