//Challenge:

//Create a type alias User
type User = {
    id: number,
    name: string,
    isAdmin: boolean
}

//Create a function type alias Logger (accepts string, return void)
type Logger = (msg: string) => void;

//Create a union type Input
type Input = string | number;

//Create a function processInput
function processInput (input: Input): void {
    if (typeof input === "string") {
        console.log(input.toUpperCase());
    } else {
        console.log(input);
    }
} 