# FitTrack Pro

## Overview
FitTrack Pro is a fitness tracking web application designed to help users search, browse, and explore exercises based on different body parts and muscle groups. The application utilizes the ExerciseDB API to fetch exercise data and presents it in a user-friendly interface.

## Technologies Used
- **React.js**: Frontend framework for building UI components.
- **Material UI**: UI library for styling and responsive design.
- **React Router**: Enables navigation between pages.
- **ExerciseDB API**: Fetches exercise data.

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/williamrosscrane/fittrack-pro.git
   ```
2. Navigate to the project directory:
   ```sh
   cd fittrack-pro
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file in the root directory and add your RapidAPI key:
   ```sh
   REACT_APP_RAPIDAPI_KEY=your_api_key_here
   ```
5. Start the development server:
   ```sh
   npm start
   ```

## API Integration
FitTrack Pro uses the [ExerciseDB API](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb) to fetch exercise-related data. Ensure you have an API key from RapidAPI to use the app.

## Usage
- Visit the homepage to explore exercises.
- Use the search bar to find exercises by name, muscle group, or equipment.
- Click on an exercise card for more details.

## License
This project is open-source and available under the [MIT License](LICENSE).

