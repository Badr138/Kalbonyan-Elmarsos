# try out the python queue functions
from collections import deque

# creat a new empty deque object that will finction as a queue
queue = deque()

# add some items to the queue
queue.append(1)
queue.append(2)
queue.append(3)
queue.append(4)

# print the queue contents
print(queue)

# pop an items off the front of the queue
x = queue.popleft()
print(x)
print(queue)