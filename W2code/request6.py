def maxZeros(nums):
# 請用你的程式補完這個函式的區塊
    num = 1
    max = 1

    for i in range(len(nums)):
        i+1
        if nums[i-1] == nums[i] & nums[i] == 0:
            num += 1
        if max < num:
            max = num
      
        else:
            num = 1
    
        if 0 not in nums:
            max = 0
    
    print(max)
    
maxZeros([0, 1, 0, 0]) # 得到 2
maxZeros([1, 0, 0, 0, 0, 1, 0, 1, 0, 0]) # 得到 4
maxZeros([1, 1, 1, 1, 1]) # 得到 0
maxZeros([0, 0, 0, 1, 1]) # 得到 3