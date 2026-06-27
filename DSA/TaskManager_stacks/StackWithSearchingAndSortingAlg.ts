// implementing stacks but with efficient time complexity

interface Task{
    id: number
    title: string
    priority:number
}

class TaskManager{
    private tasks: Task[] = []

    //Adding of tasks
    public addTask(id:number,title: string, priority: number): void{
        const newTask : Task = {id,title,priority};
        this.tasks.push(newTask)
        console.log(`Added: '${title}'`)
    }
    //this thae O(n) thatswhy it is bad using linear search
    public slowSearchByID(targetId: number): Task | null{
        for(let i=0;i< this.tasks.length;i++){
            if(this.tasks[i].id === targetId){
                return this.tasks[i]
            }
        }
        return null
    }
    // this uses O(logn) - using binary searcj
    public goodSearchByID(targetID: number): Task| null{
        this.tasks.sort((a,b) => a.id -b.id);
        let left = 0;
        let right = this.tasks.length-1

        while(left<=right){
            let mid = Math.floor((left+right)/2) //getting the average
            let currentTask = this.tasks[mid]

            if(currentTask.id === targetID) {
                return currentTask;
            }else if(currentTask.id < targetID){
                left = mid+1
            }else{
                right = mid-1
            }
        }
        return null
    }
    public JumpSearch(targetId: number): Task| null{
        let step = Math.floor(Math.sqrt(this.tasks.length))
        let prev = 0
        let curr = step

        while(curr < this.tasks.length && this.tasks[curr].id < targetId){
            prev = curr
            curr = curr + step
        }
        for(let i = prev;i<=curr;i++){
            if(this.tasks[i].id=== targetId){
                return this.tasks[i]
            }
        }
        return null
    }

    //sort by priority method using O(nlogn)

    public SortByPriority():void{
        this.tasks.sort((a,b)=>b.priority-a.priority)
    }
    public printTasks():void{
        console.log("\n---Current Task List ---")
        this.tasks.forEach(t=>console.log(`[ID: ${t.id}] ${t.title}- Priority:${t.priority}`))
        console.log('----------------\n')
    }
}


// Initialising the Task manager();

const manager = new TaskManager()

manager.addTask(1, "Watch a world cup match",3)
manager.addTask(10, "Watch Netflix",2)
manager.addTask(467, "Read",1)
manager.addTask(122, "Go for HatchDev",3)
manager.addTask(102, "Play Game",2)
manager.addTask(419, "Watch the dishes",2)
manager.addTask(67, "Buy Coffee",3)
manager.addTask(69, "Attend  meeting by 6pm",3)
manager.addTask(300, "Attend Maths class by 3pm",3)

console.log("Printing Tasks")
manager.printTasks()
// sorting
console.log("Sorting the tasks by highest priority")
manager.SortByPriority()
console.log("printing after sorting")
manager.printTasks()
//Searching
console.log("Searching For ID- 419")
const foundTask = manager.goodSearchByID(419)
console.log(foundTask)
const foundTaskSame = manager.slowSearchByID(419)
console.log(foundTaskSame)
const foundTaskSame2 = manager.JumpSearch(419)
console.log(foundTaskSame2)
console.log("Searching For ID -102")
const foundTask2 = manager.goodSearchByID(102)
console.log(foundTask2)
const foundSameTask2 = manager.slowSearchByID(102)
console.log(foundSameTask2)
const foundSameTask_2 = manager.JumpSearch(102)
console.log(foundSameTask_2)
console.log("Searching For ID -1")
const findTask3 = manager.goodSearchByID(1)
console.log(findTask3)
const findSameTask3 = manager.slowSearchByID(1)
console.log(findSameTask3)
const findSameTask_3 = manager.JumpSearch(1)
console.log(findSameTask_3)


// Take home Project create an ecommerce shopping cart