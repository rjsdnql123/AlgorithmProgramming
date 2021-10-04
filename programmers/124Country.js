function solution(n) {
  let answer = "";
  let remove;

  while (n > 0) {
    remove = n % 3;
    n = Math.floor(n / 3);
    if (remove === 0) {
      n--;
      remove = 4;
    }
    answer = remove + answer;
  }
  return answer;
}
// 1
solution(1);
// 2
solution(2);
//4
solution(3);
// 11
solution(4);
