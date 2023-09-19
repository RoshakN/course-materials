# Default Parameter In Function

When we declare a function which accepts parameters or arguements, we have to assign a value to those arguements upon calling the function. If we don't do that ir if we call the function with not enough parameters, `undefined` will be assigned to those parameters.

To prevent this, we can assign default values to each parameter at the time of declaring the function.

If our functions is this:

```js
const bookings = [];
const createBooking = function (flightNum, numPassengers, price) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  bookings.push(booking);
};

createBooking("LH123");
```

In ES5, we had to do it like this:

```js
const bookings = [];
const createBooking = function (flightNum, numPassengers, price) {
  flightNum = flightNum || 1;
  numPassengers = numPassengers || 1;
  price = price || 1;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  bookings.push(booking);
};

createBooking("LH123");
```

But in ES6, we can simply assign the default value in the function declaration.

```js
const bookings = [];
const createBooking = function (flightNum = 1, numPassengers = 1, price = 1) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  bookings.push(booking);
};

createBooking("LH123");
```
