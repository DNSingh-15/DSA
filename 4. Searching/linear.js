// linear search
let arr = [11,20,31,4,35,6,7]
let num = 5

for (i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
        console.log(i);
    }
}



// Global Linear Search
function globalLinearSearch(arr, key){
    let results = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === key){
            results.push(i)
        }
    }
    // If results array is empty or not found
    if(!results == 0){
        return "result not found"
    }

    return results
}
console.log(globalLinearSearch([11,20,21,4,35,6,7], 201))