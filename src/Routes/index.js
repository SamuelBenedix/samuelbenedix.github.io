import React from 'react';
import { Routes as Switch, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { About, Contact, Home, Project } from '../pages';

const Routes = () => {
  let location = useLocation();

  console.log(location.pathname);
  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Routes;
