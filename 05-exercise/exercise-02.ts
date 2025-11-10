// 1. Write a function from a given array of mixed data types and return the sum of all the number

const mixedArray: any[] = ['3', 1, 'string', null, false, undefined, 2]; // Output: 3

function sumOfNumber(arr: any[]): number {
  let sum: number = 0;
  for (const num of arr) {
    if (typeof num === 'number') {
      sum += num;
    }
  }

  console.log(sum);
  return sum;
}

sumOfNumber(mixedArray);

// 2. Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array can only contain 5 elements).

let maxSize: number = 5; // Given integers are 5, 10, 24, 3, 6, 7, 8 -> should return [5, 10, 24, 3, 6]

function insertInteger(maxSize: number, ...integers: number[]): number[] {
  let result: number[] = [];

  for (const num of integers) {
    if (result.length < maxSize) {
      result.push(num);
    } else {
      break;
    }
  }

  console.log(result);
  return result;
}

insertInteger(maxSize, 5, 10, 24, 3, 6, 7, 8);

// 3. Write a function that will combine 2 given array into one array

const arr1: number[] = [1, 2, 3];
const arr2: number[] = [4, 5, 6];

function combineArray(firstArr: number[], secondArr: number[]): number[] {
  const merged = [...firstArr, ...secondArr];

  console.log(merged);
  return merged;
}

combineArray(arr1, arr2); // output: [1, 2, 3, 4, 5, 6]

// 4. Write a function to find duplicate values in an array

const arr: number[] = [1, 2, 2, 2, 3, 3, 3, 4, 5, 5];

// I tried to use built-in methods here to make the code shorter and easier to understand
function findDuplicates(arr: number[]): number[] {
  const duplicate = arr.filter((num, index) => arr.indexOf(num) !== index);
  return Array.from(new Set(duplicate));
}

const num: number[] = findDuplicates(arr);
console.log(num); // output: [2, 3, 5]

// 5. Write a function to find the difference in 2 given array

const arr3: number[] = [1, 2, 3, 4, 5];
const arr4: number[] = [3, 4, 5, 6, 7];

function findDifference(firstArr: number[], secondArr: number[]): number[] {
  const diff1 = firstArr.filter(num => !secondArr.includes(num));
  const diff2 = secondArr.filter(num => !firstArr.includes(num));
  const difference = [...diff1, ...diff2];

  console.log(difference);
  return difference;
}

findDifference(arr3, arr4); // output: [1, 2, 6, 7]
