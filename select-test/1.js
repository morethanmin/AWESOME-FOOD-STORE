const foo = (str) => {
  var count = 0;
  for (const i of str) {
    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") count++;
  }
  return count;
};

//a, e, i, o, u
//abracadabra 5'\

console.log(foo("abracadabra"));
