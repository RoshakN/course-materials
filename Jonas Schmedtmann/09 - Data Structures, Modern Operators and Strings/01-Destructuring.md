# De-structuring

Destructuring is basically a way for unpacking values from an array into several values, or in other words, to break a complex structure down to smaller data structures like variables.<br>

```javascript
const arr = [1, 2, 3];
// Destructuring the values stored in indexes to seperate and independant variables of a, b, and c:
const [a, b, c] = arr;
```
When we do destructuring, we are in fact making new variables. In this way, the original array doen't get affected and is still the same as before.<br>

If we don't need certain values of the array, we can simply leave the variable space for it empty:
```javascript
const [d, , f] = arr;
// Now d equals 1, and f equals 3, but there's no variable for 2.
```
