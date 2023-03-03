function formatGrades(grade) {
  let formate = grade.toFixed(2);

  let gradeText;

  if (grade >= 3.0 && grade < 3.5) {
    gradeText = 'Poor';
  } else if (grade >= 3.5 && grade < 4.5) {
    gradeText = 'Good';
  } else if (grade >= 4.5 && grade < 5.5) {
    gradeText = 'Very good';
  } else if (grade >= 5.5) {
    gradeText = 'Excellent';
  } else {
    formate = 2;
    gradeText = 'Fail';
  }

  console.log(`${gradeText} (${formate})`);
}
