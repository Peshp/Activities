import 'semantic-ui-css/semantic.min.css';
import './app/layoult/styles.css';
import ActivityDashboard from './features/features/activities/dashboard/ActivityDashboard';
import NavBar from './app/Navbar/NavBar';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '7em' }}> 
        <ActivityDashboard />
      </Container>
    </>
  )
}

export default App
