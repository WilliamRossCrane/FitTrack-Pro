import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Home from './pages/Home';
import WorkoutLog from './pages/WorkoutLog';
import GoalSetting from './pages/GoalSetting';
import './styles/custom.css';


function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">FitTrack Pro</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/workoutlog">Workout Log</Nav.Link>
            <Nav.Link href="/goalsetting">Goal Setting</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workoutlog" element={<WorkoutLog />} />
          <Route path="/goalsetting" element={<GoalSetting />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
