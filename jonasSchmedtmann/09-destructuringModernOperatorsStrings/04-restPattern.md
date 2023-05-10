# Rest Pattern
Rest pattern's syntax looks a lot like the spread operator, but unlike it, is used to condense multiple values together into an array.

The rest pattern is specially usefull when we want to assign certain elements of an array to 1 or 2 variables and then fit `the rest` inside an array.

It looks like this:

```js
const [a, b, ...others] = [1, 2, 3, 4, 5];
```
This would mean that `a = 1`, `b = 2`, and `others = [3, 4, 5]`.

The rest pattern collects the elements that are unused in a destructuring assignment.

The rest pattern should always be the last element in assignment, and also there can only be one rest pattern in an assigment.
### Key Differences of Spread Operator vs Rest Pattern
+ Spread Operator is used for unpacking elements from array, Rest Pattern is used to pack elements into an array.
+ Spread Operator is used on the right hand side of the assignment operator or `=`. Rest Pattern is used on left hand side.

The rest pattern works with objects as well as arrays (just like spread operator does).