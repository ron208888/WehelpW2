function maxZeros(nums) {
  // 請用你的程式補完這個函式的區塊
  let num = 1;
  let max = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1] && nums[i] === 0) {
      num += 1;
      if (max < num) {
        max = num;
      }
    } else {
      num = 1;
    }
    if (nums.includes(0) === false) {
      max = 0;
    }
  }

  console.log(max);
}

maxZeros([0, 1, 0, 0]); // 得到 2
maxZeros([1, 0, 0, 0, 0, 1, 0, 1, 0, 0]); // 得到 4
maxZeros([1, 1, 1, 1, 1]); // 得到 0
maxZeros([0, 0, 0, 1, 1]); // 得到 3
