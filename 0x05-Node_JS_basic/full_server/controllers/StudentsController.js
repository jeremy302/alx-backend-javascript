import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(request, response) {
    const dbPath = process.argv[2];

    console.log(dbPath);
    readDatabase(dbPath).then((data) => {
      response.write('This is the list of our students');
      Object.keys(data).forEach((field) => {
        const names = data[field].map((v) => v.firstname).join(', ');

        response.write(`\nNumber of students in ${field}: ${data[field].length}. List: ${names}`);
      });
      response.end();
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    const dbPath = process.argv[2];
    const allowedMajors = ['CS', 'SWE'];
    const { major } = request.params;
    if (!allowedMajors.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(dbPath).then((data) => {
      const names = data[major].map((v) => v.firstname).join(', ');
      response.send(`List: ${names}`);
    })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}
