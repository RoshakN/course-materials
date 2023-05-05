# Conditionals and Loops

The most common conditional statement is the `if` statement. It workes by deciding if the condition described in the statement is `true` or `false`.

```js
if (condition == true) {
  console.log("Condition is true");
}
```

The `if` conditional statement also has other options like `else` and `else if`.

```js
const variable = 16;
if (variable > 30) {
  console.log("Variable is too big.");
} else if (variable < 10) {
  console.log("Variable is too small.");
} else {
  console.log("Variable is just right.");
}
```

The `if` conditional statement is good enough for smaller situations, but when the condition has multiple possible values, writing a long `if` statement can be tiresome. In which case we can use the `switch` statement. The syntax is as follows.

```js
const variable = "Oranges";

switch (variable) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${variable}.`);
}
```
