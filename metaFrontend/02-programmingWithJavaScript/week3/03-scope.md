# Scope

Scope is all about accessibility of variables and codes in different parts of the program.

There are 3 scope types in JavaScript:

1. Global Scope
2. Function Scope
3. Block Scope

Variables declared outside any function or block are Globally Scoped and can be looked up to be found by local scopes.

Variables declared inside functions are only accessible inside the function code and if for example you try to console log them in the global scope, there'll be referenceError. That's why functions use `return`.

Any separated block of code such as an `if` statement or a `for` loop are considered blocks, and variables declared inside them are locally scoped.

## Var vs. Let vs. Const

Variables declared with `var` are not subject to block scoping, and that is why its usage is mostly prohibited.

Popular consensus is on using `let` and `const` (since ES6) as methods of declaring variables, so that the variable is automatically block-scoped. This reduces random bugs significantly.

### Characteristics of Variables Declared with `var`:

- Can be used before it is declared (because it is hoisted)
- Same variable can be redeclared
- Scoped to function, or globally

### Characteristics of Variables Declared with `let` and `const`:

- Can't be used before declaration (not hoisted)
- Variable can't be redeclared
- Scoped to block

Let and Const are generally more strict than Var. In fact to use modern JavaScript, it is often suggested to write the code `'use strict'` as the first line of every js file.
