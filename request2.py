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