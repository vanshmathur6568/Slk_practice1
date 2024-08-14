document.getElementById('welcome-page-link').addEventListener('click', function() {
    document.getElementById('welcome-page').style.display = 'block';
    document.getElementById('profile-page').style.display = 'none';
});

document.getElementById('profile-page-link').addEventListener('click', function() {
    document.getElementById('welcome-page').style.display = 'none';
    document.getElementById('profile-page').style.display = 'block';
    displayStudentInfo();
});

function displayStudentInfo() {
    const studentInfo = `
        Name: Vansh Mathur<br>
        Age: 16<br>
        Grade: 10th<br>
        Subjects: Math, Science, English
    `;
    document.getElementById('student-info').innerHTML = studentInfo;
}
