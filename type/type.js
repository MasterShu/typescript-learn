// boolean
var isDone = false;
// number
var decimal = 6;
var hex = 0xf00d;
var binary = 5;
var octal = 484;
// String
var color = 'red';
color = 'blue';
// template string
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n    I'll be " + (age + 1) + " years old next month.";
// Array
var list = [1, 2, 3];
// second way
var lists = [1, 2, 3];
// Tuple
// Declare a tuple type
var x;
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error
console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
var c = Color.Blue;
console.log(c);
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Blue"] = 2] = "Blue";
    Color1[Color1["Green"] = 3] = "Green";
})(Color1 || (Color1 = {}));
var c1 = Color1.Blue;
console.log(c1);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Blue"] = 3] = "Blue";
    Color2[Color2["Green"] = 4] = "Green";
})(Color2 || (Color2 = {}));
var c2 = Color2.Blue;
console.log(c2);
