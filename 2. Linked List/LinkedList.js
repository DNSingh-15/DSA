//  linked list in Javascript is a data structure that stores a collection of ordered data that can only be accessed sequentially.


// defining the linkedlist
// 10-->16-->20

// let list = {
//     head:{
//         value:10,
//         next:{
//             value:16,
//             next:{
//                 value:20,
//                 next:null
//             }
//         }
//     }
// }





// Linked List
class LinkedList {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }
    // next function for storing the next value
    add(data){
        const newNode = {
            value: data,
            next: null
        }
        this.tail.next = newNode;        // means tail ab next value ko point kr rha hai
        this.tail = newNode;             // tail me ab next value store ho gyi hai
        this.length++;
    }
    // insert a new node from the starting -- prepend method
    prepend(data){
        const newNode = {
            value: data,
            next: null
        }
        newNode.next = this.head        // newNode head ko point kr rha hai
        this.head  =  newNode           // head me ab newNode kki value store ho gyi hai 
        this.length++;
    }
}
let myList = new LinkedList(10)
myList.add(16)
myList.add(20)
myList.add(23)

myList.prepend(3)

console.log(myList)
