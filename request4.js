function maxProduct(nums) {
  // 請用你的程式補完這個函式的區塊
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[i]) {
        let temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
      }
    }
  }
  let bigger = 0;
  if (nums[0] * nums[1] > nums[nums.length - 2] * nums[nums.length - 1]) {
    bigger += nums[0] * nums[1];
  } else {
    bigger += nums[nums.length - 2] * nums[nums.length - 1];
  }
  console.log(nums);
  console.log(bigger);
}
maxProduct([5, 20, 2, 6]); // 得到 120
maxProduct([10, -20, 0, 3]); // 得到 30
maxProduct([10, -20, 0, -3]); // 得到 60
maxProduct([-1, 2]); // 得到 -2
maxProduct([-1, 0, 2]); // 得到 0 或 -0
maxProduct([5, -1, -2, 0]); // 得到 2
maxProduct([-5, -2]); // 得到 10
