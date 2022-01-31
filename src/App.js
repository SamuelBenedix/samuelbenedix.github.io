import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  );
}

export default App;
