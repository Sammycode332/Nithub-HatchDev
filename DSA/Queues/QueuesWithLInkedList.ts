class QueueNode{
    value: number;
    next : QueueNode | null = null;
    constructor(value: number){
        this.value = value
    }
}
class QueueList{
    head: QueueNode | null
    tail: QueueNode | null
    length: number
    constructor(value:any){
        this.head = new QueueNode(value)
        this.tail = this.head
        this.length = 1
    }
    enqueue(value: any){
        const newNode = new QueueNode(value)
        if(this.tail){
            this.tail.next = newNode
        }
        this.tail = newNode
        this.length++
    }
    dequeue(): undefined | number{
        if(this.head === null){
            return undefined;
        }
        const temp = this.head.value
        this.head = this.head.next
        this.length--
        return temp
    }
    peek(){
        if(this.head === null){
            return undefined
        }
        return this.head.value
    }
    isEmpty(): boolean{
        return this.head === null;
    }
    size(): number{
        return this.length
    }
}
// --- LINKED LIST QUEUE TEST CASES ---

// 1. Start with 10 in the queue (Style A)
const myQueueList = new QueueList(10);
console.log("--- Initial State ---");
console.log("Peek Front:", myQueueList.peek()); // Expected: 10
console.log("Size:", myQueueList.size());       // Expected: 1
console.log("Is Empty?:", myQueueList.isEmpty()); // Expected: false

console.log("\n--- Enqueueing 20 and 30 ---");
myQueueList.enqueue(20);
myQueueList.enqueue(30);
console.log("Peek Front:", myQueueList.peek()); // Expected: 10 (10 is still first in line)
console.log("Size:", myQueueList.size());       // Expected: 3

console.log("\n--- Dequeueing Items ---");
console.log("Dequeued:", myQueueList.dequeue()); // Expected: 10
console.log("Peek New Front:", myQueueList.peek()); // Expected: 20
console.log("Dequeued:", myQueueList.dequeue()); // Expected: 20
console.log("Dequeued:", myQueueList.dequeue()); // Expected: 30

console.log("\n--- Empty Queue Edge Cases ---");
console.log("Dequeued from empty:", myQueueList.dequeue()); // Expected: undefined
console.log("Is Empty now?:", myQueueList.isEmpty());      // Expected: true
console.log("Final Size:", myQueueList.size());            // Expected: 0