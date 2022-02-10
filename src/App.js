import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Socmed } from './components';
import Routes from './Routes';
import 'animate.css/animate.min.css';

function App() {
  return (
    <Router>
      <Routes />
      <Navbar />
      <Socmed />
    </Router>
  );
}

export default App;
