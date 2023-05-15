# Enhanced Object Literals

ES6 introduced 3 enhancements to object literal which we are going to discuss here.

1. Before E6, when we wanted to copy an object inside another one, we had to write something like this:

```js
const objectToCopy = {
  //code
};
const mainObject = {
  name: "Original Object",
  purpose: "Be Original",
  objectToCopy: objectToCopy,
};
```

But since ES6, we can write it like this:

```js
const objectToCopy = {
  //code
};
const mainObject = {
  name: "Original Object",
  purpose: "Be Original",
  objectToCopy,
};
```

2. The socond enhancement is about writing methods. Writing methods inside object before ES6 were like this:

```js
const mainObject = {
  name: "Original Object",
  purpose: "Be Original",
  consoleLog: function() {
    console.log(mainObject)
  },
```

After ES6, there's no need for the `function` keyword anymore and it can be written like this:

```js
const mainObject = {
  name: "Original Object",
  purpose: "Be Original",
  consoleLog() {
    console.log(mainObject)
  },
```

Note that it can be done with functions that have parameters and there's no difference in this regard.

3. Since ES6, we can actually compute property names instead of always writing them manually.

```js
const week = {
  mon: {
    open: 10,
    close: 23,
  },
  tue: {
    open: 11,
    close: 24,
  },
};
```

Now we can write:

```js
const weekDays = [mon, tue];
const week = {
  weekDays[0]: {
    open: 10,
    close: 23,
  },
  weekDays[1]: {
    open: 11,
    close: 24,
  },
};
```

Or any other type of computation.
