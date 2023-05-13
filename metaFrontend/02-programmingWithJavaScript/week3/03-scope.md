# Scope

Scope is all about accessibility of variables and codes in different parts of the program.

There are 3 scope types in JavaScript:

1. Global Scope
2. Function Scope
3. Block Scope

Variables declared outside any function or block are Globally Scoped and can be looked up to be found by local scopes.

Variables declared inside functions are only accessible inside the function code and if for example you try to console log them in the global scope, there'll be referenceError. That's why functions use `return`.

Any separated block of code such as an `if` statement or a `for` loop are considered blocks, and variables declared inside them are locally scoped.
