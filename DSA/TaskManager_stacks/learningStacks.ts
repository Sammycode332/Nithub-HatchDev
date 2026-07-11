// Stack Pop and push
// Create a Stack class
// we create two methods push and pop

// in the class we create a pointer initialized to -1
// we create an array within the class tht houses the data

// in the push operation we add an  element  
class Stack{
    stackArray: number[] = []
    pointer = -1

    push(value: number){
        this.pointer +=1
        this.stackArray.push(value)
    }
    pop(): undefined | number{
        if(this.pointer === -1) return undefined;
        this.pointer -=1
        return this.stackArray.pop()
    }
    top(){
        if(this.pointer === -1) return undefined;
        return this.stackArray[this.pointer]
    }

    isEmpty(){
        return this.pointer === -1
        // return this.stackArray.length ===0
    }
}

const stack = new Stack()
console.log(stack.pop())

stack.push(21)
stack.push(5)
stack.push(22)

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
