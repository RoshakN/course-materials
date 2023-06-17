# Maps In JavaScript

Map in JavaScript is a data structure we can use to map values to keys.

Maps are somewhat like Objects in JS, but with a big difference. Objects can only have `string` keys, but the key in a map can be any data type, including `string`, `object`, or even other `map`s.

## How To Create A Map

Creating maps in JavaScript is relatively easy and like creating sets. The syntax is:

```js
const restaurant = new Map();
```

The easiest way to create a map is to actually make an empty map, like above, and then add properties to it using the `set` method.
The `set` method takes two arguements. The first arguement is the key or the name of the property, and the second is the value.

```js
restaurant.set("name", "Classico Italiano");
restaurant.set(1, "Firenze, Italy");
restaurant.set(2, "Lisbon, Portugal");
```

> The `key` used in `set` method can be of any data type.
> Using the `set` method does not only set the value, but also call the entire map. So if we use `console.log()` for example, the entire map will print to the console.

```js
/* Map(3) {"name" => "Classico Italiano", 1 => "Firenze, Italy", 2 => "Lisbon, Portugal"}
[[Entries]]
size: (...)
__proto__: Map
*/
```
