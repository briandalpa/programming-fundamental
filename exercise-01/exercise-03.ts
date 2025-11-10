// 1. Based on the array below write a function that will return primitive data types only.

let arr: any[] = [1, [], undefined, {}, 'string', {}, []]; // output: [1, undefined, 'string']

function primitiveData(arr: any[]): number[] | undefined[] | string[] {
  const filtered = arr.filter(
    item =>
      (typeof item !== 'object' && typeof item !== 'function') || item === null
  ); // safety if function ever appear and null incorectly returns 'object'

  console.log(filtered);
  return filtered;
}

primitiveData(arr);

// 2. Write a function from the array of number below that will return sum of duplicate values.

let arr2: number[] = [10, 20, 40, 10, 50, 30, 10, 60, 10]; // output: 40

function sumDuplicates(arr: number[]): number {
  const number = new Set<number>();
  const duplicates = new Set<number>();

  for (const num of arr) {
    if (number.has(num)) {
      duplicates.add(num);
    } else {
      number.add(num);
    }
  }

  const sum = arr.reduce((acc, n) => (duplicates.has(n) ? acc + n : acc), 0);
  console.log(sum);
  return sum;
}

sumDuplicates(arr2);

// 3. Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick between rock, paper, or scissor. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'

function rockPaperScissor(pick: string): void {
  const playerPick = pick.trim().toLowerCase();
  const computer: string[] = ['Rock', 'Paper', 'Scissor'];
  const randomize =
    computer[Math.floor(Math.random() * computer.length)]?.toLowerCase();

  if (playerPick === randomize) {
    console.log(`Computer picked ${randomize}: Draw`);
  } else if (playerPick === 'rock' && randomize === 'scissor') {
    console.log(`Computer picked ${randomize}: Win`);
  } else if (playerPick === 'rock' && randomize === 'paper') {
    console.log(`Computer picked ${randomize}: Lose`);
  } else if (playerPick === 'paper' && randomize === 'rock') {
    console.log(`Computer picked ${randomize}: Win`);
  } else if (playerPick === 'paper' && randomize === 'scissor') {
    console.log(`Computer picked ${randomize}: Lose`);
  } else if (playerPick === 'scissor' && randomize === 'rock') {
    console.log(`Computer picked ${randomize}: Lose`);
  } else if (playerPick === 'scissor' && randomize === 'paper') {
    console.log(`Computer picked ${randomize}: Win`);
  } else {
    console.log('Invalid input');
  }
}

rockPaperScissor('Paper');
