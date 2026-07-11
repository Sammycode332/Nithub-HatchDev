class LinkedListNode{
    value:any;
    next: LinkedListNode | null = null;
    constructor(value: any){
        this.value = value;
    }
}

class LinkedList {
    head: LinkedListNode | null;
    tail: LinkedListNode | null;
    length: number

    constructor(value: any) {
        this.head = new LinkedListNode(value);
        this.tail = this.head;
        this.length = 1;
    }
    append(incomingValue: any){
        const newNode = new LinkedListNode(incomingValue);
        if(this.tail){
            this.tail.next = newNode
        }
        this.tail = newNode
        this.length++
    }
    prepend(incomingValue:any){
        const newNode = new LinkedListNode(incomingValue);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    printList(){
        const array = []
        let currentNode = this.head;
        while(currentNode !==null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    insert(index:number,value:any){
        if(index === 0){
            this.prepend(value)
            return
        }
        if(index>=this.length){
            this.append(value)
            return;
        }
        const newNode = new LinkedListNode(value)

        const leader = this.traverseToIndex(index-1);

        const holdingPointer = leader.next

        leader.next = newNode

        newNode.next = holdingPointer

        this.length++
    }
    traverseToIndex(index: number): LinkedListNode{
        let counter = 0;
        let currentNode = this.head;

        while(counter!==index && currentNode !=null){
            currentNode = currentNode.next;
            counter++
        }

        return currentNode!
    }
    remove(index: number){
        if(index < 0 || index >= this.length) return;
        if(index === 0){
            this.head = this.head?.next ?? null;
            if(this.length === 1) this.tail = this.head;
            this.length--;
            return;
        }

        const leadingNode = this.traverseToIndex(index-1)
        const node_to_delete = leadingNode.next;
        if(!node_to_delete) return;

        leadingNode.next = node_to_delete.next;
        if(index === this.length - 1) this.tail = leadingNode;
        this.length--;
    }
    reverse(){
        let current = this.head;
        let previous = null
        while(current){
            let next = current.next
            current.next = previous;
            previous = current
            current = next
        }
        this.tail = this.head
        this.head = previous
    }
}

const firstLinkedList = new LinkedList(5)
console.log(firstLinkedList)
firstLinkedList.append(10)
console.log(firstLinkedList)
firstLinkedList.prepend(1)
console.log(firstLinkedList)
firstLinkedList.printList()
console.log(firstLinkedList)

//Assignment implement a doubly linked list and a circular linked list and circular doubly linked list 









