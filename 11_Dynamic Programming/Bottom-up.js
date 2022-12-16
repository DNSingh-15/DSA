// 1. fibonacci series with memoisation


//  normal fibonacci code 
function _fib(n) {
    if (n <= 1) return 1
    return _fib(n - 1) + _fib(n - 2)
}
console.time()
console.log(_fib(30));
console.timeEnd()





// fibonacci code -->  using Bottom-up with Tabulation

// In this approach, we solve the problem “bottom-up” (i.e. by solving all the related sub-problems first). This is typically done by filling up an n-dimensional table (hence the term “tabulation”). Based on the results in the table, the solution to the top/original problem is then computed.

function fibWithTab (n) {
    if (n <= 2) return 1
    // initialize an array and store the values we already know
    let fibNums = [0, 1, 1]
    // loop starting at index 3 (first value we do not know) until n
    for (let i = 3; i <= n; i++) {
        // store values in the array at Nth index
        fibNums[i] = fibNums[i-1] + fibNums[i-2]
    }
    return fibNums[n]
}
console.time()
console.log(fibWithTab(30));
console.timeEnd()