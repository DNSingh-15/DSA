// 1. – Constant time complexity: Big O(1)
function timesTwo(num) {
    return 2 * num
}
console.log(timesTwo(5));

let result1 = timesTwo(2000)
console.log(result1)


function manyTimes(num) {
    let total = 4 * num
    return total * 3
}
console.log(manyTimes(5))





// 2. – Linear time complexity: Big O(n)
let arr = [1, 2, 3, 4, 5]
let newArr = []
function reverseArray(n) {
    for (i = arr.length - 1; i >= 0; i--) {
        newArr += arr[i]
    }
    return newArr
}
console.log(reverseArray(newArr))





// 3. – Quadratic time complexity: Big O(n^2)
function multiplyAll(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return undefined
    }

    let total = 0
    for (let i of arr1) {
        for (let j of arr2) {
            total += i * j
        }
    }
    return total
}
console.log(multiplyAll([1, 2, 3], [5, 6, 0]))





// 4. – Logarithmic time complexity: Big O(log(n))
function logTime(arr) {
    let numberOfLoops = 0
    for (let i = 1; i < arr.length; i *= 2) {
        numberOfLoops++
    }
    return numberOfLoops
}
console.log(logTime([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 11]));





// 5. – Linearithmic time complexity: Big O(n log(n))
let n = 3
for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j = j * 2) {
        console.log("Hello")
    }
}





// 6. – Exponential time complexity: Big O(2^n)
// ----------------- fibonacci series time complexity using recursive function
function fibonacci(num) {
    if (num == 0) {
        return 0
    }
    else if (num == 1) {
        return 1
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2)
    }
}
console.log(fibonacci(4))





// 7. – Factorial time complexity: Big O(n!)
function factorial(n) {
    if (n == 0 || n == 1) {
        return 1
    } 
    else {
        return n * factorial(n - 1)
    }
}
console.log(factorial(5))