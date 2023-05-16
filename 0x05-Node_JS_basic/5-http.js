const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 1245;
const dbPath = process.argv[2];

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    let csv;
    res.write('This is the list of our students');
    try {
      csv = fs.readFileSync(dbPath, { encoding: 'utf8', flag: 'r' });
    } catch (e) {
      res.statusCode = 500;
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
  }
});
module.exports = app;

app.listen(port, hostname);
