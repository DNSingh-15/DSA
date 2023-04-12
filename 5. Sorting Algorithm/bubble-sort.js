// Bubble sort algorithm is an algorithm that sorts the array by comparing two adjacent elements and swaps them if they are not in order
// 1. order can be anything like increasing order or decreasing 

arr = [1, 4, 2, 5, -2, -3]

for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - i; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
        }
    }
}
console.log(arr)


//  this is not bubble sort
//  this is my own method .. and this is also works on every array
let array = [-4,-5,-21,-1,-6,-7,-3];

for (let i = 0; i < array.length; i++) {
  if (array[i] > array[i + 1]) {
    let temp = array[i];
    array[i] = array[i + 1];
    array[i + 1] = temp;

    i = -1;
  }
}
console.log(array);
