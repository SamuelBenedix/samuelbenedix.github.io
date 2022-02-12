import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import 'animate.css/animate.min.css';
import React from 'react';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes />
      </Router>
    </React.StrictMode>
  );
}

export default App;
