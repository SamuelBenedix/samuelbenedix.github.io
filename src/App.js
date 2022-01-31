import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Socmed } from './components';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <Navbar />
      <Socmed />
      <Routes />
    </Router>
  );
}

export default App;
