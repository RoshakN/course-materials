# Loops

Loops are used to do repetitive tasks in JavaScript. Loops are similar to conditionals in the sense that a condition must be satisfied for the loop to continue repeating. There are 2 main-stream ways to write looping code in JS.

1. `for` loop
2. `while` loop

### The For Loop

In the `for` loop, the `counter`, the `condition`, and the `incrementer` aare all written inside the loop code. The syntax is as follows:

```js
for (let i = 1; i >= 10; i++) {
  console.log(i);
}
```

### The While Loop

The `while` loop is very similar to the `for` loop, but there are a few differences. The first difference is that the `counter` value for `while` loop is defined and assigned outside the loop code.

```js
let counter = 3;
```

The second major difference is that only the `condition` is written inside the parentheses of `while` loop. As long as the condition returns `true`, the loop will repeat.

```js
let counter = 3;
while (counter > 0) {
  console.log(counter);
}
```

The third difference is that incrementation or decrementation of the counter has to be written as code inside the loop itself.

```js
let counter = 3;
while (counter > 0) {
  console.log(counter);
  counter = counter - 1;
}
```

## Nested Loops

text

```

```

```

```
