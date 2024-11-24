import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const GoalSetting = () => {
  const [goalType, setGoalType] = useState('');
  const [targetValue, setTargetValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Goal Set: ${goalType} to ${targetValue}`);
  };

  return (
    <div>
      <h2>Set Your Fitness Goal</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="goalType">
          <Form.Label>Goal Type</Form.Label>
          <Form.Control
            type="text"
            value={goalType}
            onChange={(e) => setGoalType(e.target.value)}
            placeholder="Enter goal type (e.g., muscle gain)"
          />
        </Form.Group>

        <Form.Group controlId="targetValue">
          <Form.Label>Target Value</Form.Label>
          <Form.Control
            type="number"
            value={targetValue}
            onChange={(e) => setTargetValue(e.target.value)}
            placeholder="Enter target value (e.g., target weight)"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Set Goal
        </Button>
      </Form>
    </div>
  );
};

export default GoalSetting;
