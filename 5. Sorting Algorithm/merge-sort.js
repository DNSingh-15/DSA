// Merge sort -- the array is initially divided into two equal subarray (until subarray length = 1) and then they are combined in a sorted manner.


function mergeSort(arr) {
	if (arr.length <= 1){
		return arr
	} 
	const half = Math.floor(arr.length / 2)
	const leftArr = arr.slice(0, half)
	const rightArr = arr.slice(half)
	return merge(mergeSort(leftArr), mergeSort(rightArr))
}
function merge (leftArr, rightArr){
	let temp = []
	while(leftArr.length && rightArr.length){
		if (leftArr[0] <= rightArr[0]){
			temp.push(leftArr.shift())          // element of leftArr[0] temp me push hoga aur sath me leftArr se delete bhi hoga
		} else {
			temp.push(rightArr.shift())
		}
	}
	return [...temp, ...leftArr, ...rightArr]     // concate(add)
}

console.log(mergeSort([8, 20, -2, 4, -6]))