console.log('Hello world!');
// Count how many sheeps jump over the fence

// By iterative algorithm

const sheepCountIter = (numSheep) => {
  for (let i = 0; i < numSheep; i++) {
    console.log(`${numSheep - i}: Another sheep jumps over the fence`);
  }
  console.log('All sheep have jumped the fence');
};

sheepCountIter(3);

// By recursive algorithm

const sheepCountRecur = (numSheep) => {
  if (numSheep === 0) {
    console.log('All sheep have jumped the fence');
  } else {
    console.log(`${numSheep}: Another sheep jumps over the fence`);
    sheepCountRecur(numSheep - 1);
  }
};

sheepCountRecur(3);
