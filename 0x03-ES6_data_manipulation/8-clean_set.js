export default function cleanSet(set, startString) {
  const arr = [];

  console.log(set);
  if (startString && typeof startString === 'string' && (set instanceof Set)) {
    set
      .forEach((o) => (typeof o === 'string' && o.startsWith(startString) ? arr.push(o.slice(startString.length)) : null));
  }
  return arr.join('-');
}
