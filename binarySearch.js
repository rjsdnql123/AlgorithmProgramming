function binarySearch (target, dataArray) {
    let low = 0;
    let high = dataArray.length - 1;
    let count = 0;
    while (low <= high) {
      count++;
      let mid = Math.floor((high + low) / 2);
      let guess = dataArray[mid];
      if (guess === target) {
        return count;
      } else if (guess > target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return undefined;
  }
  
console.log(binarySearch(5, [1,2,3,4,5,6,7,8]))
// binarySearch([5,6,7,4,3,2,3,4,7,9,12], 6)