export default function cleanSet(set, startString) {
  const arr = [];

  if (startString) {
    set
      .forEach((o) => (o.startsWith(startString) ? arr.push(o.slice(startString.length)) : null));
  }
  return arr.join('-');
}
