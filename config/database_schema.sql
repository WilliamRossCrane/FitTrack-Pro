CREATE TABLE Users (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Workouts (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    exercise_type VARCHAR(50),
    sets INT,
    reps INT,
    weight DECIMAL(10, 2),
    RPE INT,
    RIR INT,
    date DATE,
    FOREIGN KEY (user_id) REFERENCES Users(ID)
);

CREATE TABLE Goals (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    goal_type VARCHAR(50),
    target_value DECIMAL(10, 2),
    date_set DATE,
    date_achieved DATE,
    FOREIGN KEY (user_id) REFERENCES Users(ID)
);
