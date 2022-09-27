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
