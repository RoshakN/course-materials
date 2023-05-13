# Functional Programming

In programming, there are 2 major styles of writing code. Of course there are other methods such as Procedural Programming, but the main 2 methods are:

1. Functional Programming (FP)
2. Object Oriented Programming (OOP)

No matter how you write the code, the result can still be the same, that is why FP and OOP are called `styles`.

## Functional Programming

There is a clear distinction between data and functions in functional programming as data can exist outside of functions.

In Functional Programming `Data` and `Function` are separated.

```js
function getDistance(mph, h) {
  return mph * h;
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);
```

One of the main advantages of FP is that the return of a fucntion can be used inside another function.

All functions as a default return `undefined` value if not specifically told to return something. For example the `console.log()` method doesn't have a set value and just logs something to the console.

But if we do specify a return value, that value can be used in other functions.

```js
function getDistance(mph, h) {
  return mph * h;
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance); // <====== THIS HERE!
```

## Object Oriented Programming

In Object Oriented Programming we group data and functionality as properties and methods inside objects. In OOP, methods **update** properties stored in the object instead of generating new return values.

For example, if I have a virtualPet object, I can give it a sleepy property and a nap() method:

```js
var virtualPet = {
  sleepy: true,
  nap: function () {},
};
```

If I check the `sleepy` property on the `virtualPet` object, I can confirm that it's set to `true`.

However, once I've ran `the nap()` method on the `virtualPet` object, will the `sleepy` property's value change?

```js
//creating an object
var virtualPet = {
  sleepy: true,
  nap: function () {
    this.sleepy = false;
  },
};
console.log(virtualPet.sleepy); // true
virtualPet.nap();
console.log(virtualPet.sleepy); // false
```

Object Oriented Programming will be discussed at length later on. For now it suffices to know that the Functional Programming paradigm works by keeping the data and functionality separate. It's counterpart, OOP, works by keeping the data and functionality grouped in meaningful objects.

## Concepts of Functional Programming

There are many more concepts and ideas in functional programming. Here are some of the most important ones:

- First-class functions
- Higher-order functions
- Pure functions and side-effects

There are many other concepts and priciples in functional programming, but for now, let's stick to these three.

### First Class Functions

First class functions means that a function in JavaScript is just another value that we can:

- pass to other functions
- save in a variable
- return from other functions

In other words, a function in JavaScript is just a value - from this vantage point, almost no different than a string or a number. In JavaScript, it's perfectly normal to pass a function invocation to another function.

To explain how this works, consider the following program.

```js
function addTwoNums(a, b) {
  console.log(a + b);
}

function randomNum() {
  return Math.floor(Math.random() * 10 + 1);
}
function specificNum() {
  return 42;
}

var useRandom = true;

var getNumber;

if (useRandom) {
  getNumber = randomNum;
} else {
  getNumber = specificNum;
}

addTwoNums(getNumber(), getNumber());
```

Based on the `useRandom` being set to `true` or `false`, the getNumber variable will be assigned either the `randomNum()` function declaration or the `specificNum()` function declaration.

### Higher Order Functions

A higher-order function is a function that has either one or both of the following characteristics:

- It accepts other functions as arguments
- It returns functions when invoked

There's no "special way" of defining higher-order functions in JavaScript. It is simply a feature of the language. The language itself allows me to pass a function to another function, or to return a function from another function.

Continuing from the previous section, consider the following code, in which I'm re-defining the `addTwoNums()` function so that it is a higher-order function:

```js
function addTwoNums(getNumber1, getNumber2) {
  console.log(getNumber1() + getNumber2());
}
```

You can think of the above function declaration of `addTwoNums` as describing how it will deal with the `getNumber1` and `getNumber2` inputs: once it receives them as arguments, it will then attempt invoking them and concatenating the values returned from those invocations.

```js
addTwoNums(specificNum, specificNum); // returned number is 84
addTwoNums(specificNum, randomNum); // returned number is 42 + some random number
```

### Pure Functions and Side-effects

A pure function returns the exact same result as long as it's given the same values. An example of a pure function is the `addTwoNums()` function from the previous section:

```js
function addTwoNums(a, b) {
  console.log(a + b);
}
```

This function will always return the same output, based on the input. For example, as long as we give it a specific value, say, a `5`, and a `6`:

```js
addTwoNums(5, 6); // 11
```

The output will always be the same.

Another rule for a function to be considered pure is that it should not have side-effects. A side-effect is any instance where a function makes a change outside of itself. This includes:

- Changing variable values outside of the function itself, or even relying on outside variables

- Calling a Browser API (even the console itself!)

- Calling `Math.random()` - since the value cannot be reliably repeated
