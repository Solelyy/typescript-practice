/*
Create an interface called Profile:
username (string)
age (number)
*/

interface Profile {
    username: string,
    age: number
}

//Extend Profile into AdminProfile (add permissions: string[])

interface AdminProfile extends Profile {
    permissions: string[]
}

//Create a type called Result ("success" | "error")
type Result = "success" | "error";

/*Create a function type alias Callback
accepts Result, returns void 
*/

type Callback = (result: Result) => void;


