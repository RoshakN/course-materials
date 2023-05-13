# Recursive Functions

A recursive function is a function that calls itself until it doesn’t. And this technique is called recursion. A recursive function always has a condition to stop calling itself. Otherwise, it will call itself indefinitely. So a recursive function typically looks like the following:

```js
let counter = 3;
let example = function () {
  console.log(counter);
  counter = counter - 1;
  if (counter === 0) {
    return;
  } else {
    example();
  }
};
example();
```
