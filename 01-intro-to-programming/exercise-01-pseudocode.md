## 1. Find area of rectangle

```js
START
  INPUT length
  INPUT width
  SET area = length * width
  OUTPUT area
END
```

## 2. Perimeter of rectangle

```js
START
  INPUT length
  INPUT width
  SET perimeter = 2 * (length + width)
  OUTPUT perimeter
END
```

## 3. Find diameter, circumference and area of a circle

```js
START
  INPUT radius
  SET diameter = 2 * radius
  SET circumference = 2 * PI * radius
  SET area = PI * radius ** 2
  OUTPUT diameter, circumference, area
END
```

## 4. Find angle of triangle if two angles are given

```js
START
  INPUT angleA
  INPUT angleB
  SET angleC = 180 - (angleA + angleB)
  OUTPUT angleC
END
```

## 5. Convert days to years, months and days (notes: 1 year = 365 days, 1 months = 30 days)

```js
START
  INPUT totalDays
  SET years = totalDays DIVISION 365
  SET remainingDays = totalDays MODULUS 365
  SET months = remainingDays DIVISION 30
  SET days = remainingDays MODULUS 30
  OUTPUT years, months, days
END
```

## 6. Get difference between dates in days

```js
START
  INPUT date1
  INPUT date2
  SET difference = date2 - date1
  OUTPUT difference
END
```
