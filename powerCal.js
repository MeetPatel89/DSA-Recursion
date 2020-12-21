const powerCal = (a, n) => {
  // Base case
  if (n < 0) {
    return 'Exponent should be >= 0';
  } else if (n === 0) {
    return 1;
  }
  // General case
  return a ** 1 * powerCal(a, n - 1);
};

console.log(powerCal(10, 4));
console.log(powerCal(10, -5));
