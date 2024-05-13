import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './app/Navbar/NavBar';
import HomePage from './features/home/Home';


function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? <HomePage /> : (
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

