export default function hasValuesFromArray(set, array) {
  return array.every((o) => set.has(o));
}
