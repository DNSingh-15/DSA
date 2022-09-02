// Queue -- FIFO
// queue is an ordered/sequential list of elements based on FIFO

class Queue {
    constructor() {
        this.items = [];
    }

    // add element to the queue
    enqueue(element) {
        return this.items.push(element);
    }

    // remove element from the queue
    dequeue() {
        return this.items.shift();
    }

    // view the last element
    peek() {
        return this.items[this.items.length - 1];
    }

    // the size of the queue
    size() {
        return this.items.length;
    }
}

let queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(8);
console.log(queue.items);

queue.dequeue();
console.log(queue.items);

console.log(queue.peek());

console.log(queue.size());
