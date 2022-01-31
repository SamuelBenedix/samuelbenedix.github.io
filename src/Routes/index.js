import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import { About, Contact, Home, Project } from '../pages';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project" element={<Project />} />
    </Switch>
  );
};

export default Routes;
