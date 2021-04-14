const foo = (numbers) => {
  const numberArray = numbers.split(" ").map((number) => parseInt(number));
  var evenCount = 0,
    oddCount = 0,
    result = 0;
  numberArray.map((number) =>
    parseInt(number) % 2 ? oddCount++ : evenCount++
  );

  if (evenCount === 1) {
    result =
      numberArray.indexOf(numberArray.filter((number) => number % 2 === 0)[0]) +
      1;
  } else if (oddCount === 1) {
    result =
      numberArray.indexOf(numberArray.filter((number) => number % 2 === 1)[0]) +
      1;
  } else {
    result = -1;
  }
  return result;
};

console.log(foo("1 2 1 1"));
