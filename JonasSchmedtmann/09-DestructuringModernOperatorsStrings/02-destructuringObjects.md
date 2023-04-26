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
Right now the properties are stored in two global variables named `name` and `value`. But what if we want to save the properties in custom variables? We can simply define the new variable names while destructuring them from the original object.
```js
const {name: newNameVariable, value: newValueVariable} = originalObject;
```
Now `nameOfObject` is saved in a global variable named `newNameVariable` and `valueOfObject` is saved in a global variable named `newValueVariable`.<br>

