const foo = (array) => {
  return array.length === 3 ? array.sort()[1] : -1;
};

console.log(foo([2, 1, 3]));
