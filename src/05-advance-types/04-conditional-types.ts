/*
Mini Challenges:
1. Create IsNumber<T>
2. Create RemoveBoolean<T>
3. Create FunctionArgs<T> (extract function params)
*/

type IsNumber<T> = T extends number ? true : false;
type RemoveBoolean <T> = T extends boolean ? never : T;
type FunctionArgs<T extends (...args: any) => any> = 
T extends (...args: infer P) => any ? P : never; 

type A = IsNumber<number>;
//true

type B = RemoveBoolean<number | string |boolean>;
//number | string

type Fn = (a: number, b: string) => void;

type c = FunctionArgs<Fn>;
//[number, string]