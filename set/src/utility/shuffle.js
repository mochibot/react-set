export const shuffle = (arr) => {
  let curr = arr.length;
  let rand;
  let temp;

  while (curr !== 0) {
    rand = Math.floor(Math.random() * curr);
    curr -= 1;
    temp = arr[curr];
    arr[curr] = arr[rand];
    arr[rand] = temp;
  }

  return arr;
}