// Insertion sort is a simple sorting algorithm --- array is virtually split into a sorted and an unsorted part --- Values from the unsorted part are picked and placed at the correct position in the sorted part.

// 1. 2nd element se start hoga -- arr[1] 
// 2. i for outerloop
// 3. j for innerloop


let arr = [2, 4, 1, 7, 5, 6, 3]                // 1st element ko sorted man ke chalte hai -- aur usi ke sath swapping hogi

for (let i = 1; i < arr.length; i++) {
    for (j = i; j >= 0; j--) {
        if (arr[j] < arr[j - 1]) {
            let temp = arr[j]
            arr[j] = arr[j - 1]
            arr[j - 1] = temp;
        }
    }
}
console.log(arr)





// or

// insertionSort = (arr) => {
//     for (let i = 1; i < arr.length; i++) {
//         let current = arr[i];                              // Choosing the first element in our unsorted subarray
//         let j = i - 1;                                           // The last element of our sorted subarray
//         while (j >= 0 && arr[j] > current) {
//             arr[j + 1] = arr[j];
//             j--;
//         }
//         arr[j + 1] = current;
//     }
//     return arr
// }
// console.log(insertionSort(arr))

