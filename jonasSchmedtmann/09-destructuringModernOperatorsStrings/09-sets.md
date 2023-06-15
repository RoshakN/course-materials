# Sets In JavaScript

Before ES6 the only iterable data types in JavaScript were arrays and objects. But with this update 2 new data types were introduced as `Sets` and `Maps`.

In this article I will talk about sets. A set is essentially a container for different data types and values that will only occure once. In other words, each value can only exist once inside a set. If multiple instances of the same value are added, all except the first one will be deleted.

## How To Make A Set

To make a new `Set` and store it in a variable, the `new` keyword is used.

```js
const mySet = new Set(["Pizza", "Pasta", "Pizza", "Risotto", "Pasta"]);
console.log(mySet);
// Set(3) {"Pizza", "Pasta", "Risotto"}
```

Some facts about sets:

> - The data saved inside a set can be of any data type. Here I used an array, but it can be objects or strings or...
> - Each data saved inside a set is unique and one of a kind.
> - The order of values inside a set do not matter, even though the set itself looks like an array (i.e there are no indexes).
>   Sets are iterable and we can use loops and other methods on them.

## Operations On Sets

There are many methods and operations we can use wih sets, but the most common are as follows:

1. Calculate the size of a set.

```js
console.log(mySet.size);
// 3
```

2. Check if a certain element exists inside a set.

```js
console.log(mySet.has("Pizza"));
// true
console.log(mySet.has("Bread"));
// false
```

3. Add new element to a set.

```js
mySet.add("Garlic Bread");
mySet.add("Garlic Bread");
console.log(mySet);
// Set(4) {"Pizza", "Pasta", "Risotto", "Garlic Bread"}
```

4. Delete element from a set.

```js
mySet.delete("Risotto");
console.log(mySet);
// Set(3) {"Pizza", "Pasta", "Garlic Bread"}
```

5. Delete all elements from a set.

```js
mySet.clear();
console.log(mySet);
// Set(0) {}
```
