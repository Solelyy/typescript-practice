/* 
Create a config object using as const
Extract a union of its values
*/

const Role = {
    student: "student",
    professor: "professor"
} as const;

type RoleValues = typeof Role[keyof typeof Role];
//output: "student" | "professor"

let userRole: RoleValues;

userRole = "student";
userRole = "professor";