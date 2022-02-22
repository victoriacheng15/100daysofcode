<!-- Links - [Day 5](#day-5) -->
## Day 1 

I made a simple background color picker to show cofffee colors! It also changes images once you clicked! I used onclick event listener instead of addEventListener. Personally, I dont use onclick event listener function but, I am curious what are the differences between onclick and addEventListener. 

Diffenences: 
| type              | addEventListener               | onclick                   |
| ----------------- | ------------------------------ | ------------------------- |
| number of event   | many events                    | single event              |
| event propagation | can control with 3rd arguement | cant control              |
| how to add        | `<script>` or  JS file         | HTML attribute or JS file |
| compability       | Doesn't work on older IE       | works in all brwosers     |

source: [Difference between addEventListenter and onclick in JavaScript](https://www.geeksforgeeks.org/difference-between-addeventlistener-and-onclick-in-javascript/)

[Coffee background picker](https://victoriacheng15.github.io/100daysofcode/coffee-background-picker/)

## Day 2

### Variables

- What is variable? How do you declare?
  - It is a named storage for data.
  - 3 ways to declare, `var`, `let` (this can be reassigned), and `const` (this cannot be reassigned)
- Use uppercase const to name the variable that is defined.
  - e.g. `const COLOR_ORANGE = '#FFA500'`
  
### function

- Functions are the main "builfing blocks" of the programs. 
  - They aloow the code to be called many times without repetitions.

```js
function showMessage() {
  console.log( 'Hello everyone!' );
}
```
- Functions also take parameters or arguements inside the `()` after the function name.
- What to do if there is no parameters?
  - Function also takes a default value by changing `(name)` to `(name = 'Stranger')`

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

placeholder

## Day 4

placeholder

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