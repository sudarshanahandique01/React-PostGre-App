-- Create the table for student details and marks
CREATE TABLE student_marks (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    marks INTEGER NOT NULL
);

-- Insert initial data into the student_marks table
INSERT INTO student_marks (name, marks) VALUES 
('Alice', 85),
('Bob', 78),
('Charlie', 90),
('David', 88),
('Eve', 76);
