console.log('Hello world!');

const randomArr = [2, 8, 9, 10, 38, 93, 6];

// Addition of elements in an array by iterative method
const iterAddFunc = (list) => {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
};

const randomArrAdd = iterAddFunc(randomArr);

console.log(`The addition by iteration is ${randomArrAdd}`);

// Addition of elements in an array by recursive method
const recurAddFunc = (list) => {
    // Base case
  if (list.length === 1) {
    return list[0];
  }
  // General case
  return list[0] + recurAddFunc(list.slice(1));
};

const randomArrAddRecur = recurAddFunc(randomArr);
console.log(`The addition by recursion is ${randomArrAddRecur}`);
