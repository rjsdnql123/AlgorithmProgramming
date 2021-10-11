function solution(nums) {
  let choice = nums.length / 2;
  let result = nums.filter((item, index) => nums.indexOf(item) === index);
  if (choice >= result.length) {
    console.log(result.length);
    return result.length;
  }
  console.log(choice);
  return choice;
}

//2
solution([3, 1, 2, 3]);

//3
solution([3, 3, 3, 2, 2, 4]);

//2
solution([3, 3, 3, 2, 2, 2]);
