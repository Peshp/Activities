import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './app/Navbar/NavBar';
import { Home } from '@mui/icons-material';


function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? <Home /> : (
        <>
          <NavBar />
          <Container style={{ marginTop: '7em' }}> 
            <Outlet />
          </Container>
        </>
      )}     
    </>
  );
}

export default App;

