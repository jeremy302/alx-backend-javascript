export default function getStudentIdsSum(students) {
  return students.reduce((acc, x) => acc + x.id, 0);
}
