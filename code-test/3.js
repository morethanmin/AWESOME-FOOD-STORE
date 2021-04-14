const foo = (games) => {
  var score = 0;
  games.map((game) => {
    const gameScore = game.split(":");
    const left = parseInt(gameScore[0]);
    const right = parseInt(gameScore[1]);
    if (left === right) score += 1;
    if (left > right) score += 3;
    if (left < right) score += 0;
  });
  return score;
};

//점수를 보고 이기면 3점, 비기면 1점, 지면 0점으로 계산하여 전체 승점을 구하는 함수를 작성해주세요.

// - ex) ["3:1", "2:2", "1:3"] ⇒ 4

// - 10개의 경기 점수를 입력합니다.
// - 0점에서 최대 4점까지 입력합니다.

console.log(foo(["3:1", "2:2", "1:3"]));
