# FitTrack Pro

## Project Overview
FitTrack Pro is a professional fitness tracking application designed to help users monitor their activities, set personalized goals, and log nutrition for a comprehensive view of their fitness journey. Built with React, Node.js, and SQL, FitTrack Pro offers a robust and user-friendly platform for fitness enthusiasts of all levels.

## Tech Stack
- **Front-End**: 
  - React: Built as a Progressive Web App (PWA) to provide a native-like experience on mobile devices, especially iPhones.
  - Bootstrap: Used for responsive and modern styling, ensuring a seamless experience across various screen sizes.
  - Custom CSS: Includes mobile-specific adjustments to enhance usability on smaller screens.
  
- **Back-End**: 
  - Node.js: with Express - Handles server-side operations and API request processing.
  - RESTful API: Enables communication between the front end and back end, providing flexibility and scalability.

- **Database**: 
  - SQL: MySQL for managing structured data, including user profiles, activity logs, and nutritional information.

- **Hosting**: 
  - Google Cloud Platform (GCP): Provides scalable and reliable hosting for the application.

- **Version Control**: 
  - Git: Manages source code and version control for collaborative and trackable development.

- **Testing Framework**: 
  - Jest with React Testing Library: Used for unit testing and simulating user interactions, ensuring compatibility across mobile and desktop platforms.

## Features
**Key Features**

- **Workout Logging**:
  - Log Details: Track exercise type, sets, reps, weight lifted, RPE (Rate of Perceived Exertion), and RIR (Reps in Reserve) in a clean carousel layout for each training day.
  - Dynamic Indicators: Show remaining sets and reps for each exercise to monitor real-time progress.

- **Progressive Overload Tracking**:
  - Automatic Calculations: Highlights improvements in reps, sets, and weight over time, aiding in tracking strength and endurance progress.
  - Four-Week Visualization: Displays changes across four weeks, making it easy to see gains in performance.

- **Notes Section**:
  - Dedicated Notes Area: Provides space for personal notes, session feedback, or adjustments for future workouts.
  - Auto-Save: Ensures notes are saved automatically for a seamless experience.

- **Graphing and Visual Analytics**:
  - Weekly & Monthly Views: Graphs display metrics such as weight lifting, volume trends, and RPE over time.
  - Interactive Graphs: Hover over details for precise workout data.

- **Workout Summary Dashboard**:
  - Daily Overview: Summarizes workout data, including completed sets, average RPE, and a snapshot of notes.
  - Quick Access: View essential data for each training day within the carousel for easy reference.

**Additional Design Elements**

  - Exercise History View: Collapsible history for each exercise to review past performance quickly.
  - Goal-Setting Prompts: Prompts to encourage progressive overload adjustments.
  - Color-Coded Indicators: Visual cues (green for progress, red for regression) provide quick insight into performance.
  - Quick-Edit Mode: Expand all exercise inputs for a faster, streamlined logging experience.
  - Warm-Up & Cool-Down Tracking: Optional fields to log additional activities for a balanced workout routine.

## Project Structure
  ```bash
    fitness-tracker/
    ├── client/               # Front-end code
    │   ├── src/             
    │   │   ├── components/   # React components for user interface
    │   │   ├── pages/        # Pages that represent each view in the app
    │   │   ├── services/     # API services and utility functions
    │   │   ├── redux/        # Redux actions and reducers (if needed for state management)
    │   │   ├── styles/       # Custom CSS files for styling
    │   │   └── App.js        # Main application component
    │   └── public/           # Static files like images and icons
    │
    ├── server/               # Back-end code
    │   ├── controllers/      # API request handlers
    │   ├── models/           # Database models (e.g., User, Workout, Goal)
    │   ├── routes/           # API routes for handling user and workout data
    │   ├── middleware/       # Custom middleware (e.g., authentication)
    │   └── app.js            # Main server setup file
    │
    ├── config/               # Configuration files for the app (e.g., database, API keys)
    ├── tests/                # Unit and integration tests
    └── README.md             # Project documentation
  ```
## Data Models
  User:
    {
      "ID": "unique_identifier",
      "username": "User's chosen username",
      "password": "Hashed password",
      "email": "User's email address",
      "profile": {
        "age": "User's age",
        "weight": "User's weight",
        "fitness_preferences": {
          "goal": "Goal type (e.g., muscle_gain, weight_loss)",
          "exercise_type": "Preferred exercise type",
          "preferred_workout_length": "Duration of workout"
        }
      }
    }

  Workout:
    {
      "ID": "unique_identifier",
      "user_id": "Foreign key linking to the user",
      "exercise_type": "Exercise type (e.g., weightlifting, running)",
      "sets": "Number of sets performed",
      "reps": "Reps per set",
      "weight": "Weight lifted (if applicable)",
      "duration": "Duration for cardio-based exercises",
      "calories_burned": "Calories burned during session",
      "RPE": "Rate of Perceived Exertion",
      "RIR": "Reps in Reserve",
      "date": "Date of workout"
    }
  
  Goal:
    {
      "ID": "unique_identifier",
      "user_id": "Foreign key linking to the user",
      "goal_type": "Goal type (e.g., weight loss, muscle gain)",
      "target_value": "Target value (e.g., target weight, reps)",
      "date_set": "Date when goal was set",
      "date_achieved": "Date when goal was achieved (if applicable)"
    }

## Installation
  To run FitTrack Pro locally:
  1. Clone the repository:
      git clone https://github.com/yourusername/fittrack-pro.git
  2. Install dependencies:
      cd fittrack-pro
      npm install
  3. Set up the database by creating a MySQL database and running the migrations:
      mysql -u root -p < database_schema.sql
  4. Start the development server:
      npm run dev
  5. Open the app in your browser:
      http://localhost:3000

## Contributing
We welcome contributions to improve FitTrack Pro! Please fork the repository, create a feature branch, and submit a pull request with your changes.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

### Notes:
1. Replace `yourusername` with your actual GitHub username when setting up the clone URL.
2. For the database, you’ll need to create `database_schema.sql` to define the necessary tables based on the models (User, Workout, Goal).
3. You may also want to ensure that `.env` files for database credentials and environment-specific settings are correctly set up.
