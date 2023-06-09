# Short Circuiting with AND + OR Operators
In fundamental lessons, we just use the AND (`&&`) and OR (`OR) operators to combine boolean values. But there's a lot more we can do.

There are 3 properties in logical operators that we will discuss in this lesson.
1. They can use any data type.
2. They can return any data type.
3. They can do short-circuiting (Short circuit evaluation).

## OR Operator
Short circuiting with OR operator means that the first truthy operand will be returned by the operation.
```js
console.log(3 || 'Roshak');
```
Both `3` and `'Roshak'` are truthy values. In fact they are not even `Boolean`, so just having a value makes them a truthy value. Therefore the first truthy value in this operation (which is `3`) will be printed to the console.

```js
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
```
The result will be:
```js
Jonas
true
null
```
Both `undefined` and `null` are falsy values, so what happened?

When none of the operands are truthy, the last falsy value will be returned.

### UseCase
When assigning new value to a variable, OR operator could come in handy if we don't know whether the variable exists already or not.

```js
const numberOfGuests = restaurant.numGuests || 10;
```
This checks first if the `numGuests` property exists in the `restaurant` object or not. If it does, the value will be stored in `numberOfGuests`, if not, the value of `10` will be stored in `numberOfGuests`.

## AND Operator
Short circuiting with AND operator works in the exact opposit way compared to OR. This means that `&&` operator short circuits as soon as it reaches the first falsy value.

```js
console.log(0 && 'Roshak');
```
`0` is a falsy value, therefore the AND operator short circuits, and the returned value will be `0`.

AND operator could easily replace an `if` statement. Instead of asking an `if` and then running the code, we can put them on both sides of an AND operator.
```js
if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinach')
}
```
Instead we can write:
```js
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
```
The first part checks if this method exists and the second part runs the method if it does.

## Nullish Coalescing Operator
We can also use the nullish coalescing operator or `??` instead of OR operator. The benefit of it is that `??` doesn't consider `0` a falsy value. This could come in handy if the default value of a variable is `0` or `''`, because then the OR operator would consider it falsy and short circuit.
```js
restaurant.numGuests = 0;
const numberOfGuests = restaurant.numGuests || 10;
console.log(numberOfGuests);
```
The return of this `||` operation will be 10.
```js
restaurant.numGuests = 0;
const numberOfGuests = restaurant.numGuests ?? 10;
console.log(numberOfGuests);
```
This operation will return `0`.

## Logical Assignment
We've already seen assignment shorthands like `sum = sum + 1` which could also be written as `sum += 1`.

The same can be done for logical operators. We will discuss this in this note.
### OR Assignment Operator
Imagine we want to check if an object property exists or not, and if it doesn't, give it a value.
```js
const restaurant = {
    name: 'Capri',
    owner: 'Giovanni'
}
restaurant.numGuests = restaurant.numGuests || 10;
```
This code uses short circuiting to check if `restaurant.numGuests` exists or not, and then assign the value of `10` to it if it doesn't.

The code can also be written as:
```js
restaurant.numGuests ||= 10;
```
### Nullish Assignment Operator
If the `restaurant.numGuests` was already set to `0` like before, we can also use `??` operator to solve the problem. This is known as **Nullish Assignment Operator**.
```js
restaurant.numGuests ??= 10;
```
### AND Assignment Operator
We can use AND assignment operator when we want to change the value of something if it **does** exist.

For example the `owner` property does exist in our object, so we can check for it and then change it using the AND Assignment Operator.
```js
restaurant.owner = restaurant.owner && '<Anonymous>';
```
This can change to `restaurant.owner &&= '<Anonymous>'`.
