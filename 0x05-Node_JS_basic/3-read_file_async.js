const fs = require('fs');

module.exports = function countStudents(path) {
  return fs.promises.readFile(path, { encoding: 'utf8', flag: 'r' }).then((csv) => {
    const rows = csv.trim().split('\n').slice(1);
    const studentsCount = rows.length;
    const counts = {};
    for (const row of rows) {
      const cells = row.split(',');
      const key = cells[3];
      counts[key] = [...(counts[key] || []), cells[0]];
    }
    console.log(`Number of students: ${studentsCount}`);
    Object.entries(counts).forEach((v) => {
      console.log(`Number of students in ${v[0]}: ${v[1].length}. List: ${v[1].join(', ')}`);
    });
  }).catch(() => {
    throw Error('Cannot load the database');
  });
};
