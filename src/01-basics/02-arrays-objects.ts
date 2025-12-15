/*
Array challenge:
Declare an array of numbers
Declare an array of strings
Declare a mixed array using union types
*/

let scores: number [] = [10, 20, 30];
let faveSongs: string [] = ["August", "Hey, Jude"];
let mixed: (number | string) [] = ["Jessa", 20];

/*
Object challenge:
Declare an object representing a Student with:
name (string)
age (number)
course (string)
*/

//Add a readonly property to the course,
//Add optional (?) to the studentId

let student: {name: string; age: number; readonly course: string; studentId?: number} = {
    name : "Jessa",
    age : 20,
    course : "IT",
}

/*
Nested challenge:
Create an object with fields:
artist, 
list of his/her songs
*/

let classroom: {
    artist: string;
    songs: string [];
} = {
    artist: "Taylor",
    songs: ["All too well", "Back to December", "Guilty as sin"]
};
