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
