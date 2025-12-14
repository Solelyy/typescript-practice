//Types in TS

//string, number, boolean
let myName:string = "Jessa";
let age: number = 20;
let isIT: boolean = true;

console.log(`Hi, I'm ${myName}, I'm ${age} years old.`)

//type inference: typescript observes the type based on input, cannot reassign type after
let busy = true;

//any: not safe, type can be changed
let course: any = "Jessa";
course = 9;

//unknown: safer
let wish: unknown = "My wish is to have a successful and happy life.";

console.log(typeof wish === "string" ? `${wish}` : "Unknown.");

//void: function with no return
const msg = "HI!";
function greet(msg: string): void {
    console.log(msg);
}

//never: it never return like error message
function errorMsg (error: string): never {
    throw new Error(error);
}
