function twoSum(nums, target) {
  // your code here
  let all = {};

  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];

    if (difference in all) {
      return [all[difference], i];
    }
    all[nums[i]] = i;
  }
}
let result = twoSum([2, 11, 7, 15], 9);
console.log(result); // show [0, 2] because nums[0]+nums[2] is 9
