type Prod = {
    name: string, 
    id: number, 
    price: number
}

//optional product
type OptionalProduct <T> = {
    [K in keyof T]?: T[K]
}

/* using built-in:
type OptionalProduct = Partial <Prod>;
*/

//readonly
type ReadonlyProduct <T> = {
    readonly [K in keyof T]: T[K]
}

//mutable
type MutableProduct <T> = {
    -readonly [K in keyof T]: T[K]
}

/*notes:
? -> make optional
-? -> make it required
readonly
-readonly -> make it mutable
*/ 