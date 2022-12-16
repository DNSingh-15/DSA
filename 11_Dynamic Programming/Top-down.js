// 1. fibonacci series with memoisation


//  normal fibonacci code 
function _fib(n) {
    if (n <= 1) return 1
    return _fib(n - 1) + _fib(n - 2)
}
console.time()
console.log(_fib(30));
console.timeEnd()




// after memoisation (top-down)

// We start with the given n and then recursively calculate fib(n-1) + fib(n-2) until we reach the base case. That is when we can start returning out results and “hand-them over” to our consecutive calls (that have been waiting on the stack, btw) until they all return a number and fib(n) can be calculated and returned as well.


function fibWithMemo (n) {
    let memo = {} // we will store("memoize") our values here
  
    function fib (n) {
        let value 
  
        if (n in memo) {
            // if the n is already in our memo object, we look it up and store it in value
            value = memo[n]
        } else {
            // otherwise, we calculate it and store it in value
            if (n <= 1) {
                value = 1
            } else {
                value = fib(n - 1) + fib(n - 2) 
            }
            // store the value for current n to our memo object
            memo[n] = value
        }
        // console.log(memo)
        return value
    }
    return fib(n)
  }
console.time()
console.log(fibWithMemo(30));
console.timeEnd()