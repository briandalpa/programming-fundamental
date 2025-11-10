// 4. Write a function to remove all odd numbers in an array and return a new array that contains even numbers

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeOdd(input: number[]): number[] {
  let evenNum: number[] = [];
  // for (let i = 0; i < input.length; i++) {
  //   if (input[i]! % 2 === 0) {
  //     evenNum.push(input[i]!);
  //   }
  // }

  for (const num of input) {
    if (num % 2 === 0) {
      evenNum.push(num);
    }
  }
  return evenNum;
}

const withoutOdd = removeOdd(num);
console.log(withoutOdd);
