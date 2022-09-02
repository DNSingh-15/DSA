// hashmaps is a collection of elements in the form of a key-value pair (like object and array) --- but here we can change the index also

// points
// 1. HashMap works on the principle of hashing Data Structure
// 2. Hashing algorithm -- applied to a key to transform it into an address



// implementation of map

let m = new Map()
m.set(12, 23)     //(key, value)
m.set("apple", 35)
m.set("boolean", true)

console.log(m)
console.log(m.size)
console.log(m.keys())
console.log(m.values())

for ( t of m){
    // console.log(t)
    // console.log(t[0])            // every keys in 0 index
    console.log(t[1])               // evry values in 1 index
}



// delete
m.delete("apple")
m. delete(35)
console.log(m)

m.clear()
console.log(m)