var moveZeroes = function (nums) {
  let first = 0;
  let sec = 1;

  while (sec < nums.length) {
    if (nums[first] === 0 && nums[sec] !== 0) {
      [nums[first], nums[sec]] = [nums[sec], nums[first]];
      first++;
      sec++;
    } else if (nums[first] === 0 && nums[sec] === 0) {
      sec++;
    } else {
      first++;
      sec++;
    }
  }

  return nums;
};

console.log(moveZeroes([0, 1, 2, 3, 12, 0, 5, 0]));
console.log(moveZeroes([0, 1, 2, 3, 12, 0, 5, 0, 0, 0, 7, 9, 1, 4, 0]));

console.log(moveZeroes([0]));
