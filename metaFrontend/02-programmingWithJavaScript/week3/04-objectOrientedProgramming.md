# Object Oriented Programming

OOP or Object oriented programming is a paradigm used in many programming languages including JavaScript. OOP revolves around the idea of organizing our programs using objects to group related data and functionality.

In functional programming, we declare variables and functions separately, but in OOP we can declare an object with multiple properties including methods (functions).

OOP can make replicating real world objects and their attributes easier.

This is a purchase code written in Functional Programming style:

```js
let shoePrice = 100;
let stateTax = 1.2;
function totalPrice() {
  return shoePrice * stateTax;
}
totalPrice();
```

This is the same code written in Object Oriented Programming style:

```js
let shoe = {
  price: 100,
  stateTax: 1.2,
  totalPrice: function () {
    return this.price * this.stateTax;
  },
};
shoe.totalPrice();
```
