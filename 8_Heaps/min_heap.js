function sort(arr) {
    var N = arr.length;

    // Build heap (rearrange array)
    for (var i = Math.floor(N / 2) - 1; i >= 0; i--)
        minHeap(arr, N, i);

    // One by one extract an element from heap
    for (var i = N - 1; i > 0; i--) {
        // Move current root to end
        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // call max heapify on the reduced heap
        minHeap(arr, i, 0);
    }
}

// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
function minHeap(arr, N, i) {
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
        minHeap(arr, N, largest);
    }
}

function printArray(arr) {
    var N = arr.length;
    for (var i = 0; i < N; ++i) {
        console.log(arr[i] + " ");
    }

}
var arr = [12, 11, 13, 5, 6, 7];
var N = arr.length;

sort(arr);

console.log("Array representation of Heap is:");
printArray(arr, N);