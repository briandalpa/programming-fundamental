// 1. Area of rectangle
const rectangleLength: number = 5; // in centimeter
const rectangleWidth: number = 3; // in centimeter
const areaOfRectangle: number = rectangleLength * rectangleWidth;

console.log(`Area of rectangle is ${areaOfRectangle} square centimeter`);

// With function
/*
function rectangleArea(length: number, width: number): number {
  const area: number = length * width;
  console.log(area);
  return area;
}
*/

// 2. Perimeter of rectangle
const perimeterOfRectangle: number = 2 * (rectangleLength + rectangleWidth);

console.log(perimeterOfRectangle); // 16

// With function
/*
function rectanglePerimeter(length: number, width: number): number {
  const perimeter: number = 2 * (length + width);
  console.log(perimeter);
  return perimeter;
}
*/

// 3. Find diameter, circumference and area of a circle
const radius: number = 5;
const diameter: number = 2 * radius;
const circumference: number = 2 * Math.PI * radius; // 31.4159
const area: number = Math.PI * radius ** 2; // 78.539

console.log(
  `Diameter: ${diameter}, Circumference: ${circumference}, Area: ${area}`
);

// With function
/*
function diameterOfCircle(radius: number): number {
  const circleDiameter: number = 2 * radius;
  console.log(circleDiameter);
  return circleDiameter;
}

function circumferenceOfCircle(radius: number): number {
  const circleCircumference: number = 2 * Math.PI * radius;
  console.log(circleCircumference);
  return circleCircumference;
}

function areaOfCircle(radius: number): number {
  const circleArea: number = Math.PI * radius ** 2;
  console.log(circleArea);
  return circleArea;
}
*/

// 4. Find angle of triangle if two angles are given
const angleA: number = 80;
const angleB: number = 65;

const angleC: number = 180 - (angleA + angleB);
console.log(angleC); // 35

/*
function angleOfTriangle(angle1: number, angle2: number): number {
  const angle: number = 180 - (angle1 + angle2);
  console.log(angle);
  return angle;
}
*/

// 5. Convert days to years, months and days (notes: 1 year = 365 days, 1 months = 30 days)
let totalDays: number = 366;

let years: number = Math.floor(totalDays / 365);
let remainingDays: number = totalDays % 365;

let months: number = Math.floor(remainingDays / 30);
let days: number = remainingDays % 30;

const converted: string = `${years} year, ${months} month, ${days} day.`;
console.log(converted); // 1 year, 0 month, 1 day.

/*
function daysToYears(days: number): string {
  let year: number = Math.floor(days / 365);
  let remainingDays: number = days % 365;

  let month: number = Math.floor(remainingDays / 30);
  let day: number = remainingDays % 30;

  const conversion: string = `${year} year, ${month} month, ${day} day.`;
  console.log(conversion);
  return conversion;
}
*/

// 6. Get difference between dates in days
const date1: Date = new Date('2022-01-20');
const date2: Date = new Date('2022-01-22');

const diffInMilliseconds: number = date2.getTime() - date1.getTime();
const diffInDays: number = diffInMilliseconds / (1000 * 60 * 60 * 24);

console.log(diffInDays);

// With function
/*
function datesDifference(date1: Date, date2: Date): number {
  const diffInMilliseconds: number = date2.getTime() - date1.getTime();
  const diffInDays: number = diffInMilliseconds / (1000 * 60 * 60 * 24);

  console.log(diffInDays);
  return diffInDays;
}

const date1: Date = new Date('2022-01-20');
const date2: Date = new Date('2022-01-22');

datesDifference(date1, date2); // 2
*/
