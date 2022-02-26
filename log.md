## Links 

[Day 5](#day-5)
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

### Loops

How do you write code that display numbers between 1 and 5? You could write like this below. But what if you need to write the exact same code for numbers between 1 and 100? 

```js
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

Couple wasy to write repeated statement

### the `while` loop

```js
while (condition) {
  // do something
}

// example
let number = 1; // declare the variable and assign 1
while (number <= 5) {
  console.log(number);
  number++;
}
```

The condition in parentheses is evaluted to determine whether it is true or not.
  - if `true`, the code in the while loop's body wrtie. And then it continues running until the condition is evaluted to false
  - if `false , the code stop run or doesn't run.

### the `for` loop

```js
for (initailization; condition; final expression) {
  // do something
}

// example
for (let i = 1; i <= 5; i++) {
  console.log(i); // logging number 1 to 5
}
```
- `initalization` - it is to set initial value of the variable, such as `let i = 0`
- `condition` - it is to evaluated the condtion before the loop runs each time. 
  - if `true`, the code runs
  - if `false`, the code doesn't run
- `final expression` - it is oftne to update the value of the variable, such as `i++`


### Common mistakes

- the while loop

```js
let number = 1;
while (number <= 5) {
  console.log(number);
  // without number++, the variable is never updated and the loop conditon stays forever
}
```
It will cause the loops run forever and never stop. It also will crash your browser!

- the for loop

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
  i++; // The i variable is updated in the loop body
}
// result: 1 3 5
```
In this case, the code is running incremeneted twice inside the paraenthese and curly bracket.

### FizzBuzz

The [rule](https://en.wikipedia.org/wiki/Fizz_buzz):
  - if the number is divisible by 3, log Fizz
  - if the number is divisible by 5, log Buzz
  - if the number is divisible by 15, log FizzBuzz

```js
for (let i = 1; i < 101; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
```

[Back to top](#links)

## Day 6

### what is garbage collection?

In general, garbage is something that is no longer of use.  In JavaScript, it is a memory management that help us to managing memory space. What are things that take up memory? We declare variables and then assign values to them. e.g. `let message = 'Hello'` or `let a = 5` or etc.

But how does JavaScript know when something is not needed anymore? The main way to decide is `reachability`. In short, if the values are still **reachable** as in still accessible and usable, they will stay in the memory. 

There is a background process called garbage collector that monitors all objects and remove those values that become **unreachable**. And it is running automatically in the background.

For example,

```js
let user = {
  name: "John"
};
```

The `name: 'John'` is stored in the memory. 
Let's say we assign different value to `user`, `user = null` and what happened to `name: 'John'`? The name 'John'  becomes **unreachable**. As mentioned above, any vales become **unreachable" and the garbage collector will throw out the data and free up space in the memory.

## Day 7

placeholder

## Day 8

placeholder

## Day 9

placeholder

## Day 10

placeholder
