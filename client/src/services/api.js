import axios from 'axios';

const API_URL = 'http://localhost:5001/api';

export const logWorkout = async (workoutData) => {
  try {
    const response = await axios.post(`${API_URL}/workout`, workoutData);
    return response.data;
  } catch (error) {
    console.error('Error logging workout:', error);
    throw error;
  }
};
