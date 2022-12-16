# `Heap`

* heap is a tree in which all the nodes are in a specific order

![](heap.png)


## 1. max heap 

* children's value <= their node 


## 2. min heap 

* children's value >= their node 


## `finding index`
* index start from 1 ...we asume that index 0 is empty

```
node --> i
parent(i) = i/2

left_child(i) = 2*i
left_child(i) = 2*i + 1

height = log n  --> for complete binary tree 
```