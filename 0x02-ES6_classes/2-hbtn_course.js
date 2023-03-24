export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val !== 'string') throw TypeError('Name must be a string');
    this._name = val;
  }

  get length() {
    return this._length;
  }

  set length(val) {
    if (typeof val !== 'number') throw TypeError('Length must be a number');
    this._length = val;
  }

  get students() {
    return this._students;
  }

  set students(val) {
    if (!(val instanceof Array && val.every((v) => typeof v === 'string'))) throw TypeError('Students must be as array of strings');
    this._students = val;
  }
}
