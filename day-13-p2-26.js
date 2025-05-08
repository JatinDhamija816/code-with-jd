function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let first = 0;

  for (let sec = 1; sec < nums.length; sec++) {
    if (nums[sec] !== nums[first]) {
      first++;
      nums[first] = nums[sec];
    }
  }

  return first + 1;
}

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
