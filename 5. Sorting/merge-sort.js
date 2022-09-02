// Merge sort -- the array is initially divided into two equal subarray ( continue dividing untill subarray legth = 1 ) and then they are combined in a sorted manner.

mergeSort = (arr) => {
	if (arr.length <= 1) {
		return arr
	}
	const half = Math.floor(arr.length / 2)
	const leftArr = arr.slice(0, half)
	const rightArr = arr.slice(half)
	return merge(mergeSort(leftArr), mergeSort(rightArr))
}
merge = (leftArr, rightArr) => {
	const temp = []
	while(leftArr.length && rightArr.length){
		if(leftArr[0] <= rightArr[0]){
			temp.push(leftArr.shift())          // temp me leftArr[0] push ho aur leftArr se wo value remove bhi ho sath me  
		} else {
			temp.push(rightArr.shift())
		}
	}
	return [...temp, ...leftArr, ...rightArr]
}

console.log(mergeSort([8, 20, -2, 4, -6]));