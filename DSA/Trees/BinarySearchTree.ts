class TreeNode{
    val: any;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val: any){
        this.val = val;
        this.left = null;
        this.right = null;
    }
    //preordal trasversal its always root-legt-right
    preOrder(root: TreeNode | null, result: number[] = []): number[]{
        if(root === null){
            return result;
        }
        result.push(root.val)
        this.preOrder(root.left,result)
        this.preOrder(root.right,result)
        return result
    }
    inOrder(root: TreeNode | null, result: number[] = []): number[]{
        if(root === null){
            return result;
        }
        this.inOrder(root.left,result)
        result.push(root.val)
        this.inOrder(root.right,result)
        return result;
    }
    postOrder(root: TreeNode | null, result: number[] = []): number[]{
        if(root === null){
            return result;
        }
        this.postOrder(root.left,result)
        this.postOrder(root.right,result)
        result.push(root.val)
        return result;
    }
    bfs(root: TreeNode | null): number[]{
        const result: number[] = [];
        if(root === null){
            return result
        }
        const queue: TreeNode[]=[root]
        while(queue.length > 0){
            const currentNode = queue.shift()!;
            result.push(currentNode.val);
            if(currentNode.left){
                queue.push(currentNode.left)
            }
            if(currentNode.right){
                queue.push(currentNode.right)
            }
        }
        return result
    }
}

// learn how to insert and delete in a BST

const root = new TreeNode(10)
const leftChild = new TreeNode(5)
const rightChild = new TreeNode(15);
const newNode = new TreeNode(2)
root.left = leftChild
root.right = rightChild
leftChild.left = newNode

console.log("--- 🌲 Pre-Order (Root -> Left -> Right) ---");
// We pass 'root' as the starting point, and an empty array to collect values
console.log(root.preOrder(root, []));  
// Expected Output: [10, 5, 2, 15]

console.log("\n--- 🌲 In-Order (Left -> Root -> Right) ---");
console.log(root.inOrder(root, []));   
// Expected Output: [2, 5, 10, 15]

console.log("\n--- 🌲 Post-Order (Left -> Right -> Root) ---");
console.log(root.postOrder(root, [])); 
// Expected Output: [2, 5, 15, 10]