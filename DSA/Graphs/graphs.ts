

class Graphs{
    numberOfNodes: number;
    adjacentList: Record<string, string[]>
    constructor(){
        this.numberOfNodes= 0
        this.adjacentList = {}
    }
    addVertex(node: string){
        if(!this.adjacentList[node]){
            this.adjacentList[node]=[];
            this.numberOfNodes++;
            return this.adjacentList
        }

        return "Node already exists"
    }
    addEdge(node1: string, node2: string){
        //undirected graph

        if(!this.adjacentList[node1] || !this.adjacentList[node2]){
            return "Both nodes have to exist"
        }
        this.adjacentList[node1].push(node2)
        this.adjacentList[node2].push(node1)
        return this.adjacentList
    }
    showConnections(){
        const allNodes = Object.keys(this.adjacentList);
        for(let node of allNodes){
            let nodeConnections = this.adjacentList[node];
            let connections = ""
            let vertex;
            for(vertex of nodeConnections){
                connections+= vertex + " ";
            }
            console.log(node + "--->" + connections)
        }
    }
    bfs(startNode: string): string[]{
        const result: string[] =[]

        const visited = new Set<string>();

        const queue: string[] = [];

        visited.add(startNode);
        queue.push(startNode);


        return result;
    }
}
//Assignment: Learn how to implement an adjacency matrix'

const myGraph = new Graphs()
myGraph.addVertex("0")
myGraph.addVertex("1")
myGraph.addVertex("2")
myGraph.addVertex("3")

myGraph.addEdge("0","2");
myGraph.addEdge("1","2");
myGraph.addEdge("2","3");
myGraph.addEdge("1","3");

myGraph.showConnections()


// build a webline that alloes people to see the shortest path oon campus between two point actual paths

// implement adjacent matrix of graphs