SET @OLD_FK_CHECKS = @@FOREIGN_KEY_CHECKS;
SET FOREIGN_KEY_CHECKS = 0;


INSERT INTO Departments (detptId, name, head) VALUES
(1, 'Computer Science', NULL),
(2, 'Information Systems', NULL),
(3, 'Mathematics', NULL);


INSERT INTO Professors (pId, name, detptId) VALUES
(101, 'Dr. Ahmed Samir', 1),
(102, 'Dr. Sara Adel', 1),
(103, 'Dr. Mohamed Tarek', 2),
(104, 'Dr. Laila Hassan', 3);


UPDATE Departments SET head = 101 WHERE detptId = 1;
UPDATE Departments SET head = 103 WHERE detptId = 2;
UPDATE Departments SET head = 104 WHERE detptId = 3;


INSERT INTO Courses (courseId, name, detptId) VALUES
(10, 'Database Systems', 1),
(11, 'Algorithms', 1),
(12, 'Software Engineering', 2),
(13, 'Linear Algebra', 3);


INSERT INTO Teaches (degree, level, pId, courseId) VALUES
('Bachelors', 2, 101, 10),
('Bachelors', 2, 101, 11),
('Bachelors', 3, 103, 12),
('Bachelors', 1, 104, 13);


INSERT INTO Students (sId, userName, name, password, faculty, degree, level) VALUES
(201, 'userAli', 'Ali Hassan', 'pass123', 'CS', 'Bachelors', 2),
(202, 'userMona', 'Mona Samy', 'pass123', 'CS', 'Bachelors', 2),
(203, 'userOmar', 'Omar Fathy', 'pass123', 'IS', 'Bachelors', 3),
(204, 'userNour', 'Nour Adel', 'pass123', 'Math', 'Bachelors', 1);


INSERT INTO QuestionsBank (qId, questionText, answer, grade, pId) VALUES
(1, 'What does SQL stand for?', 'A', 2, 101),
(2, 'Which data structure uses FIFO?', 'B', 2.5, 101),
(3, 'What is software testing?', 'C', 3, 103),
(4, 'Matrix multiplication is...', 'A', 1.5, 104);


INSERT INTO choises (choise, choiseChar, qId) VALUES
('Structured Query Language', 'A', 1),
('Simple Query Logic', 'B', 1),
('Sequential Queue Listing', 'C', 1),

('Queue', 'A', 2),
('FIFO structure', 'B', 2),
('Stack', 'C', 2),

('Process of finding bugs', 'A', 3),
('Writing documentation', 'B', 3),
('Evaluating software quality', 'C', 3),

('A binary operation', 'A', 4),
('A sorting method', 'B', 4),
('A file format', 'C', 4);


INSERT INTO Exams (examId, name, startTime, endTime, totalGrade, pId, courseId) VALUES
(1001, 'Midterm DB', '2024-01-10 10:00', '2024-01-10 12:00', 20, 101, 10),
(1002, 'Algorithms Quiz 1', '2024-02-01 09:00', '2024-02-01 09:30', 10, 101, 11),
(1003, 'SE Midterm', '2024-03-05 11:00', '2024-03-05 12:00', 15, 103, 12);


INSERT INTO ExamQuestions (qId, examId) VALUES
(1, 1001),
(2, 1001),
(2, 1002),
(3, 1003);


INSERT INTO answers (answer, sId, examId, qId) VALUES
('A', 201, 1001, 1),
('B', 201, 1001, 2),
('A', 202, 1001, 1),
('C', 202, 1001, 2);


INSERT INTO evaluateCourse (rating, comment, sId, courseId) VALUES
(5, 'Great course!', 201, 10),
(4, 'Useful content', 202, 10),
(3, 'Moderate difficulty', 203, 12);


INSERT INTO evaluateProfessor (rating, comment, pId, sId, courseId) VALUES
(5, 'Very clear explanations', 101, 201, 10),
(4, 'Helpful professor', 101, 202, 11),
(5, 'Excellent!', 103, 203, 12);

SET FOREIGN_KEY_CHECKS = @OLD_FK_CHECKS;
