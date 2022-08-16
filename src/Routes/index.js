import React from 'react';
import { Routes as Switch, Route, useLocation } from 'react-router-dom';
import { BackgroundLogoComp, Navbar, Socmed } from '../components';
import { About, Contact, Home, Project } from '../pages';
import { AnimatePresence } from 'framer-motion';

const Routes = () => {
  let location = useLocation();

  return (
    <React.Fragment>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/portofolio" element={<Home />} />
        </Switch>
      </AnimatePresence>
      <BackgroundLogoComp />
      <Socmed />
    </React.Fragment>
  );
};

export default Routes;
