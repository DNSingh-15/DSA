
const treeify = require("treeify")

class Node {
    constructor(value) {
        this.value = value 
        this.left =  null
        this.right =  null
    }
}


class BST {
    constructor() {
        this.root =  null
    }

    insert(value){
        const newNode = new Node(value)
        if(!this.root){
            this.root = newNode
            return this
        }
        let current = this.root;
        while(true){
            if (value < current.value){
                if(!current.left ){
                    current.left = newNode
                    return this
                }
                current = current.left
            } 
            else if (value > current.value){
                if(!current.right){
                    current.right = newNode
                    return this 
                }
                current = current.right
            }
        }
    }
}
let tree = new BST()
// tree.root = new Node(20)

tree.insert(20)
tree.insert(10)
tree.insert(30)
tree.insert(25)
tree.insert(32)
tree.insert(5)
tree.insert(35)
tree.insert(12)
tree.insert(15)

console.log(treeify.asTree(tree, true))