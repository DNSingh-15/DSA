
function maxHeap(arr, N, i) {
    var largest = i;
    var l = 2 * i + 1; 
    var r = 2 * i + 2;

    // If left child is larger than root
    if (l < N && arr[l] > arr[largest])
        largest = l;

    // If right child is larger than largest so far
    if (r < N && arr[r] > arr[largest])
        largest = r;

    // If largest is not root
    if (largest != i) {
        var swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;

        // Recursively heapify the affected sub-tree
        maxHeap(arr, N, largest);
    }
}

function buildHeap(arr) {
    var N = arr.length;

    // Build heap (rearrange array)
    for (var i = Math.floor(N / 2) - 1; i >= 0; i--)
    maxHeap(arr, N, i);
}

function printArray(arr) {
    var N = arr.length;
    for (var i = 0; i < N; ++i)
        console.log(arr[i] + " ");

}

var arr = [1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17];
var N = arr.length;

// Function call
buildHeap(arr)

console.log("Array representation of Heap is: ");
printArray(arr, N);