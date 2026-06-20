class Animal{
    static #type
    constructor(type){
        this.type = type
    }
    gettype(){
        return this.type
    }
    setType(type){
        this.#type = type;
    }
}

class cow extends Animal{
    constructor(){
        super(type)
        this.setType("cow")
    }
}
mycow = new cow()
