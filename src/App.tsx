import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <Router basename="/phoneBookProject">
      <Routes />
    </Router>
  );
}

export default App;
