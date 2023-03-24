export default function updateStudentGradeByCity(students, city, newGrades) {
  const flatNewGrades = {};
  newGrades.forEach((o) => { flatNewGrades[o.studentId] = o.grade; });
  return students
    .filter((o) => o.location === city)
    .map((o) => ({ ...o, grade: Object.keys(flatNewGrades).includes(o.id.toString()) ? flatNewGrades[o.id] : 'N/A' }));
}
