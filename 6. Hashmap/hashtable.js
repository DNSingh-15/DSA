
class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        this.table[index] = value
    }

    get(key) {
        const index = this.hash(key);
        return this.table[index];
    }

    remove(key) {
        let index = this.hash(key);
        this.table[index] = undefined
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}

const table = new HashTable(100);

table.set("name", "Bruce");
table.set("age", 25);
table.set(12, "Clark");

table.display();

console.log(table.get("name"));

table.set("name", "Diana");
// table.remove("name");
table.display();






// class HashTable {
//     constructor() {
//         this.table = new Array(127);
//         this.size = 0;
//     }

//     _hash(key) {
//         let hash = 0;
//         for (let i = 0; i < key.length; i++) {
//             hash += key.charCodeAt(i);
//         }
//         return hash % this.table.length;
//     }

//     set(key, value) {
//         const index = this._hash(key);
//         if (this.table[index]) {
//             for (let i = 0; i < this.table[index].length; i++) {
//                 if (this.table[index][i][0] === key) {
//                     this.table[index][i][1] = value;
//                     return;
//                 }
//             }
//             this.table[index].push([key, value]);
//         } else {
//             this.table[index] = [];
//             this.table[index].push([key, value]);
//         }
//         this.size++;
//     }

//     get(key) {
//         const index = this._hash(key);
//         if (this.table[index]) {
//             for (let i = 0; i < this.table.length; i++) {
//                 if (this.table[index][i][0] === key) {
//                     return this.table[index][i][1];
//                 }
//             }
//         }
//         return undefined;
//     }

//     remove(key) {
//         const index = this._hash(key);

//         if (this.table[index] && this.table[index].length) {
//             for (let i = 0; i < this.table.length; i++) {
//                 if (this.table[index][i][0] === key) {
//                     this.table[index].splice(i, 1);
//                     this.size--;
//                     return true;
//                 }
//             }
//         } else {
//             return false;
//         }
//     }

//     display() {
//         this.table.forEach((values, index) => {
//             const chainedValues = values.map(
//                 ([key, value]) => `[ ${key}: ${value} ]`
//             );
//             console.log(`${index}: ${chainedValues}`);
//         });
//     }
// }

// const ht = new HashTable();

// ht.set("France", true);
// ht.set("Spain", 150);
// ht.set(56, 192);

// console.log(ht.get(56))

// ht.display();

// console.log(ht.size); // 3
// ht.remove("Spain");
// ht.display();

