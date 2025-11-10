// 1. Write a function to get the lowest, highest, and average value in the array (with and without using the sort function).

const arr: number[] = [12, 5, 23, 18, 4, 45, 32];

// Without sort function

function sortArray(input: number[]): void {
  let lowest = input[0];
  let highest = input[0];
  let sum = 0;

  for (const num of input) {
    const current = num;
    if (current < lowest!) {
      lowest = current;
    } else if (current > highest!) {
      highest = current;
    }
    sum! += current;
  }

  const average = sum! / input.length;
  console.log(`Lowest: ${lowest}, Highest: ${highest}, Average: ${average}`);
}

sortArray(arr);

// With sort function

/*
function sortWithMethod(input: number[]): void {
  const sorted = input.sort((a, b) => a - b);
  const lowest = sorted[0];
  const highest = sorted[sorted.length - 1];
  const sum = sorted.reduce((accumulator, current) => accumulator + current, 0);
  const average = sum / sorted.length;

  console.log(`Lowest: ${lowest}, Highest: ${highest}, Average: ${average}`);
}

sortWithMethod(arr);
*/

// 2. Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.

function joinWords(arr: string[]): string | undefined {
  if (arr.length === 0) return 'Array does not contain a word';
  if (arr.length === 1) return arr[0];
  return arr.slice(0, -1).join(', ') + `, and ${arr[arr.length - 1]}`;
}

const arrOfWords: string[] = ['apple', 'banana', 'cherry', 'date'];
const combinedWords: string | undefined = joinWords(arrOfWords);
console.log(combinedWords);

// 3. Write a function from a given array of numbers and return the second smallest number
const arr3: number[] = [5, 3, 1, 7, 2, 6];

function secondSmallest(input: number[]): void {
  const sorted = input.sort((a, b) => a - b);
  const secondNum = sorted[1];

  console.log(`Second smallest number: ${secondNum}`);
}

secondSmallest(arr3);

// 4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
const firstArr: number[] = [1, 2, 3];
const secondArr: number[] = [3, 2, 1];

function calculateEach(arr1: number[], arr2: number[]): number[] {
  return arr1.map((num, i) => num + arr2[i]!);
}

console.log(calculateEach(firstArr, secondArr));

// 5. Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.

function addElement(arr: number[], input: number): number[] {
  if (!arr.includes(input)) {
    arr.push(input);
  } else {
    console.log(`Element is already in the array`);
  }

  console.log(arr);
  return arr;
}

const arr4: number[] = [1, 2, 3, 4];
const newElement = 7;
addElement(arr4, newElement);
