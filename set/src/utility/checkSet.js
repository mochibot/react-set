//takes in array of 3 cards and see if forms a set

export const checkSet = (arr) => {
  let number = (arr[0][number] + arr[1][number] + arr[2][number]) % 3 === 0;
  let color = (arr[0][color] + arr[1][color] + arr[2][color]) % 3 === 0;
  let shape = (arr[0][shape] + arr[1][shape] + arr[2][shape]) % 3 === 0;
  let shading = (arr[0][shading] + arr[1][shading] + arr[2][shading]) % 3 === 0;

  return number && color && shape && shading;
}