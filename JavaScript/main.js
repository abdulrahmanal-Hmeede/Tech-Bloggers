let grades = [];
let totalCredits = 0;


function addCourse() {
    const grade = parseFloat(document.getElementById('grade').value);
    const credits = parseFloat(document.getElementById('credits').value);

    if (isNaN(grade) || isNaN(credits) || grade < 0 || grade > 100 || credits <= 0) {
        alert("Please! Enter a grade between 0 & 100");
        return;
    }

    const points = calculatePoints(grade);
    grades.push({ grade, credits, points });
    totalCredits += credits;

    displayGrades();
    calculateGPA();
}


function calculatePoints(grade) {
    if (grade >= 98 && grade <= 100) return 4.0;
    if (grade >= 92 && grade <= 97) return 3.8;
    if (grade >= 90 && grade <= 91) return 3.5;
    if (grade >= 88 && grade <= 89) return 3.2;
    if (grade >= 82 && grade <= 87) return 3.0;
    if (grade >= 80 && grade <= 81) return 2.7;
    if (grade >= 78 && grade <= 79) return 2.5;
    if (grade >= 72 && grade <= 77) return 2.3;
    if (grade >= 70 && grade <= 71) return 2.0;
    if (grade >= 68 && grade <= 69) return 1.7;
    if (grade >= 62 && grade <= 67) return 1.3;
    if (grade >= 60 && grade <= 61) return 1.0;
    if (grade = 0 && grade < 60) return 0.0;
    return 0.0;
}


function displayGrades() {
    const gradesList = document.getElementById('gradesList');
    gradesList.innerHTML = "<h3>The Entered Courses:</h3>";
    grades.forEach((item, index) => {
    gradesList.innerHTML += `<p>Course ${index + 1}: Grade = ${item.grade}، Hours = ${item.credits}، GPA = ${item.points}</p>`;
    });
}


function calculateGPA() {
    let totalGradePoints = 0;
    grades.forEach(item => {
    totalGradePoints += item.points * item.credits;
    });

    const gpa = totalGradePoints / totalCredits;
    document.getElementById('gpa').textContent = gpa.toFixed(2);
}

function clearDis(){
    grades = []
    document.getElementById("gradesList").innerHTML = "";
    document.getElementById('grade').value = "";
    document.getElementById('credits').value = "";
}