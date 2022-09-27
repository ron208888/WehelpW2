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
