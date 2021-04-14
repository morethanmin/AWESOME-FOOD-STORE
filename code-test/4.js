const foo = (n) => {
  d = {
    1: "kiwi",
    2: "pear",
    3: "kiwi",
    4: "banana",
    5: "melon",
    6: "banana",
    7: "melon",
    8: "pineapple",
    9: "apple",
  };
  while (n > 9) {
    var sum = 0;
    for (const i of String(n)) {
      sum += parseInt(i);
    }

    n -= sum;
    console.log(n);
  }
  return d[n];
};

console.log(foo(33));
