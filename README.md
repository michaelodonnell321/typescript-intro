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

## Assignment note
Typescript can infer assignment, so let thing = 5; would infer a number at initialization.
If you are not assigning when a variable is created, let thing;, then it's good practice to set the type, let thing: number;