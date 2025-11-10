// 2. Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".

function fizzBuzz(n: number): void {
  let str = [];
  for (let i = 1; i <= n; i++) {
    const num = i;
    if (num % 3 === 0 && num % 5 === 0) {
      str.push('FizzBuzz');
    } else if (num % 5 === 0) {
      str.push('Buzz');
    } else if (num % 3 === 0) {
      str.push('Fizz');
    } else {
      str.push(num);
    }
  }
  console.log(str);
}

fizzBuzz(15);
