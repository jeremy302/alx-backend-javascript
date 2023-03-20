export default function* createIteratorObject(report) {
  for (const names of Object.values(report.allEmployees)) {
    for (const name of names) {
      yield name;
    }
  }
}
