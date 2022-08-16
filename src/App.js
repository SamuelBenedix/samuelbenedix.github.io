import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import 'animate.css/animate.min.css';
import React from 'react';

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
