class Queue{
    queueArray: number[] = [];
    enqueue(value: number){
        this.queueArray.push(value)
    }
    dequeue(): undefined | number{
        if(this.queueArray.length === 0){
            return undefined;
        }
        return this.queueArray.shift()
       // shift is 0(N) because it solw
    }
    peek(): undefined| number{
         if(this.queueArray.length === 0){
            return undefined;
        }
        return this.queueArray[0]
    }
    isEmpty(){
        return this.queueArray.length === 0
    }
    size() : number{
        return this.queueArray.length
    }
}
// --- ARRAY QUEUE TEST CASES ---

const myQueue = new Queue();

console.log("--- Initial State ---");
console.log("Is queue empty?", myQueue.isEmpty()); // Expected: true
console.log("Queue size:", myQueue.size());        // Expected: 0
console.log("Peek front:", myQueue.peek());        // Expected: undefined

console.log("\n--- Enqueueing Items (Entering the line) ---");
myQueue.enqueue(100);
myQueue.enqueue(200);
myQueue.enqueue(300);

console.log("Peek front (First in line):", myQueue.peek()); // Expected: 100
console.log("Queue size:", myQueue.size());                // Expected: 3
console.log("Is queue empty?", myQueue.isEmpty());         // Expected: false

console.log("\n--- Dequeueing Items (Leaving the line) ---");
console.log("Dequeued:", myQueue.dequeue()); // Expected: 100 (First one in is first one out!)
console.log("Peek new front:", myQueue.peek()); // Expected: 200
console.log("Dequeued:", myQueue.dequeue()); // Expected: 200

console.log("\n--- Edge Cases ---");
console.log("Dequeued:", myQueue.dequeue()); // Expected: 300 (Queue is now empty)
console.log("Dequeued from empty queue:", myQueue.dequeue()); // Expected: undefined
console.log("Final size:", myQueue.size()); // Expected: 0