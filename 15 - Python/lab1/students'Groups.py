import math
numOfStudents = input("Enter the number of students : ")
studentsPerGroup = input("Enter the desired number of students in the group : ")
if(numOfStudents.isnumeric()):
    numOfStudents = float(numOfStudents)
    studentsPerGroup = float(studentsPerGroup)
    groups = math.ceil(numOfStudents/studentsPerGroup)
    print("num of groups = ",groups)
else:
    print("invalid number")