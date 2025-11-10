// 3. Create a function to calculate Body Mass Index (BMI)

function bmiCalculator(weightInKg: number, heightInMeter: number): string {
  const calculated = Math.round((weightInKg / heightInMeter ** 2) * 10) / 10;

  if (calculated > 39.9) {
    return `Your BMI is ${calculated} and you are obesity.`;
  } else if (calculated >= 30.0) {
    return `Your BMI is ${calculated} and you are very overweight.`;
  } else if (calculated >= 25.0) {
    return `Your BMI is ${calculated} and you are overweight.`;
  } else if (calculated >= 18.5) {
    return `Your BMI is ${calculated} and you are ideal.`;
  } else {
    return `Your BMI is ${calculated} and you are less weight.`;
  }
}

const result = bmiCalculator(53, 1.75);
console.log(result);
