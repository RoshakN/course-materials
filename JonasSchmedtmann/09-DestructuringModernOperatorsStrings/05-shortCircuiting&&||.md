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
