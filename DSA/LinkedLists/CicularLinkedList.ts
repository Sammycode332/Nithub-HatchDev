class CircularNode{
    value: any;
    next: CircularNode | null = null;
    constructor(value:any){
        this.value= value;
    }
}
class SinglyCircularLinkedList{
    head: CircularNode | null = null;
    tail : CircularNode | null = null;
    length: number = 0;

    constructor(value: any){
        const newNode = new CircularNode(value);
        this.head = newNode
        this.tail = newNode

        this.tail.next = this.head
        this.length =1
    }

    append(incomingValue: any){
        const newNode = new CircularNode(incomingValue)
        if(this.tail){
            this.tail.next = newNode
            this.tail = newNode
            newNode.next = this.head
        } else {
            this.head = newNode
            this.tail = newNode
            newNode.next = newNode
        }
        this.length++
    }
    prepend(incomingValue: any){
        const newNode = new CircularNode(incomingValue);
        newNode.next = this.head;
        this.head = newNode;
        if(this.tail) {
            this.tail.next = newNode
        } else {
            this.tail = newNode
            newNode.next = newNode
        }
        this.length++
    }
    printList(){
        if(!this.head) return [];
        const array = [];
        let currentNode = this.head!;

        do{
            array.push(currentNode.value);
            currentNode = currentNode.next!; 
        }while(currentNode !== this.head);

        return array
    }
    traverseToIndex(index: number): CircularNode{
        const actualIndex = index % this.length
        let counter = 0;
        let currentNode = this.head;

        while(counter!==index && currentNode !=null){
            currentNode = currentNode.next
            counter++
        }
        return currentNode!
    }
    insert(index: number,value:any){
        if(index === 0){
            this.prepend(value)
        }
        if(index >= this.length){
            this.append(value)
            return;
        }
        const newNode = new CircularNode(value);
        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next;

        leader.next = newNode
        newNode.next = holdingPointer

        this.length++
    }
    remove(index:number){
        if(index < 0 || index >=this.length) return;
        if(index === 0){
            if(this.length ===1){
                this.head = null
                this.tail = null
            }else{
                this.head = this.head!.next; // Move head forward
                this.tail!.next = this.head; // Complete the circle!
            }
        this.length--;
        return;
        }
        const leadingNode = this.traverseToIndex(index - 1);
        const nodeToDelete = leadingNode.next;
    
    leadingNode.next = nodeToDelete!.next;
    if (index === this.length - 1) {
        this.tail = leadingNode;
    }

    this.length--;

    }
    reverse() {
        if (!this.head || this.length <= 1) return;

        let prev = this.tail!; // The head will eventually point back to the tail
        let current = this.head;
        let nextNode = null;

       
        for (let i = 0; i < this.length; i++) {
            nextNode = current.next!;
            current.next = prev; 
            prev = current;     
            current = nextNode;
        }


        const oldHead = this.head;
        this.head = this.tail;
        this.tail = oldHead;
    }
}
const circularList = new SinglyCircularLinkedList(10);
circularList.append(20);
circularList.append(30);
circularList.prepend(5);

console.log("Original Circular List:", circularList.printList()); 
// Expected output: [5, 10, 20, 30]

circularList.reverse();
console.log("Reversed Circular List:", circularList.printList()); 
// Expected output: [30, 20, 10, 5]