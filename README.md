# typescript-intro

Let's learn some typescript!

Learning along with Udemy to start before I apply this learing to a new project.

## Types
Existing types are going to be javascript types
number - all numbers, no integers, floats, doubles, etc
string - text 'hello world', "hello world", `` as well
boolean - true, false
Array - [1,2,3], can be flexible or strict
Typle - [1, 2], added with typescript, fixed length array
Enum - enum { THING, OTHER_THING } - added with typescript, automatically enumerated global constant identifiers
Any - * - any kind of value. Use as sparingly as possible, really defeats the purpose of this thing

## Type Aliases & Object Types
Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

For example:

type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; // this works!
This allows you to avoid unnecessary repetition and manage types centrally.

For example, you can simplify this code:

function greet(user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}
To:

type User = { name: string; age: number };
 
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}

## Assignment note
Typescript can infer assignment, so let thing = 5; would infer a number at initialization.
If you are not assigning when a variable is created, let thing;, then it's good practice to set the type, let thing: number;