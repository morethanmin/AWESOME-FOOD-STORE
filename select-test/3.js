const foo = (users) => {
  return users.filter((user) => user.length === 4);
};

console.log(foo(["Ryan", "Kieran", "Mark"]));
