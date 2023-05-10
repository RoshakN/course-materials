# The Spread Operator
The spread operator basically unpacks all the elements of an array. This is specially usefull when we want to add some data to the beginning of an array and store it in a new array.

Syntax:
```js
const arr = [4, 5, 6];
const newArr = [1, 2, 3, ...arr];
// newArr = [1, 2, 3, 4, 5, 6]
// spread operator is ... followed by the array we want to spread.
```
If we don't use spread and instead just write the array's name, it would look like this:
```js
const newArr = [1, 2, 3, arr];
// newArr = [1, 2, 3, [4, 5, 6]]
// so, just a nested array inside of another array
```
We can also use spread operator whenever we need an array's elements individually. for example:
```js
console.log(newArr);
// the output: [1, 2, 3, 4, 5, 6]
console.log(...newArr);
// the output: 1 2 3 4 5 6
```
## Main usecases of Spread Operator
Spread operator has 2 main usecases which are to make shallow copies of arrays, and merge 2 arrays together.
### Copy Arrays with Spread Operator
```js
const newArrCopy = [...newArr];
```
### Merge 2 Arrays
```js
const mergedArr = [...arr, ...newArr];
```

### Difference between Spread Operator and Destructuring
By using spread operator, we don't create new variables for all the elements of the array, but in Destructuring, we do.

Therefor we can only use spread operator in situations that we would therwise use values separated by commas.

