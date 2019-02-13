// boolean
let isDone: boolean = false

// number
let decimal: number = 6
let hex: number = 0xf00d
let binary: number = 0b0101
let octal: number = 0o744

// String
let color: string = 'red'
color = 'blue'

// template string
let fullName: string = `Bob Bobbington`
let age: number = 37
let sentence: string = `Hello, my name is ${fullName}.
    I'll be ${ age + 1} years old next month.`

// Array
let list: number[] = [1, 2, 3]

// second way
let lists: Array<number> = [1, 2, 3]

// Tuple
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error

console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

// Enum
enum Color {Red, Blue, Green}
let c: Color = Color.Blue
console.log(c)

enum Color1 {Red = 1, Blue, Green}
let c1: Color1 = Color1.Blue
console.log(c1)

enum Color2 {Red = 1, Blue = 3, Green = 4}
let c2: Color2 = Color2.Blue
console.log(c2)

// Any
let notSure: any = 4
notSure = "maybe a string instead"
notSure = true

// you can also use by this way
let aList: any[] = [1, true, "free"]
aList[1] = 100

// Void
function warnUser(): void {
    console.log("This is my warning message");
}
// void is not useful, because it's just can assign undefined or null
let unusable: void = undefined
// Null and Undefined
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
// By default null and undefined are subtypes of all other types. But you can use --strictNullChecks

// Never
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}
// inferred return type is never
function fail() {
    return error("Something failed!")
}
// Function returning never must have UNreachable end point
function infiniteLoop(): never {
    while (true) {
        
    }
}

// Object
declare function create(o: object | null): void

create({prop: 0})
create(null)

create(123) // error
create('hello') // error
create(false) // error
create(undefined) // error

// Type assertions
// angle-bracket
let someValue: any = "this is a string"
let strLength: number = (<string>someValue).length
// as-syntax
let someValue1: any = "this is a string"
let strLength1: number = (someValue1 as string).length



