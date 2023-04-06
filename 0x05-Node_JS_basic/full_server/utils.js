import fs from 'fs';

export default function readDatabase(path) {
  return fs.promises.readFile(path, { encoding: 'utf8', flag: 'r' }).then((csv) => {
    const [header, ...rows] = csv.trim().split('\n').map((r) => r.split(','));
    const objs = rows.map((row) => Object.fromEntries(row.map((cell, i) => [header[i], cell])));
    const groups = {};
    objs.forEach((obj) => {
      const v = obj; // for eslint
      const { field } = v;
      delete v.field;
      if (!groups[field]) groups[field] = [];
      groups[field].push(v);
    });
    return groups;
  }).catch(() => {
    throw Error('Cannot load the database');
  });
}
