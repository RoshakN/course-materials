# De-structuring Arrays

Destructuring is basically a way for unpacking values from an array into several values, or in other words, to break a complex structure down to smaller data structures like variables.<br>

```javascript
const arr = [1, 2, 3];
// Destructuring the values stored in indexes to seperate and independant variables of a, b, and c:
const [a, b, c] = arr;
```
When we do destructuring, we are in fact making new variables. In this way, the original array doen't get affected and is still the same as before.<br>

If we don't need certain values of the array, we can simply leave the variable space for it empty:<br>
```javascript
const [d, , f] = arr;
// Now d equals 1, and f equals 3, but there's no variable for 2.
```
Destructuring also makes it easy to change two variables with eachother.
```javascript
const array = [dish#1, dish#2];
const [first, second] = array;
[second, first] = [first, second];
// Now the value stored in second is dish#1, and the value stored in first is dish#2.
```
When declaring the new variables for destructuring an array, we can give them default values. That comes in handy when the array is shorter than expected.
```js
const array = [8, 9];
const [a, b, c] = array;
/* Right now a=8, b=9, and c=endefined.
We don't want that. So we will define default values for the variables.*/
const [a=-1, b=-1, c=-1] = array;
// Now c=-1 after we run the code, and we know that means falsy or undefined value.
```
