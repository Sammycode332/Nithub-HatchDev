class LinkedListNodes{
    value:any;
    next: LinkedListNodes | null = null;
    prev: LinkedListNodes |null = null;
    constructor(value: any){
        this.value = value;
    }
}
class LinkedLists{
    head : LinkedListNodes | null;
    tail : LinkedListNodes | null;
    length: number;
    constructor(value: any){
        this.head = new LinkedListNodes(value);
        this.tail = this.head
        this.length = 1
    }
    append(incomingValue: any){
        const newNode = new LinkedListNodes(incomingValue);
        if(this.tail){
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }
        this.tail = newNode
        this.length++
    }
    prepend(incomingValue:any){
        const newNode = new LinkedListNodes(incomingValue)
        newNode.next = this.head;
        if(this.head!==null){
            this.head.prev = newNode
        }  
        this.head = newNode
        this.length++
    }
    printList(){
        const array = []
        let currentNode = this.head;
        while(currentNode!==null){
            array.push(currentNode.value)
            currentNode = currentNode.next;
        }
    }
    printListReverse(){
        const array = [];
        let currentNode = this.tail;
        while(currentNode!==null){
            array.push(currentNode.value)
            currentNode = currentNode.prev;
        }
    }
    traversetoIndex(index:number): LinkedListNodes {
        const mid = Math.floor(this.length/2);
        let currentNode: LinkedListNodes | null;
        if(index < mid){
            let counter = 0;
            currentNode = this.head;
            while (counter !== index && currentNode !== null) {
                currentNode = currentNode.next;
                counter++;
            }
        }else{
            let counter = this.length - 1;
            currentNode = this.tail;
            while (counter !== index && currentNode !== null) {
                currentNode = currentNode.prev;
                counter--;
            }
        }
        if (currentNode === null) {
            throw new Error('Index out of bounds');
        }
        return currentNode;
    }
    insert(index: number, value: any){
        if(index == 0){
            this.prepend(value)
            return;
        }
        if(index>=this.length){
            this.append(value)
            return;
        }
        const newNode = new LinkedListNodes(value)
        const leader = this.traversetoIndex(index-1)

        const holdingPointer = leader.next
        if (!holdingPointer) return;

        leader.next = newNode
        newNode.prev = leader

        newNode.next = holdingPointer
        holdingPointer.prev = newNode

        this.length++
    }
    remove(index: number){
        if(index < 0 || index >= this.length) return;
        if(index === 0){
            this.head = this.head?.next?? null;
            if(this.head !==null){
                this.head.prev = null
            }
            if(this.length == 1) this.tail = this.head;
            this.length--
            return;
        }
        const leadingNode = this.traversetoIndex(index-1)
       
        const nodeToDelete = leadingNode.next
        if(!nodeToDelete) return;
        leadingNode.next = nodeToDelete.next
        if (nodeToDelete.next !== null) {
            nodeToDelete.next.prev = leadingNode;
        }
        
        if (index === this.length-1){
            this.tail = leadingNode;
            
        }
        this.length--
    }
    reverse(){
        let currentNode = this.head
        while(currentNode){
            let temp = currentNode.next;
            currentNode.next = currentNode.prev
            currentNode.prev = temp
            currentNode = currentNode.prev
        }
        let tempHead = this.head
        this.head = this.tail
        this.tail = tempHead
    }
}
// === TEST DRIVER SUITE ===

// 1. Instantiate the list with an initial value
console.log("--- Creating List ---");
const myList = new LinkedLists(10);
console.log(myList.printList()); // Expected: [10]

// 2. Test Append
console.log("\n--- Testing Append ---");
myList.append(20);
myList.append(30);
myList.append(40);
console.log("Forward:", myList.printList()); // Expected: [10, 20, 30, 40]
console.log("Backward:", myList.printListReverse()); // Expected: [40, 30, 20, 10]

// 3. Test Prepend
console.log("\n--- Testing Prepend ---");
myList.prepend(5);
console.log("Forward:", myList.printList()); // Expected: [5, 10, 20, 30, 40]

// 4. Test Traversal & Insert (Testing the middle optimization)
console.log("\n--- Testing Insert ---");
myList.insert(2, 15); // Squeezing 15 at index 2
console.log("Forward:", myList.printList()); // Expected: [5, 10, 15, 20, 30, 40]
console.log("Backward:", myList.printListReverse()); // Expected: [40, 30, 20, 15, 10, 5]

// 5. Test Remove
console.log("\n--- Testing Remove ---");
myList.remove(2); // Removing index 2 (the 15 we just added)
console.log("After removing index 2:", myList.printList()); // Expected: [5, 10, 20, 30, 40]

myList.remove(0); // Removing the head
console.log("After removing head:", myList.printList()); // Expected: [10, 20, 30, 40]

// 6. Test Reverse
console.log("\n--- Testing Reverse ---");
myList.reverse();
console.log("Forward after reverse:", myList.printList()); // Expected: [40, 30, 20, 10]
console.log("Backward after reverse:", myList.printListReverse()); // Expected: [10, 20, 30, 40]