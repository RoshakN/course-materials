# Class in OOP

When we are declaring multiple objects with similar properties and methods, we can make a template for them and use it to declare new objects. This works a bit the same as prototypes in JavaScript.

Class is essentialy a blueprint that we can print as many models of it as we want.

In JavaScript, classes are defined as below:

```js
class Car {
  // notice that the class name should start with a CAPITAL letter
  constructor(color1, speed1) {
    this.color = color1;
    this.speed = speed1;
    // color1 and speed1 are placeholders. `color` and `speed` are actual propertes of the class.
    turboOn() {
        console.log('Turbo is ON!');
        //notice that there's no mention of the object's name
        // only the name of the method suffices
    }
  }
}
```

The role of the constructor function is to assign any passed-in parameters to future objects. It is the constructor function that is used when making new instances of a given class.

After the constructor is defined, we can add as many methods as we want.

Once the class is made, we can make new instances of the objects using that class with the syntax below:

```js
const car1 = new Car("Red", 120);
```
