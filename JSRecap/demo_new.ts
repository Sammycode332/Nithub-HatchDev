const fullName: string = "John Doe";
const age: number = 30;
console.log(`My name is ${fullName} and I am ${age} years old.`);

let newName: string = fullName;
function getname(): string {
    return fullName;
}
function setname(name: string): void {
    newName = name || "The King";
}
setname("Alice");
console.log(`My name is ${getname()} and I am ${age} years old.`);