const foo = (ids) => {
  var min = 0;
  ids.sort();
  ids.map((id) => {
    if (min === id) min++;
  });
  return min;
};

// - ex) [0,1,2,4] ⇒ 3
// - ex) [0,1,2,3,4,5,6] ⇒ 7

// - 정렬되지 않는 배열을 넣어도 동작해야함
// - 중복된 숫자가 있는 경우도 동작해야함

console.log(foo([0, 1, 2, 3, 4, 5, 6]));
