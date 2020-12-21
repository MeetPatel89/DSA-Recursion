const nTriaNum = (n) => {
  if (n === 0) {
    return 0;
  }
  return n + nTriaNum(n - 1);
};

console.log(nTriaNum(8));
