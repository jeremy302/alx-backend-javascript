export default function appendToEachArrayValue(array, appendString) {
  let idx = 0;
  const arr = array;
  for (const value of arr) {
    arr[idx] = appendString + value;
    idx += 1;
  }

  return arr;
}
