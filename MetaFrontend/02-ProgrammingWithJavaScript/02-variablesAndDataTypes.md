# Variables and Data Types

Variables are like a box that we store data in. Data in turn, is a collective term for all the values and information within our app.

To declare variables, we can use 3 types of declarations. `Var`, `Let`, and `Const`. Let and Const will be discussed at length in later chapters. For now I will only use Var as it is more legacy compatible.

Syntax for declaring a variable:

```js
var variableName;
```

Right now the variable is declared by the name of variableName, but has no value. It is in fact `undefined`. To remedy that, I can either assign a value to it while declaring, or after that. Both the snippets below are correct.

```js
var variableName;
variableName = "Roshak";
```

And:

```js
var variableName = "Roshak";
```

## Data Types

There are 7 primitive data types, as follows:

1. String: Text
2. Number: Numerical Value
3. Boolean: True or False
4. Null: Absence of Value
5. Undefined: Not Yet Assigned Value
6. BigInt: Bigger Numerical Values Than Number
7. Symbol: Data Type For Unique Identifiers
