// 1. Create a function that can create a triangle pattern according to the height

function trianglePattern(height: number): void {
  let counter: number = 1;

  for (let i = 1; i <= height; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      const formatted = counter < 10 ? `0${counter}` : `${counter}`;
      row += formatted + ' ';
      counter++;
    }
    console.log(row.trim());
  }
}

trianglePattern(4);
