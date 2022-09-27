def calculate(min, max, step):
# 請用你的程式補完這個函式的區塊
     
    sum = 0
    n=min
    while n <= max:
        sum=sum+n
        n+=step
    
    print(sum)

calculate(1, 3, 1) # 你的程式要能夠計算 1+2+3，最後印出 6
calculate(4, 8, 2) # 你的程式要能夠計算 4+6+8，最後印出 18
calculate(-1, 2, 2) # 你的程式要能夠計算 -1+1，最後印出 0


def avg(data):
# 請用你的程式補完這個函式的區塊
    sum = 0
    average=0
    for j in range(len(data["employees"])-1):
        
        if data["employees"][j]["manager"] == True:
            data["employees"].remove(data["employees"][j])
        
        sum = sum+data["employees"][j]["salary"]    
        average=sum/len(data["employees"][j])
         
     
    print("average",average)

avg({
"employees":[
{
"name":"John",
"salary":30000,
"manager":False
},
{
"name":"Bob",
"salary":60000,
"manager":True
},
{
"name":"Jenny",
"salary":50000,
"manager":False
},
{
"name":"Tony",
"salary":40000,
"manager":False
}
]
}) # 呼叫 avg 函式


def func(a):
# 請用你的程式補完這個函式的區塊
    def func1 (b, c) :
        print(a + b * c) 
        
    return func1

func(2)(3, 4) # 你補完的函式能印出 2+(3*4) 的結果 14
func(5)(1, -5) # 你補完的函式能印出 5+(1*-5) 的結果 0
func(-3)(2, 9) # 你補完的函式能印出 -3+(2*9) 的結果 15
# 一般形式為 func(a)(b, c) 要印出 a+(b*c) 的結果


def maxProduct(nums):
# 請用你的程式補完這個函式的區塊
    i = 0
    j = 0
    for i in range (len(nums)):
             
        for j in range(len(nums)):
            
            if nums[j] > nums[i]:
                temp = nums[j]
                nums[j] = nums[i]
                nums[i] = temp        
    
    bigger = 0
    if nums[0] * nums[1] > nums[len(nums) - 2] * nums[len(nums) - 1]:
        bigger = bigger + nums[0] * nums[1]
    else:
        bigger = bigger + nums[len(nums) - 2] * nums[len(nums) - 1]
        
    print(nums)
    print(bigger)


maxProduct([5, 20, 2, 6]) # 得到 120
maxProduct([10, -20, 0, 3]) # 得到 30
maxProduct([10, -20, 0, -3]) # 得到 60
maxProduct([-1, 2]) # 得到 -2
maxProduct([-1, 0, 2]) # 得到 0
maxProduct([5,-1, -2, 0]) # 得到 2
maxProduct([-5, -2]) # 得到 10


def twoSum(nums, target):
# your code here
    all = {}
    for i in range(len(nums)):
        num1 = nums[i]
        num2 = target - num1
        if num2 in all:
            return [all[num2], i]
        all[num1] = i

result=twoSum([2, 11, 7, 15], 9)
print(result) # show [0, 2] because nums[0]+nums[2] is 9