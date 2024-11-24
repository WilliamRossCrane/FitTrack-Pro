import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { logWorkout } from '../services/api';

const WorkoutLog = () => {
  const [exerciseType, setExerciseType] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [rpe, setRpe] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workoutData = {
      exercise_type: exerciseType,
      sets,
      reps,
      weight,
      rpe,
    };

    try {
      await logWorkout(workoutData);
      alert('Workout logged successfully');
    } catch (error) {
      alert('Failed to log workout');
    }
  };

  return (
    <div>
      <h2>Log a Workout</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="exerciseType">
          <Form.Label>Exercise Type</Form.Label>
          <Form.Control
            type="text"
            value={exerciseType}
            onChange={(e) => setExerciseType(e.target.value)}
            placeholder="Enter exercise type"
          />
        </Form.Group>

        <Form.Group controlId="sets">
          <Form.Label>Sets</Form.Label>
          <Form.Control
            type="number"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
            placeholder="Enter sets"
          />
        </Form.Group>

        <Form.Group controlId="reps">
          <Form.Label>Reps</Form.Label>
          <Form.Control
            type="number"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            placeholder="Enter reps"
          />
        </Form.Group>

        <Form.Group controlId="weight">
          <Form.Label>Weight (kg)</Form.Label>
          <Form.Control
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter weight lifted"
          />
        </Form.Group>

        <Form.Group controlId="rpe">
          <Form.Label>Rate of Perceived Exertion (RPE)</Form.Label>
          <Form.Control
            type="number"
            value={rpe}
            onChange={(e) => setRpe(e.target.value)}
            placeholder="Enter RPE"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Log Workout
        </Button>
      </Form>
    </div>
  );
};

export default WorkoutLog;
