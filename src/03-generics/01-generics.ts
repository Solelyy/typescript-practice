/*
1. Generic Function wrapInArray
Accepts any type
Returns an array containing that value

2. Generic Interface ApiResult
data = generic type
error = string | null

3. Generic Class Queue
Stores items of generic type
Methods: enqueue(item: T), dequeue(): T | undefined, peek(): T | undefined
*/

function wrapInArray<T> (value: T): T[] {
    return [value];
}

interface ApiResult<T> {
    data: T,
    error: string | null
}

class Queue <T> {
    private items: T[] = [];

    enqueue(item:T): void {
        this.items.push(item);
    }

    dequeue(): T | undefined {
        return this.items.shift();
    }

    peek(): T | undefined {
        return this.items[0];
    }
}