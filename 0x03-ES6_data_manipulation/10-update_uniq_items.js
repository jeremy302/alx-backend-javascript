export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw Error('Cannot process');
  map.forEach((v, k) => map.set(k, v === 1 ? 100 : v));
  return map;
}
