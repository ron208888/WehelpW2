function calculate(min, max, step) {
  //   請用你的程式補完這個函式的區塊;
  let answer = 0;
  for (plus = min + step; plus <= max; plus += step) {
    let count = [plus];

    for (let i = 0; i < count.length; i++) {
      answer = min += plus;
    }
  }
  console.log(answer);
}
calculate(1, 3, 1); // 你的程式要能夠計算 1+2+3，最後印出 6
calculate(4, 8, 2); // 你的程式要能夠計算 4+6+8，最後印出 18
calculate(-1, 2, 2); // 你的程式要能夠計算 -1+1，最後印出 0

function avg(data) {
  // 請用你的程式補完這個函式的區塊
  let newArray = data.employees.filter((item) => item.manager === false);

  let sum = 0;
  let average = 0;
  newArray.forEach(function (index) {
    sum += index.salary;
    average = sum / newArray.length;
  });

  console.log(`average:${average}`);
}
avg({
  employees: [
    {
      name: "John",
      salary: 30000,
      manager: false,
    },
    {
      name: "Bob",
      salary: 60000,
      manager: true,
    },
    {
      name: "Jenny",
      salary: 50000,
      manager: false,
    },
    {
      name: "Tony",
      salary: 40000,
      manager: false,
    },
  ],
}); // 呼叫 avg 函式

function func(a) {
  // 請用你的程式補完這個函式的區塊
  return function (b, c) {
    let result = a + b * c;
    console.log(result);
  };
}
func(2)(3, 4); // 你補完的函式能印出 2+(3*4) 的結果 14
func(5)(1, -5); // 你補完的函式能印出 5+(1*-5) 的結果 0
func(-3)(2, 9); // 你補完的函式能印出 -3+(2*9) 的結果 15
// 一般形式為 func(a)(b, c) 要印出 a+(b*c) 的結果

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
