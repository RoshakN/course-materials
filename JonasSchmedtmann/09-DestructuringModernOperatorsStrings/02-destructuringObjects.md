# Destructuring Objects
destructuring objects works in the same way it worked for arrays, with a few exceptions.<br>
```js
const originalObject {
    name: nameOfObject,
    time: timeOfObject,
    value: valueOfObject
};
```
There's no indexing in objects, so you'll have to name properties of the object in order to call them.<br>
```js
const {name, value} = originalObject;
```
### Custom Variable Names
Right now the properties are stored in two global variables named `name` and `value`. But what if we want to save the properties in custom variables? We can simply define the new variable names while destructuring them from the original object.
```js
const {
    name: newNameVariable,
    value: newValueVariable
} = originalObject;
```
Now `nameOfObject` is saved in a global variable named `newNameVariable` and `valueOfObject` is saved in a global variable named `newValueVariable`.

In this example we had no need for the time value, so we just ignored it. In destructuring arrays, we had to specifically leave the index for it empty.

### Default Variable Values
It is also possible to give default values to variables destructured from an object. The syntax is the same as with arrays.

Defining default value is specially important in case there's no actual value to be given to the new variable. This usually happens when we use APIs and the data isn't hadr-coded. If we don't define a default value for `age` property in the example below, we'll get `undefined`.

```js
const {
    name: newNameVariable = defaultName;
    age: newAgeVariable = defaultAge
};
// newNameVariable is `nameOfObject` and newAgeVariable is `defaultAge`
```
### Destructuring Nested Objects
Imagine the example original object had another object nested inside it.<br>
```js
const originalObject {
    name: nameOfObject,
    time: timeOfObject,
    value: valueOfObject,
    days: {
        sat: 8to10,
        fri: 10to12
    }
};
```
In order to destructure nested objects (objects within other objects), we use the syntax below.

```js
const {
    days: {sat, fri}
} = originalObject;
```
Now the global variables of `sat` and `fri` have the values of `8to10` and `10to12` stored in them.