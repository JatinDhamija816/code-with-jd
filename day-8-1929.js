var getConcatenation = function (nums) {
  // let result = [];

  // for (let i = 0; i < nums.length; i++) {
  //   result[i] = nums[i];
  //   result[i + nums.length] = nums[i];
  // }

  // return result

   return nums.concat(nums);
};

console.log(getConcatenation([1, 2, 1]));
console.log(getConcatenation([1, 3, 2, 1]));
