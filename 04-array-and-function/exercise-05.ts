// 5. Write a function to split a string and convert it into an array of words

const givenStr: string = 'Hello World';

function splitString(input: string): string[] {
  let word: string = '';
  const strArr: string[] = [];

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (char === ' ') {
      strArr.push(word);
      word = '';
    } else {
      word += char;
    }
  }

  if (word.length > 0) {
    strArr.push(word);
  }

  console.log(strArr);
  return strArr;

  // Using split method
  /*
  const str = input.split(' ');

  return str;
  */
}

splitString(givenStr);
