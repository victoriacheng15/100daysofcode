<!-- Links - [Day 5](#day-5) -->
## Day 1 

I made a simple background color picker to show cofffee colors! It also changes images once you clicked! I used onclick event listener instead of addEventListener. Personally, I dont use onclick event listener function but, I am curious what are the differences between onclick and addEventListener. 

Diffenences: 
| type              | addEventListener               | onclick                   |
| ----------------- | ------------------------------ | ------------------------- |
| number of event   | many events                    | single event              |
| event propagation | can control with 3rd argument  | cant control              |
| how to add        | `<script>` or  JS file         | HTML attribute or JS file |
| compatibility     | Doesn't work on older IE       | works on all browsers     |

source: [Difference between addEventListenter and onclick in JavaScript](https://www.geeksforgeeks.org/difference-between-addeventlistener-and-onclick-in-javascript/)

[Coffee background picker](https://victoriacheng15.github.io/100daysofcode/coffee-background-picker/)

## Day 2

### Variables

- What is variable? How do you declare?
  - It is a named storage for data.
  - 3 ways to declare, `var`, `let` (this can be reassigned), and `const` (this cannot be reassigned)
- Use uppercase const to name the variable that is defined.
  - e.g. `const COLOR_ORANGE = '#FFA500'`
  
### Function

- Functions are the main "building blocks" of the programs. 
  - They aloow the code to be called many times without repetitions.

```js
function showMessage() {
  console.log( 'Hello everyone!' );
}
```
- Functions also take parameters or arguements inside the `()` after the function name.
- What to do if there is no parameters?
  - Function also takes a default value by changing `(name)` to `(name = 'Stranger')`
- How do you name functions?
  - Function is action and ususally name it with a verb
    - `get.....` - return a vale
    - `calc.....` - calc something
    - `create....` - create something
    - `check....` - check something

```js
// without default value
function showMessage(name) {
  console.log( 'Hello ' + name + '!' );
}

showMessage('Victoria') // Hello Victoria!

// with default value
function showMessage(name = 'Stranger') {
  console.log( 'Hello ' + name + '!' );
}

showMessage() // Hello Stranger!
```

## Day 3

### Function Expression

2 ways to declare functions:

```js
// first:  Function Declaration
function sayHi() {
  console.log("Hello");
}

// second: Function Expression
let sayHi = function () {
  console.log("Hello");
};
```

what are the differences between `function declaration` and `function expression`?

1. function declaration => declared as a separated statement in the main code flow
   - can be called earlier than it is defined.
     - for example, a global function declaration is visible in the whole script, no matter where it is.
2. function expression => created inside an expression with **assignment expression** `=`
   - Is created when the execution reaches it and is useable only from that moment

A function is a value, we can copy them. This also works with function expressions

```js
function sayHi() {
  console.log("Hello");
}

let anotherFunc = sayHi;

sayHi(); // Hello
anotherFunc(); // Hello
```

Also, function declarations are their block scopes. In short, if a function is declared inside the curly bracket, the function cant be called outside.

```js
let age = prompt("What is your age?", 18);

// conditionally declare a function
if (age < 18) {
  function welcome() {
    console.log("Hello!");
  }
} else {
  function welcome() {
    console.log("Greetings!");
  }
}

welcome(); // show error becasue it was declared inside the if else block
```

### Callback function

Let see this example, `ask(question, yes, no)` with 3 parameters:

- `question` => text of the question
- `yes` => the function will run if the answer is yes
- `no` => the function will run if the answer is no

```js
function showAgree() {
  console.log("You agreed.");
}

function showDisagree() {
  console.log("You disagreed.");
}

function ask(question, yes, no) {
  if (confirm(question)) {
    yes();
  } else {
    no();
  }
}

ask("Do you agree?", showAgree, showDisagree);
```

**The arguement `showAgree` and `showDisagree` are called callback functiopns or caallbacks**

**In most cases when we need to declare a function, Function declaration is preferable because it is visible prior to the declaration itself. More flexibility in code organization and is usually more readable**


## Day 4

### Arrow Function, the basics

There is another very simple and concise synthax for creating functions! It is the `arrow function`!


The general foramt shows below: 
```js
// arrow function
let func = (arg1, arg2, ..., argN) => expression;

//or 

const func = (arg1, arg2, ...args) => expression;
```

Let's see more examples!

Both functions below works the same way and will return the same value. The `arrow function` allows us to write one line code and without `return` keybord.

Let's break down on how to convert the function below to arrow function
```js
const sum = function (a, b) {
  return a + b;
};

// first - remove "function" 
const sum = (a, b)
// second - add arrow =>
const sum = (a, b) => 
//third - add expression
const sum = (a, b) => a + b // no curly bracket, so the returen is not needed here

// you can also write like this if you need to pass more actions within the function
const sum = (a, b) => { // with curly bracket present, return is needed
 // do more than one thing
 let extra = 30
 return a - b + extra
}
```

Arrow function doesn't work with `this` keyword, so keep this in mind.

```js
// regular function
function logThis() {
  console.log(this)
}

document.addEventListener('click', logThis); // this will refers to the document

// arrow function
const logThisArrow = () => {
  console.log(this);
};

document.addEventListener('click', logThisArrow); // this will refers to the global object
```


## Day 5

placeholder

## Day 6

placeholder

## Day 7

placeholder

## Day 8

placeholder

## Day 9

placeholder

## Day 10

placeholder
