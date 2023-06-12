import json 
import os 

count = 0
saved_count = 0

res = []

def visitor_check():
    global count 
    count +=1 
    saved_count = count 
    res.append(saved_count)
    return res

resutl = visitor_check()
print(resutl)