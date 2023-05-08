# Functions in JavaScript

Functions are sets of code we define in a program to always run in the same way (when called).

### Advantages of Using Functions

One of the most important principles of programming is the acronym `DRY` or Don't Repeat Yourself. Functions help facilitate this principle by declaring a set of code and bundle it up to be called when needed.

## How to Declare Functions

There are 3 main methods of declaring functions in JavaScript. In total there are 6 methods, but I've only learned 3 so far.

1. Function Declaration
2. Function Expression
3. Arrow Function

### Function Declaration

Functions declared by this method will be hoisted and are sometimes prefered by programmers. The syntax is as follows:

```js
function nameOfFunction(parameters) {
  // Code
}
```

An example for a fucntion that adds two parameters:

```js
function addTwoNums(a, b) {
  return a + b;
}
```

## How to Call or Invoke Functions

Functions don't run on their own and are just a set of predefined code lines. To run the code, you should call them.

To call the function from earlier, use the following syntax:

```js
addTwoNums(2, 3);
// The result would be 5
```
