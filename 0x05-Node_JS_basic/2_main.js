const countStudents = require('./2-read_file');

try {
    countStudents("nope.csv");
}
catch(e){
    console.log(e);
}

countStudents("database.csv");
