SELECT 
    s.sId,
    s.name AS studentName,
    c.name AS courseName,
    e.examId,
    e.name AS examName,
    SUM(q.grade * (a.answer = q.answer)) AS totalScore,
    e.totalGrade
FROM Students s
JOIN answers a ON s.sId = a.sId
JOIN ExamQuestions eq ON a.qId = eq.qId AND a.examId = eq.examId
JOIN QuestionsBank q ON a.qId = q.qId
JOIN Exams e ON a.examId = e.examId
JOIN Courses c ON e.courseId = c.courseId
WHERE s.sId = 1  
GROUP BY s.sId, c.courseId, e.examId;


SELECT 
    d.name AS departmentName,
    c.name AS courseName,
    p.name AS professorName,
    AVG(ec.rating) AS avgCourseRating,
    AVG(ep.rating) AS avgProfessorRating
FROM Departments d
JOIN Courses c ON d.detptId = c.detptId
JOIN Teaches t ON c.courseId = t.courseId
JOIN Professors p ON t.pId = p.pId
LEFT JOIN evaluateCourse ec ON c.courseId = ec.courseId
LEFT JOIN evaluateProfessor ep ON p.pId = ep.pId AND ep.courseId = c.courseId
WHERE d.head = 1  
GROUP BY c.courseId, p.pId;


SELECT 
    c.courseId,
    c.name AS courseName,
    s.sId,
    s.name AS studentName,
    SUM(q.grade * (a.answer = q.answer)) AS totalScore
FROM Students s
JOIN answers a ON s.sId = a.sId
JOIN ExamQuestions eq ON a.qId = eq.qId AND a.examId = eq.examId
JOIN QuestionsBank q ON a.qId = q.qId
JOIN Exams e ON a.examId = e.examId
JOIN Courses c ON e.courseId = c.courseId
GROUP BY c.courseId, s.sId
ORDER BY c.courseId, totalScore DESC
LIMIT 10;


WITH ProfRatings AS (
    SELECT 
        p.pId,
        p.name AS professorName,
        e.courseId,
        AVG(ep.rating) AS avgRating
    FROM Professors p
    JOIN Teaches t ON p.pId = t.pId
    JOIN Courses e ON t.courseId = e.courseId
    LEFT JOIN evaluateProfessor ep ON p.pId = ep.pId AND ep.courseId = e.courseId
    GROUP BY p.pId, e.courseId
)
SELECT 
    courseId,
    professorName,
    avgRating
FROM ProfRatings pr1
WHERE avgRating = (
    SELECT MAX(avgRating) 
    FROM ProfRatings pr2
    WHERE pr2.courseId = pr1.courseId
);
