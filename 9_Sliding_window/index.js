arr = [1, 4, 2, 10, 2, 3, 1, 0, 20]
p = 4

let max = 0;
let sum = 0;

for (i = 0; i < p; i++) {
    sum += arr[i];
    max = sum;
}
for (i = p; i < arr.length; i++) {
    sum += arr[i] - arr[i - p];

    if (sum > max) {
        max = sum;
    }
}

console.log(max)