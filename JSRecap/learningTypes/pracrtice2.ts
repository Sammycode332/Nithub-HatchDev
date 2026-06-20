interface Human {
    name: string
    age: number
    race: string
}

abstract class Person implements Human{
    name: string
    age: number
    race: string
    alive:boolean = true

    mortality(){
        this.alive != this.alive
        console.log("You are dead man")
    }

    constructor(name:string,age:number,race:string){
        this.name = name
        this.age = age
        this.race = race
    }
}
class Nigerian extends Person{
    constructor(name:string,age:number){
        super(name,age,"black")
    }
}
class American extends Person{
    constructor(name:string,age:number){
        super(name,age,"white")
    }
}

let Jeff = new Nigerian("Jeff",20)
console.log(Jeff.alive)
Jeff.mortality()
console.log(Jeff.alive)
