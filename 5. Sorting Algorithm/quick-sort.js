// Like Merge Sort, QuickSort also is a Divide algorithm. -- It picks an element as a pivot --  
// 1. Quicksort is the fastest sorting algorithm so it is widely used for searching

// way to pick the pivot element
// 1. Always pick the first element as a pivot.
// 2. Always pick the last element as a pivot (implemented below)
// 3. Pick a random element as a pivot.
// 4. Pick median as the pivot.


function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr.pop()
    let left = []
    let right = []

    for (i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

let arr = [8, 20, -2, 4, -6]
console.log(quickSort(arr))
