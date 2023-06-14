# Optional Chaining

Objects in JavaScript give us the option of chaining multiple nested objects or methods using just a `.` but what if one of the methods or nested objects doesn't exist? Then the whole code would get an error.

Optional Chaining solves this problem. It is essentially a `?` after each method or nested object that we are suspecious of existing. If it doesn't exist, we'll get `undefined`, if it exists, next chained option will be read.

```js
console.log(restaurant.openingHours?.mon?.open);
```

Here we are checking 2 things. If `openingHours` object exists, and if `mon` object exists after that. If they both do exist, then `open` property will be checked.

Note that optional chaining can be used for methods and arrays as well(check Jonas videos).

## Using Optional Chaining with Logical Operators

These two concepts were introduced together because they were meant to be used together. Like so:

```js
console.log(restaurant.order?.(0, 1)) ?? "Method does not exist";
```

This checks if the `order` methods exists or not. If it does, it will run with `0, 1` parameters. If it doesn't exist, the string "Method does not exist" will print to the console.

> Nullish values means only `undefined` and `null`
