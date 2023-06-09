const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;
const dbPath = process.argv[2];

app.get('/', (req, res) => {
  res.setHeader('content-type', 'text/plain');
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  res.type('txt');
  res.write('This is the list of our students');
  let csv;
  try {
    csv = fs.readFileSync(dbPath, { encoding: 'utf8', flag: 'r' });
  } catch (e) {
    res.status(500);
    res.end('\nCannot load the database');
    return;
    // throw Error('Cannot load the database');
  }
  const rows = csv.trim().split('\n').slice(1);
  const studentsCount = rows.length;
  const counts = {};
  for (const row of rows) {
    const cells = row.split(',');
    const key = cells[3];
    counts[key] = [...(counts[key] || []), cells[0]];
  }
  res.write(`\nNumber of students: ${studentsCount}`);
  Object.entries(counts).forEach((v) => {
    res.write(`\nNumber of students in ${v[0]}: ${v[1].length}. List: ${v[1].join(', ')}`);
  });
  res.end();
});
module.exports = app;

app.listen(port);
