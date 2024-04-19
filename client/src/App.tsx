import 'semantic-ui-css/semantic.min.css';
import './app/layoult/styles.css';
import { Container } from 'semantic-ui-react';
import { Outlet } from 'react-router-dom';
import NavBar from './app/Navbar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '7em' }}> 
        <Outlet />
      </Container>
    </>
  )
}

export default App
