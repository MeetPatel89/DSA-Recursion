const findFactRecur = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * findFactRecur(n - 1);
};

console.log(findFactRecur(5));
