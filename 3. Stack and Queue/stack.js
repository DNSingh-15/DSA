// stack -- FIFO
// stack normally is a structure of sequential elements and based on FIFO

class Stack {
    constructor() {
        this.stack = [];
    }
    push(item) {
        this.stack.push(item);
    }
    pop() {
        this.stack.pop();
    }
}
let st = new Stack()

st.push(1)
st.push(2)
st.push(3)

st.pop()

console.log(st)