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