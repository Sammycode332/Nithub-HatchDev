//when we use a liked list to build stack we add and remove from the head(front) because adding or removing fromthr fron takes O(1) time

class StacksLLV{
    value: any
    next: StacksLLV | null = null
    constructor(value:number){
        this.value = value
    }
}
class StacksWithLinkedList {
    head : StacksLLV | null
    // you dont need a tali because stacks just allow is to add to the top
    length: number

    constructor(value: any){
        this.head = new StacksLLV(value)
        this.length = 1
    }
    push(incomingValue:any): void{
        const newNode = new StacksLLV(incomingValue)
        newNode.next =this.head
        this.head = newNode
        this.length++
    }
    pop(){
        if(this.head === null){
            return undefined;
        }
        const temp = this.head
        this.head = this.head.next
        this.length--
        return temp.value
    }
    peek(): any | undefined{
        if(this.head === null){
            return undefined;
        }
        return this.head.value;
    }
    isEmpty(): boolean{
        return this.head === null;
    }
}

// --- TEST CASES ---

// 1. Initialize the stack with a starting value
const myStack = new StacksWithLinkedList(10);
console.log("Initial Top (Peek):", myStack.peek()); // Expected: 10
console.log("Initial Length:", myStack.length);    // Expected: 1

console.log("\n--- Pushing Items ---");
// 2. Push new values onto the stack
myStack.push(20);
myStack.push(30);
console.log("Top after pushing 20 and 30:", myStack.peek()); // Expected: 30
console.log("Current Length:", myStack.length);              // Expected: 3

console.log("\n--- Popping Items ---");
// 3. Pop values off the stack
console.log("Popped:", myStack.pop()); // Expected: 30
console.log("Popped:", myStack.pop()); // Expected: 20

console.log("\n--- Checking State ---");
// 4. Check remaining item
console.log("Current Top (Peek):", myStack.peek()); // Expected: 10
console.log("Is stack empty?", myStack.isEmpty());  // Expected: false

console.log("\n--- Emptying the Stack ---");
// 5. Pop the last remaining item
console.log("Popped:", myStack.pop()); // Expected: 10

// 6. Test edge case: Popping from an empty stack
console.log("Popping from empty stack:", myStack.pop()); // Expected: undefined
console.log("Is stack empty now?", myStack.isEmpty());   // Expected: true