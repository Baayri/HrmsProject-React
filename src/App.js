import './App.css';
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './layouts/Navi';
import Dashboard from './layouts/Dashboard';
import { Container } from 'semantic-ui-react';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navi />
      <Container className="main">
          <Dashboard />
      </Container>
    </div>
  );
}

export default App;
