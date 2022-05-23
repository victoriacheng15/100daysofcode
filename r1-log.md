## Links 

- [Day 5](#day-5) [Day 10](#day-10) 
- [Day 15](#day-15) [Day 20](#day-20) 
- [Day 25](#day-25) [Day 30](#day-30)  
- [Day 35](#day-35) [Day 40](#day-40) 
- [Day 45](#day-45) [Day 50](#day-50) 
- [Day 55](#day-55) [Day 60](#day-60) 
- [Day 65](#day-65) [Day 70](#day-70) 
- [Day 75](#day-75) [Day 80](#day-80) 
- [Day 85](#day-85) [Day 90](#day-90) 
- [Day 95](#day-95) [Day 100](#day-100) 

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

Live site:  [Coffee background picker](https://victoriacheng15.github.io/100daysofcode/coffee-background-picker/)

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

### The `switch` statement

A `switch` statement can replace multiple `if` checks.

let's see `if else` function below. It can look really confused and get lost easily. A `switch` can offer readable code.

FizzBuzz example: 
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

A `switch` statement looks like this:

```js
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
```

This checks the value of `x` with first `case 'value1'` and will continue until the equality is found. If no case is matched then the `default` code will be executed.

let's see a simple example of `switch` statement.

```js
let a = 2 + 2;

switch (a) {
  case 3:
    console.log('Too small');
    break;
  case 4:
    console.log('Exactly!');
    break;
  case 5:
    console.log('Too big');
    break;
  default:
    console.log("I don't know such values");
}
```

The `switch` starts to compare `a` with all cases:
- first case `3`, it doesn't match `a`
- second case `4`, it matches and console will shows 'Exactly!'.

What if you forgot add `break` between `case`? The execution continues with `case` without any checks and we will see `Too small`, 'Exactly!`, and `Too big` on browser's console. 


Let's convert FizzBuzz example to `switch` statement.

```js
for (let i = 1; i < 101; i++) {
  switch (true) {
    case i % 15 === 0:
      console.log('FizzBuzz');
      break;
    case i % 3 === 0:
      console.log('Fizz');
      break;
    case i % 5 === 0:
      console.log('Buzz');
      break;
    default:
      console.log(i);
  }
}
```
## Day 8

### What is hoisting? 

```js
console.log(message); // return undefined
var message = 'hello'
```

In JavaScript, hoisting allows you to puse function and variables before they're declared. Which is why the code above return `undefined` value in the browser's console.

### Variable hoisting

There are 3 ways to declare a variables with `var`, `let`, and `const`. 

Let's see `var` hoisting. If you copy the code below on your JavaScript file, the first console.log returns `undefeind` while second console.log returns `hello`.

```js
console.log(message); // undefined
var message = 'hello'
console.log(message); // hello
```

Remember, JavaScript reads code from top to bottom. If you are trying to console.log the variable before it is declared, it will retun `undefined` if you use `var` to declare. 

now, let's see `let` and `const` hoisting

```js
console.log(message); // reference error: cannot access 'message' before initialization
let message = 'hello'
```

If you change `let` to `const` in the code above, the console will show the same error.

In short, variable declared with `var` is hoisted and **initialized** its value to `undefeind`, while `let` and `const` are hoisted but **not initialized**. Which is why `let` and `const` returns `ReferenceError`. JavaScript is weird in this case. It allows us to use variable before declaration and it leads to alot of confused. 

## Day 9

Since I learned about the `switch` statement few days ago and wanted to use `switch` for practice. Then I saw that Ania Kubów has a new video [Learn JavaScript by building 7 games](https://www.youtube.com/watch?v=ec8vSKJuZTk) on FreeCodeCamp channel. I decided to made a simple rock paper sicssors game. First, I wrote the script with `if else` statement and then wrote `switch` statement after to see the length of code and readabiliy between both statements.

Live site: [Rock Paper Scissors Game](https://victoriacheng15.github.io/100daysofcode/rock-paper-scissors/)


## Day 10

I built a memory card game from [Learn JavaScript by building 7 games](https://www.youtube.com/watch?v=ec8vSKJuZTk). I utilized the `for` loop to create images and set attributes. I usually use the `forEach` method. The `this` keyword is a bit difficult to understand and depend on the function, but in this case, `this` will return the information of the **clicked** element such as `data-id`.

Live site: [Memory Game](https://victoriacheng15.github.io/100daysofcode/memory-game/)

[Back to top](#links)

## Day 11

I built a whack a mole card game from [Learn JavaScript by building 7 games](https://www.youtube.com/watch?v=ec8vSKJuZTk). I utilized the `forEach` to to listen `mousedown` addEventListener. The time and score will update accordingly. I never knew that `mousedown` and `click` are different. 

`mousedown`: the event is fired when a pointing device button is **initially** pressed.
`click`: the event is fired after **a full click action** occours.

Live site: [Whack a Mole Game](https://victoriacheng15.github.io/100daysofcode/whack-a-mole/)

## Day 12

Continuing making a game from [Learn JavaScript by building 7 games](https://www.youtube.com/watch?v=ec8vSKJuZTk). This game is interesting to make and utilized `AND` and `OR` operators to check collisions. Need to take the size of block and ball into account. I found the chainning of `AND` and `OR` is confusing me. I gotta to spend more time on logical oeprators, espically the `||` and `&&`.

Live site: [Break Game](https://victoriacheng15.github.io/100daysofcode/breakout-game/)


## Day 13

I have read Eloquent JS before, and I didn't really understand a lot of things. Let's read the book chapter 1 to 3 again, I get it this time! Also, I didn't realize that variable is also called `binding`

[Eloquent JavaScript](https://eloquentjavascript.net/)

## Day 14

done with lessons 1 to 4 (variables, conditionals, function and scope)! Get that spaced repetition and recall in!

[Intro to JavaSript on codeademy](https://www.codecademy.com/learn/introduction-to-javascript)

## Day 15

### All about git

Read [Git from the Bottom Up](https://jwiegley.github.io/git-from-the-bottom-up/) to get familar with git terms and how it work

#### terms:

- **repository**: it is a collection of commits, show what project's working tree looks like in the past date, wether on your machine or someone else's. It also defines `HEAD`, which idenfities the branch or commit the current working tree stemmed from. It also contains branches and tags.
- **HEAD**: it is define what is currently checked out.
- **the index**: aka the `staging area`, it is where git confirms your change, one by one before doing a commit.
- **working tree**: any directory on your file system which has a repository assoicated wiht it. It is usually in the `.git` folder
- **commit**: it is snapshot of your working tree at the some point. This is also the revision history.
- **branch**: it is a name for a commit, and also called referance. It is the parentage of a commit which defines its history, and considered notion of a "revision history"
- **tag**: it is also a name fora commit, similar to a branch, except that it always name the same commit, and can have its own description text.

[Back to top](#links)

## Day 16

### Passed by Value vs Passed by Reference

**Primitives** are passed by value, meaning their values are copied and then placed somewhere else in the memory. 7 primitive date: string, number, bigint, boolean, null, undefined, and symbol.

**Non-primitive** type is object, and they are passed by reference, meaning their properties are not separately in the memory.

```js
// objects are passed by reference
let obj = {
  name: "John",
};
let newObj = obj; 
newObj.name = "Peter"; 
// Since both point to the same place...
console.log(obj); // {name: Peter}
console.log(newObj); // {name: Peter}

let arr = [1, 2, 3];
let newArr = arr;
newArr.push(4);
console.log(arr); // [1, 2, 3, 4]
console.log(newArr); // [1, 2, 3, 4]
```

You can use `Object.assign()` or use the spread operator `{...}` to copy the object. Keep in mind, this method is a `shallow copy`. This means the object only can be copied one level deep, not 2 levels deep.

How do you copy an entire object? Use `JSON.parse(JSON.stringify(originalObj))` and this will copy the nestedKey. Keep it in mind, this method could impact performance.

```js
const originalObj = {
  nested: {
    nestedKey: "nestedValue",
  },
  key: "value",
};
const assignObj = originalObj; // nestedkey value will change
const shallowObj = { ...originalObj }; // nestedkey value will change
const deepObj = JSON.parse(JSON.stringify(originalObj)); // nestedkey balue will NOT change
// deepObj clones all parts of the object to a new memory address
```

## Day 17 

done with Codecademy lessons, array, loops, iterators `high-order function, forEach(), map(), filter(), reduce(), and findIndex()` and a bit on objects ! Get that spaced repetition and recall in!

[Intro to JavaSript on codeademy](https://www.codecademy.com/learn/introduction-to-javascript)

## Day 18

done with Codecademy lesson objects! I decided to keep today light.

[Intro to JavaSript on codeademy](https://www.codecademy.com/learn/introduction-to-javascript)

## Day 19

- Portfolio site: added most informaiton (projects, contact form, and skill sections)
- Did 2 or 3 small problems on codewars to start working on thinking process and as usual, practicing with JavaScript.


[portfolio](https://github.com/victoriacheng15/portfolio)

## Day 20

- Did 3 codewars problems by listing steps on what I need to do to get the solution.


#### Rock paper scissors solution: 
Let's play! You have to return which player won! In case of a draw return Draw!.

```js
const rps = (p1, p2) => {
  switch(p1+p2) {
      case 'scissorspaper':
      case 'rockscissors':
      case 'paperrock':
        return 'Player 1 won!'
        break;
      case 'scissorsrock':
      case 'paperscissors':
      case 'rockpaper':
        return 'Player 2 won!'
        break;
      default:
        return 'Draw!'
        break;
  }
};
```

#### Grasshopper - Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

```js
const summation = function (num) {
  // set sum to 0
  // loop from 0 to num
  // add sum with i
  let sum = 0
  for(let i = 0; i <= num; i++) {
     sum += i
  }
  return sum
}
```

#### Fake - binary
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

```js
function fakeBin(x){
  // split string
  // map the array 
  // check number is greater or less than 5
  // join them
  return x.split('').map(num => num < 5 ? '0' : '1').join('')
}
```


[Back to top](#links)

## Day 21

- did 3 codewars problems

### Can we divide it?
Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

```js
function isDivideBy(number, a, b) {
  // checke the answer is integer or not after divide
  return Number.isInteger(number / a) && Number.isInteger(number / b) ? true : false
}
```

### Will you make it?
You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that, on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

```js
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  // check total fuel need with mpg and fuelLeft
  // check if totalfeul is equal or greater than then distanceToPump
  // if equal or greater, return true
  // if less, return false
  return distanceToPump <= (mpg * fuelLeft) ? true : false
};
```

### counting the sheep
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

```js
function countSheeps(arrayOfSheep) {
  // set up empty array to store true
  // check to see which one is true with filter
  // push to sorted array
  let sorted = []
  arrayOfSheep.filter(check => {
    if(check === true) {
      sorted.push(check)
    }
  })
  return sorted.length
}
```

## Day 22

- Worked on 2 codewars problems and learned couple things
  - Using Array(x).keys() to fill the array based on the `x`
  - Using new Set() to store unqiue values of any type
- Added responsive design to my portfolio site

codewars problems:

- Count the divisors of a number

Count the number of divisors of a positive integer n.
```js
function getDivisorsCnt(n) {
  // create and fill the array based on n
  // filter out decimal values with reminder
  return [...Array(n + 1).keys()].filter((num) => n % num === 0).length;
}
```

- Isograms

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

```js
function isIsogram(str) {
  // convert to lower case
  // use Set() method that store unique values of any type
  // check length
  // - if same lenght, mean no repeat
  // - if different length, mean repeat
  return new Set(str.toLowerCase()).size === str.length;
}
```

## Day 23

- Worked on 2 codewars JS problems
- Recap: I should look into `recursion` next

### Sum of Numbers

Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

```js
function getSum(a,b) {
  // 1. check if a === b, return a
  // 2. check if a < b, loop and add through lowest to highest numbers
  // 3. check if b < a, loop and add through lowest to highest numbers
  let total = 0;  
  if (a === b) { return a };
  
  if (a < b) {
    for (let i = a; i <= b; i++) {
      total += i;
    }
    return total;
  }
  
  if (b < a) {
    for (let i = b; i <= a; i++) {
      total += i;
    }
    return total;
  }
}
```

### Remove the minimum

Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

```js
function removeSmallest(numbers) {
  // leave the original array alone
  // use Math.min()
  // use apply() for the num array
  // find index of the min and then remove with splice
  const min = Math.min.apply(null,numbers);
  const newArr = numbers.slice(0);
  const minIndex = newArr.indexOf(min)
  newArr.splice(minIndex, 1);
  return newArr;
}
```

## Day 24

- redid 2 problems on codewars with different solutions

### Recursion

Recursion is a process of calling itself. A function that calls itself is called a recursive function.
In general, the recursion function looks like the code block below. Make sure have `if else` statemenet, otherwise, it can run forever.

resources:
- [Programiz recursion](https://www.programiz.com/javascript/recursion)
- [JavaScript Info recursion](https://javascript.info/recursion)

```js
function recurse() {
    if(condition) {
        recurse();
    }
    else {
        // stop calling recurse()
    }
}

recurse();
```

Let's see an example with countdown

```js
const countdown = (num) => {
  // logging the n
  console.log(num);
  // decrease num value by 1
  const nextNumber = num - 1;
  // prevent infinite loop, it stops when reach 0
  if (nextNumber > 0) {
    countdown(nextNumber);
  }
};
countdown(10);
```

## Day 25

- Read The JS way chapter 6 and 7
- Redid 2 problems on codewars with different solutions

[The JS way](https://github.com/thejsway/thejsway)

[Back to top](#links)

## Day 26

- Did 2 problems on codewars
  - 8kyu: sum-of-positive.js
  - 7kyu: sum-of-numbers.js (redid with different solution)
- Read chapter 4 on Eloquent JavaScript

I push codewars solution [codewrs-solutions](https://github.com/victoriacheng15/codewars-solutions)

[Eloquent JavaScript](https://eloquentjavascript.net/04_data.html)

## Day 27

- Did 2 7kyu problems on codewars
  - printer-error.js
  - strings-ends-with.js
- Worked on portfolio's project card

## Day 28

- Did 2 problems on codewars
  - shortest-word.js
  - make-a-function-that-does-arithmetic.js
- Learned about higher-order functions (accepted a function as an arguement or return a fnuction)


[What is a Higher Order Function?](https://livecodestream.dev/post/what-is-a-higher-order-function/)
[What are higher-order functions in JS](https://dmitripavlutin.com/javascript-higher-order-functions/)
[Higher-Order Functions(HoF) in JavaScript - Explain Like I'm Five](https://blog.greenroots.info/higher-order-functions-in-javascript)

## Day 29

- Did 2 7kyu problems on codewars
  - reverse-letter.js
  - anagram-detection.js
- Redid 1 old problem codewars with different solution
- Learned about apply() and spread operator

[apply()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
[spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

## Day 30

- codewars: did 2 7kyu problems
- portfolio: got layout done. woot!
- JavaScript: digged deeper on higher-order functions

[Back to top](#links)

## Day 31

- codewars: did 1 7kyu problem
- portfolio: added content and information
- css: read about how to draw image with css gradient 

## Day 32

- codewars: did 5 problems
  - regex-validate-pin.js
  - reverse-words.js
  - even-or-odd.js
  - multiplying-two-num.js
  - parse-nice-int-from-char-problem.js
- portfolio: fixed and tweaked layouts for responsive design

## Day 33

- codewars: did 2 problems 
  - 7kyu: vowels-count.js
  - 6kyu: replace-with-alphabet-position.js 
- portfolio: got it deployed on netlify

## Day 34

- codewars: one 7kyu problem
- Anki: added array method cards and reviewed cards 

## Day 35

- codewars: did 2 7kyu problems
- Anki: added/updated cards and reorganized decks
- OOP: read the Four Pillars of Object Oriented Programming article on medium

[Four Pillars of Object Oriented Programming (OOP)](https://medium.com/@hamzzza.ahmed95/four-pillars-of-object-oriented-programming-oop-e8d7822aa219)


[Back to top](#links)

## Day 36

- codewars: did 2 7kyu problems (JavaScript)
- OOP: watched 30 minutes of the video by Programming with Mosh

[Object-oriented Programming in JavaScript: Made Super Simple | Mosh](https://www.youtube.com/watch?v=PFmuCDHHpwk)

## Day 37

- codewars: did 2 problems (JavaScript)
- OOP: watched last 30 minutes of the video by Programming with Mosh

[Object-oriented Programming in JavaScript: Made Super Simple | Mosh](https://www.youtube.com/watch?v=PFmuCDHHpwk)


## Day 38

- codewars: solved 3 problems with JavaScript
- OOP: read more about the 4 pillars of OOP, abstraction, encapsulation, inheritance, and polymorphism
- CSS: created 2D mint candy with CSS gradients

![image](https://user-images.githubusercontent.com/35031228/160937102-58d82d1f-3801-4e88-8a19-0ba3fb105201.png)

## Day 39

- ✅ codewars: solved 4 problems with JavaScript
- ✅ portfolio: fixed and tweaked layout and projects section
- ✅ anki: reviewed cards


## Day 40

- ✅ codewars: solved 4 problems with JavaScript
- ✅ portfolio: added favicon
- ✅ anki: reviewed cards

[Back to top](#links)

## Day 41

- ✅ codewars: solved 5 problems with JavaScript
- ✅ Jest: read a bit the getting started section
- ✅ anki: reviewed cards

[Jest docs](https://jestjs.io/docs/getting-started)

## Day 42

- ✅ codewars: solved 4 problems with JavaScript
- ✅ Jest: read using matchers section
- ✅ Portfolio: updated to latest and added favicon
- ✅ anki: reviewed cards

[Jest docs - using matchers](https://jestjs.io/docs/using-matchers)


## Day 43

- ✅ codewars: solved 5 problems with JavaScript
- ✅ Jest: read a bit about Expect API docs
- ✅ 100Devs: watched intro to git and github video
- ✅ anki: reviewed cards

[Jest docs - expect API](https://jestjs.io/docs/expect)

## Day 44

- ✅ codewars: solved 4 problems with JavaScript
- ✅ JS info: read about Map and Set section and all sections about code quality
- ✅ anki: reviewed cards

[JS Info - Map and Set](https://javascript.info/map-set)
[JS Info - code quality](https://javascript.info/code-quality)

## Day 45

- ✅ codewars: solved 4 problems with JavaScript
- ✅ JavaScript: read about functional programming
- ✅ anki: reviewed cards


[Back to top](#links)

## Day 46

- ✅ codewars: solved 4 problems with JavaScript
- ✅ JavaScript: read more on functional programming
- ✅ API project: got the word API and folder set up with Tailwind CSS
- ✅ anki: reviewed cards

[An introduction to functional programming in JavaScript](https://opensource.com/article/17/6/functional-javascript)

## Day 47

- ✅ codewars: solved 2 problems with JavaScript
- ✅ API project: got frontend and fetch request done
- ✅ anki: reviewed cards

## Day 48

- ✅ codewars: solved 3 problems with JavaScript
- ✅ 100devs: watched class-26 video
- ✅ API project: pull word and display on the page. game logic will be added after
- ✅ anki: reviewed cards

## Day 49

- ✅ codewars: solved 3 problems with JavaScript
- ✅ CSS battle: did 3 challanges
- ✅ anki: reviewed cards

## Day 50

- ✅ codewars: solved 4 problems with JavaScript
- ✅ CSS battle: did the overlap and eye of the tiger challenge
- ✅ JavaScript: read more about functional programming 
- ✅ anki: reviewed cards

[Master the JavaScript Interview: What is Functional Programming?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)

[Introduction to Functional Programming: JavaScript Paradigms](https://www.toptal.com/javascript/functional-programming-javascript)

[Back to top](#links)

## Day 51

- ✅ codewars: solved 2 problems with JavaScript
- ✅ CSS battle: did the fidget spinner challenge
- ✅ anki: reviewed cards

[axe-con](https://www.deque.com/axe-con/)

## Day 52
- ☕ codewars: solved 2 problems with JavaScript
- ☕ CSS battle: did the cube challenge
- ☕ localStorage: read localStorage and sessionStorage
- ☕ anki: added new cards about localStorage and reviewed cards

[JavaScript Info - localStorage](https://javascript.info/localstorage)

[MDN - localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

[MDN - sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)


## Day 53

- ☕ codewars: solved 3 problems with JavaScript
- ☕ CSS battle: did the SitePoint logo challenge
- ☕ JavaScript: read about async await and promise
- ☕ anki: reviewed cards

[MDN- async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

[MDN- promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Day 54

- ☕ codewars: solved 3 problems with JavaScript
- ☕ CSS battle: did the cloud challenge
- ☕ OOP: reviewed/revisited this topic
- ☕ Resume: fixed/updated/improved
- ☕ anki: reviewed cards

## Day 55

- ☕ codewars: solved 2 problems with JavaScript
- ☕ CSS battle: did the boxception, switch, and blossom challenge
- ☕ JavaScript: read about modules
- ☕ anki: reviewed cards

[JavaScript Info - module](https://javascript.info/modules-intro)

[MDN - module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)


[Back to top](#links)

## Day 56

- ☕ codewars: solved 2 problems with JavaScript
- ☕ CSS battle: did the smiley challenge
- ☕ JavaScript: read about error handling
- ☕ anki: reviewed cards

[JavaScript Info - error handling](https://javascript.info/try-catch)

[MDN - error handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

## Day 57

- ☕ codewars: solved 4 problems with JavaScript
- ☕ CSS battle: did the lock-up and cups & balls challenge
- ☕ Eloquent JS: read higher-order function (chapter 5)
- ☕ anki: reviewed cards

[Eloquent JS - higher-order function](https://eloquentjavascript.net/05_higher_order.html)

## Day 58

- ☕ codewars: solved 4 problems with JavaScript
- ☕ CSS battle: did the suffocate and horizon challenges
- ☕ JavaScript Info: read about 5.1 to 5.4 of data types lesson
- ☕ Eloquent JS: read half of the chapter 6
- ☕ anki: reviewed cards

[JavaScript Info - data types](https://javascript.info/data-types)

[Eloquent JS - The Secret Life of Objects](https://eloquentjavascript.net/06_object.html)

## Day 59

- ☕ codewars: solved 5 problems with JavaScript
- ☕ CSS battle: did the equals and band-aid challenges
- ☕ JavaScript Info: read about 5.5 to 5.7 of data types lesson
- ☕ anki: reviewed cards

[JavaScript Info - data types](https://javascript.info/data-types)

## Day 60

- ☕ codewars: solved 5 problems with JavaScript
- ☕ CSS battle: did the birdie and christmas tree challenges
- ☕ API project(hangman game): improved layout and started JS part on detecting keys on press
- ☕ anki: reviewed cards

The difference between keydown, keypress, and keyup: [keydown vs keypress vs keyup](https://thisthat.dev/keydown-vs-keypress-vs-keyup/)

[Back to top](#links)

## Day 61

- ☕ codewars: solved 5 problems with JavaScript
- ☕ CSS battle: did the ice cream and interleaved challenges
- ☕ freecodecamp: almost finish the JavaScript Algorithms and Data Structures
- ☕ anki: reviewed cards


## Day 62

- ☕ codewars: solved 4 problems with JavaScript
- ☕ CSS battle: did the tunnel and not simpley square challenges
- ☕ freecodecamp: got the JavaScript Algorithms and Data Structures certificate
- ☕ Test Automation University: completed Setting a Foundation for Sucessful Test Automation (Web UI JS path)
- ☕ anki: reviewed cards

[Test Automation University](https://testautomationu.applitools.com/)

[TAU CoC for Setting a Foundation for Sucessful Test Automation](https://testautomationu.applitools.com/certificate/?id=243a0668)

[FFC JavaScript Algorithms and Data Structures certificate](https://www.freecodecamp.org/certification/victoriacheng15/javascript-algorithms-and-data-structures)

## Day 63

- ☕ codewars: solved 4 problems with JavaScript
- ☕ CSS battle: did one challenges
- ☕ axe-con: started on first video of the development track 2022
- ☕ anki: reviewed cards

## Day 64

- ☕ codewars: solved 4 problems with JavaScript
- ☕ CSS battle: did two challenges
- ☕ axe-con: started on 2nd video (Createing Accessible React Native Apps) of the development track 2022
- ☕ anki: reviewed cards

## Day 65

- ☕ codewars: solved 5 problems with JavaScript
- ☕ CSS battle: did one challenge
- ☕ Data Structures and Algorithms: read about big O notation 
- ☕ axe-con: started on 3rd and 4th video (Venturing into unmapped ARIAs and Get it right the 1st time) of the development track 2022
- ☕ anki: reviewed cards

[Big O notation from interview cake](https://www.interviewcake.com/article/javascript/big-o-notation-time-and-space-complexity?course=fc1&section=algorithmic-thinking)

[Introduction to Big O Notation and Time Complexity By CS Dojo](https://www.youtube.com/watch?v=D6xkbGLQesk&list=PLBZBJbE_rGRV8D7XZ08LK6z-4zPoWzu5H&index=8)


[Back to top](#links)

## Day 66

- ☕ codewars: solved 5 problems with JavaScript
- ☕ CSS battle: did one challenge
- ☕ The JS way: read chapter 9 - Understand object-oriented programming
- ☕ anki: reviewed cards

I spent most of time to write about me blog today and look to publish soon!

[The JS way - chapter 9](https://github.com/thejsway/thejsway/blob/master/manuscript/chapter09.md)

## Day 67

- ☕ codewars: solved 5 problems with JS
- ☕ axe-con: done with the last 2 videos of the development track 2022
- ☕ TAU: done with chapter 1 and 2 of Automating in the browser using JS
- ☕ anki: reviewed cards

## Day 68

- ☕ codewars: solved 5 problems with JS
- ☕ hacker rank: solved 1 problem with JS
- ☕ TAU: done with chapter 3 of Automating in the browser using JS
- ☕ anki: reviewed cards

## Day 69

- ☕ codewars: solved 5 problems with JS
- ☕ hacker rank: solved 1 problem with JS
- ☕ CSS battle: did one challenge
- ☕ TAU: done with chapter 4 of Automating in the browser using JS
- ☕ anki: reviewed cards

## Day 70

- ☕ codewars: solved 6 problems with JS
- ☕ hacker rank: solved 1 problem with JS
- ☕ TAU: done with chapter 5 of Automating in the browser using JS
- ☕ anki: reviewed cards

[Back to top](#links)

## Day 71

- ☕ codewars: solved 4 problems with JS
- ☕ hacker rank: solved 1 problem with JS
- ☕ TAU: done with chapter 6 of Automating in the browser using JS
- ☕ 100Devs: watched class 30 video - OOP
- ☕ anki: reviewed cards

## Day 72

- ☕ codewars: solved 3 problems with JS
- ☕ hacker rank: solved 1 problem with JS
- ☕ TAU: done with chapter 7 of Automating in the browser using JS
- ☕ anki: reviewed cards

## Day 73

- ☕ codewars: solved 3 problems with JS
- ☕ hacker rank: solved 1 problem with JS
- ☕ Test Automation University: done with chapter 8 of Automating in the browser using JS
- ☕ DSA: reviewed Big-O Notation
- ☕ anki: reviewed cards

[Educative - What is Big-O Notation?](https://www.educative.io/edpresso/what-is-big-o-notation)

[Big-O Notation Explained with Examples](https://developerinsider.co/big-o-notation-explained-with-examples/)

## Day 74

- ☕ codewars: solved 4 problems with JS
- ☕ CSS battle: did 2 challenges
- ☕ hacker rank: solved 2 problem with JS
- ☕ Test Automation University: done with chapter 9 of Automating in the browser using JS
- ☕ anki: reviewed cards

## Day 75


[Back to top](#links)

## Day 76

- ☕ codewars: solved 4 problems with JS
- ☕ hacker rank: solved 2 problems with JS
- ☕ git: learned about git rebase and how to update branches with merge and rebase methods
- ☕ Test Automation University: done with chapter 10 of Automating in the browser using JS
- ☕ anki: reviewed cards

There are 2 methods to update your branch(es) and I found it is really useful since I would like to keep the branches for specific purpose. I am also experimenting different ways to utilize git and github to organizing repos.

- Merge method: this will keep branch history accurate

git checkout branch-1
git merge origin/main
git push origin branch-1

- Rebase method: the history will appear linear and will be conflict if already push

git checkout branch-1
git rebase main
git push origin branch-1

The main different between them is that merging will keep all history as it is while rebase will rewrite the history by creating brand new commits for each commit. As usual, there are pros and cons to use either method, please refer to the link below for more information. 


[Merging vs. Rebasing](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)

## Day 77

- ☕ codewars: solved 3 problems with JS
- ☕ hacker rank: solved 1 problems with JS
- ☕ Test Automation University: done with chapter 11 of Automating in the browser using JS
- ☕ anki: reviewed cards

## Day 78

- ☕ codewars: solved 4 problems with JS
- ☕ hacker rank: solved 1 problems with JS
- ☕ Test Automation University: done with chapter 12 and 13 of Automating in the browser using JS
- ☕ anki: reviewed cards

## Day 79

- ☕ codewars: solved 5 problems with JS
- ☕ hacker rank: solved 1 problems with JS
- ☕ Test Automation University: done with chapter 1 of Mocha JS Test Framework
- ☕ Resume: brainstormed work experience section
- ☕ anki: reviewed cards

## Day 80

- ☕ codewars: solved 5 problems with JS
- ☕ hacker rank: solved 1 problems with JS
- ☕ Test Automation University: done with Mocha JS test Framework
- ☕ OOP: reviewed OOP again
- ☕ blog: published a blog and brainstormed blog topics
- ☕ Resume: continued brainstorming work experience section
- ☕ anki: reviewed cards and added new cards on Jest and Mocha

[Object-Oriented Programming in JavaScript for Beginners](https://www.freecodecamp.org/news/object-oriented-javascript-for-beginners/)

[Back to top](#links)


## Day 81

- ☕ codewars: solved 5 problems with JS
- ☕ hacker rank: solved 1 problems with JS
- ☕ Data Structures and Algo: reviewd hashmap
- ☕ Test Automation University: done with ch 1 and 2 of Intro to Chai Assertion
- ☕ blog: re-organized the blog site
- ☕ anki: reviewed cards and added cards about chai assertion

One of these codewars problems asked me to keep tracking of langauge counts from the provided list. My first thought was to use hashmap, and I am not familiar with hashmap. I decided to read on hashmap and to see how it works and then tried to solve codewars problems with hashmap. In the end, I got how the hashmap works now! I think it is a good topic to write on for my blog. 🤔

```js
const list1 = [
  { firstName: 'Noah', lastName: 'M.',age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', age: 81, language: 'C' },
];

// my solutions
function countLanguages(list) {
  const counter = {}
  list.forEach(({language}) => {
    if(!counter[language]) {
      counter[language] = (counter[language] || 0) + 1
    } else {
      counter[language] += 1
    }
  })
  return counter
}

countLanguages(list1) // { C: 2, JavaScript: 1, Ruby: 1 }
```

I dont think I need to write the `if else` statement. I will improve the solution for next time.

Note: I use hashnode blog, in case if you are wondering.

[How you can change the world by learning Data Structures and Algorithms](https://adrianmejia.com/how-you-can-change-the-world-learning-data-structures-algorithms-free-online-course-tutorial/)


## Day 82

- ☕ codewars: solved 5 problems with JS
- ☕ hacker rank: solved 1 problems with JS
- ☕ Test Automation University: done with ch 3 and 4 of Intro to Chai Assertion
- ☕ resume: updated work section
- ☕ anki: reviewed cards and added cards about chai assertion

## Day 83

- ☕ codewars: solved 4 problems with JS
- ☕ hacker rank: solved 1 problems with JS
- ☕ Test Automation University: done Intro to Chai Assertion
- ☕ anki: reviewed cards

I spent most of time today to fill/fix/update my LinkedIn, angel{dot}co and resume. Since it is Friday, don't forget to take a short break and go celebrating on something.

Happy Friday and have a great weekend. 

## Day 84

- ☕ codewars: solved 5 problems with JS
- ☕ hacker rank: solved 2 problems with JS
- ☕ Test Automation University: done with ch 1 and 2 of intro to cypress
- ☕ resume: proofread and edited work experience section
- ☕ anki: reviewed cards

## Day 85

- ☕ codewars: solved 5 problems with JS
- ☕ hacker rank: solved 1 problems with JS
- ☕ Test Automation University: done with ch 3 of intro to cypress
- ☕ Data Structures and Algo: read about greedy algorithms
- ☕ github: re-organized repo and update files
- ☕ anki: reviewed cards

[Interview Cake - Greedy Algorithms](https://www.interviewcake.com/concept/javascript/greedy?)

[Programiz - Greedy Algorithms](https://www.programiz.com/dsa/greedy-algorithm#:~:text=A%20greedy%20algorithm%20is%20an,if%20the%20choice%20is%20wrong.)

[Back to top](#links)

## Day 86

- ☕ codewars: solved 5 problems with JS
- ☕ hacker rank: solved 1 problems with JS
- ☕ Test Automation University: done with ch 4 of intro to cypress
- ☕ 100Deva: watched node.js crash course
- ☕ anki: reviewed cards

[Node.js crash course by Traversy](https://www.youtube.com/watch?v=fBNz5xF-Kx4&t=573s)

## Day 87

- ☕ codewars: solved 5 problems with JS
- ☕ hacker rank: solved 1 problems with JS
- ☕ Test Automation University: done with ch 5 of intro to cypress
- ☕ hashnode blog: started a draft
- ☕ anki: reviewed cards

[10 Heroku alternatives to host your app in 2022](https://autoidle.com/blog/heroku-alternatives)


## Day 88

- ☕ codewars: solved 4 problems with JS
- ☕ hacker rank: solved 1 problems with JS
- ☕ Test Automation University: done with ch 6 and 7 of intro to cypress
- ☕ anki: reviewed cards

## Day 89

- ☕ codewars: solved 4 problems with JS
- ☕ hacker rank: solved 1 problems with JS
- ☕ DSA: reviewed hashtable/hashmap
- ☕ Test Automation University: done with intro to cypress
- ☕ anki: reviewed cards

## Day 90

- ☕ codewars: solved 4 problems with JS
- ☕ hacker rank: solved 1 problems with JS
- ☕ 100Devs: watched class 35 (callback, promise, async, and node)
- ☕ anki: reviewed cards

[Back to top](#links)

## Day 91

- ☕ GitHub: set up project boards for 2 repos to learn how to use the board to organize your projects
- ☕ Interview Prep: added answers for html section
- ☕ anki: reviewed cards

## Day 92

- ☕ codewars: solved 3problems with JS
- ☕ hacker rank: solved 1 problems with JS
- ☕ DSA: read about stacks and queues
- ☕ Interview Prep: added 3 CSS answers
- ☕ anki: reviewed cards and added 5 cards

## Day 93


## Day 94


## Day 95


[Back to top](#links)

## Day 96


## Day 97


## Day 98


## Day 99


## Day 100


[Back to top](#links)
