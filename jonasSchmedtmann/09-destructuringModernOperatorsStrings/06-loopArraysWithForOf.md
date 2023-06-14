# Loop Arrays with For-Of

Until now we used the `for` or `while` loop to work with all the components of an array, but with those methods we have to make a `counter` variable and update it in every loop and that's a lot of work. The `for of` loop makes this process easy.

The syntax is quite easy. Note that the `item` variable can be named anything and is just representing the value in each iteration.

```js
for (const item of ourArray) {
  //code to run
  // for example, console log
  console.log(item);
}
```

If our statement is just one line like the example above, we don't even have to create a code block.

```js
for (const item of ourArray) console.log(item);
```

Keep in mind that with the `for of` loop we can still use `continue` and `break` keywords.

---

If we want the index of items in an array, we can use the `entries` method on our array.

```js
for (const item of ourArray.entries()) {
  console.log(item);
}
```

This way, all the items in our array will be shown as an independant array consisting of the index and the data.

## Loopping Over An Object (as Array)

In JS we can also loop over an object with `for-of`, but we have to convert it into an array first.

### Loop Over Property Names

If we want to loop over the property names of the object, we have to use `Object.keys` method. For the property values, we must use `Object.values` method.

```js
const properties = Object.keys(ourObject);
// properties is an array consisting of all the property names of the object, which we can loop over.
for (const name of properties) {
  console.log(day);
}
```

### Loop Over Property Values

The same syntax can be used to loop over property values, with a small change to the method used.

```js
const values = Object.values(ourObject);
for (const value of values) {
  console.log(value);
}
```

### Loop Over Both Property Names And Values

To make an array of both the names and values of object properties, we can use the `Object.entries` method.

```js
const entries = Object.entries(ourObject);
for (const x of entries) {
  console.log(x);
}
```

We can use destructuring instead of just putting everything inside the `x` array. Like so:

```js
const entries = Object.entries(ourObject);
for (const [key, value] of entries) {
  console.log(x);
}
```

We can even take one more step to simplify our code. By destructuring `value` object into its building properties.

```js
const entries = Object.entries(ourObject);
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}.`);
}
```

Here I am using the restaurant object from Jonas' course as an example.
