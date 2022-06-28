# Plan

Lessons:
- TypeScript
- TDD with Jest, maybe mocha and chai
- Data structures and algo
- Node and Express
  
Resources: 
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Traversy Media TypeScript Crash Course](https://www.youtube.com/watch?v=BCg4U1FzODs&t=244s)
- [Algorithms and data structures implemented in JavaScript](https://github.com/trekhleb/javascript-algorithms)
- [6 JavaScript data structures you must know](https://www.educative.io/blog/javascript-data-structures)
- [Unit testing in JavaScript](https://www.youtube.com/playlist?list=PL0zVEGEvSaeF_zoW9o66wa_UCNE3a7BEr)

## Links 

- [Day 05](#day-5) [Day 10](#day-10) [Day 15](#day-15) [Day 20](#day-20) 
- [Day 25](#day-25) [Day 30](#day-30) [Day 35](#day-35) [Day 40](#day-40) 
- [Day 45](#day-45) [Day 50](#day-50) [Day 55](#day-55) [Day 60](#day-60) 
- [Day 65](#day-65) [Day 70](#day-70) [Day 75](#day-75) [Day 80](#day-80) 
- [Day 85](#day-85) [Day 90](#day-90) [Day 95](#day-95) [Day 100](#day-100) 

## Day 1 

- ☕ 1 problem each from codewars and leetcode
- ☕ read Node.js and Express (Part 3) on Full Stack open
- ☕ started a blog draft
- ☕ reviewed anki

Reminder - make sure use .env file to store your password and api. Never push senstive information onto github!!

REST Client

There is an extension called REST Client. It allows you to send HTTP requests within vscode. You could write like this below and get the requests you need. It is pretty cool. Make sure type ### between requests

GET https://example.com/comments/1 HTTP/1.1

GET https://example.com/topics/1 HTTP/1.1

POST https://example.com/comments HTTP/1.1

content-type: application/json

```json
{
    "name": "sample",
    "time": "Wed, 21 Oct 2015 18:27:50 GMT"
}
```

What is CORS?

cross-origin resource sharing is a mechanism that allows restricted resources on web page to be request from anothe domain outside the domain from the first resource was served. By default, the JS code of an app that runs in a browser can only communicate with a server in the same origin. Frontend is in localhost:3000 while server is in localhost:3001, hence why we need to install cors.

[the beast of many beasts](https://github.com/victoriacheng15/codewars-solutions/pull/47)

[group anagrams](https://github.com/victoriacheng15/data-structures-and-algorithms/blob/main/leetcode/solutions/004-group-anagram.test.js)

[Node.js and Express (Part 3)](https://fullstackopen.com/en/part3)

[REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

## Day 2

- ☕ 1 problem each from codewars and leetcode
- ☕ read Intro to React (Part 1) on Full Stack open
- ☕ started on bubble tea api project
- ☕ reviewed anki

[Longest Consective Sequence](https://github.com/victoriacheng15/data-structures-and-algorithms/blob/main/leetcode/solutions/005-longest-consecutive-sequence.test.js)

[Intro to React](https://fullstackopen.com/en/part1)

## Day 3

- ☕ 1 problem project euler
- ☕ continued on bubble tea api project
    - connected to the mongodb
    - can add new teas
- ☕ read chapter 7: project a robot
- ☕ reviewed anki

## Day 4

- ☕ Solved 1 leetcode
- ☕ continued on bubble tea api project
    - added frontend
    - looked into how to implment drag and drop
- ☕ read about drag and drop in html5
- ☕ reviewed anki

<details>
  <summary>See gif</summary>

![image](https://user-images.githubusercontent.com/35031228/174184789-7beb000b-d582-4d6c-9d4a-3cb4e8742598.png)

</details>

[Drag and Drop in Vanilla JavaScript](https://web.dev/drag-and-drop/)

[Using the HTML5 Drag and Drop API](https://stackabuse.com/drag-and-drop-in-vanilla-javascript/ )

## Day 5

- ☕ solved 1 leetcode
- ☕ continued on bubble tea api project
    - finally figured out how to select items inside column
- ☕ published a blog on JavaScript - Mutable Array Methods
- ☕ reviewed anki

[Back to top](#links)

## Day 6

- ☕ solved 1 codewars kata
- ☕ continued on bubble tea api project
    - figuring out how to implment drag and drop feature
- ☕ read Eloquent JavaScript chapter 8: bugs and errors
- ☕ reviewed anki

## Day 7

- ☕ DSA: solved 4 codewars katas
- ☕ bubble tea api: implemented drag and drop feature for the "order"
- ☕ TypeScript:
    - can check the type of the variable based on the assigned value, but can be difficult to check automatically 
    - learned 2 syntax (interface and type) that declares types, but prefer interface
    
```ts
interface User {
  name: string;
  id: number;
}

const user: User = {
  name: 'Victoria',
  id: 1
}
```

```ts
type User = {
  name: string;
};

interface User {
  name: string;
}
```

<details>
  <summary>See gif</summary>

![chrome_YNP0n2ie1S](https://user-images.githubusercontent.com/35031228/174682625-c270fab0-8e46-4f68-bc5a-7918c1f2a31c.gif)

</details>

[TypeScript for JS Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

## Day 8

- ☕ DSA: solved 2 leetcode
- ☕ bubble tea api: implemented the "lock" once the order box contained 2 input elements
- ☕ TypeScript: TS handbook the basic

[TS handbook - the basic](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)

<details>
  <summary>See gif</summary>

![chrome_ZZjIfHxddc](https://user-images.githubusercontent.com/35031228/174902134-f99b827a-bfe0-48c3-b681-0244493a3639.gif)

</details>

## Day 9

- ☕ DSA: solved 2 leetcode
- ☕ bubble tea api: the page will handle the order, if the order exists in the DB, update the count, and if not, insert the new order
- ☕ TypeScript: TS handbook - everyday type chapter about how to implement type checks for arrays, functions, object, union, and types aliases.

The difference between interface and type:
you can have more than 1 interface and type declarations with the same name, however, only interface allows you to add a new field, while type can't do this.

```ts
// no problem
interface Window {
  title: string
}

interface Window {
  ts: TypeScriptAPI
}


// cant do this and show Error: Duplicate identifier 'Window'.
type Window = {
  title: string
}

type Window = {
  ts: TypeScriptAPI
}
```

## Day 10

- ☕ bubble tea api: the page will handle the order, if the order exists in the DB, update the count, and if not, insert the new order

<details>
  <summary>See gif</summary>

  ![chrome_jpMLpvQ1Au](https://user-images.githubusercontent.com/35031228/175402696-ac72649a-a44c-4174-b35d-988455e4200a.gif)

</details>

[Back to top](#links)

## Day 11

- ☕ DSA: solved 1 codewears kata
- ☕ bubble tea api: 
  - fixed the issue that you can submit 2 tea types
  - added history content and sources
- ☕ TypeScript: went through TS - types, function, and complex types lessons on Codecademy


<details>
  <summary>See gif</summary>

![chrome_bzA4hTJFy0](https://user-images.githubusercontent.com/35031228/175665790-a0c76bf8-1336-4743-ac4e-550adc5f289d.gif)
</details>


## Day 12

- ☕ DSA: solved 1 codewears kata
- ☕ bubble tea api: 
  - overhualed colors/theme
  - set up leaderboard
- ☕ TypeScript: went through union types lesson on Codecademy

<details>
  <summary>See gif</summary>

![chrome_Nr4ViwDUgc](https://user-images.githubusercontent.com/35031228/175832501-efa446b9-5e4c-458c-8f13-7675648645e6.gif)

</details>

## Day 13

## Day 14

## Day 15

[Back to top](#links)

## Day 16

## Day 17 

## Day 18

## Day 19

## Day 20

[Back to top](#links)

## Day 21

## Day 22

## Day 23

## Day 24

## Day 25

[Back to top](#links)

## Day 26

## Day 27

## Day 28

## Day 29

## Day 30

[Back to top](#links)

## Day 31

## Day 32

## Day 33

## Day 34

## Day 35

[Back to top](#links)

## Day 36

## Day 37

## Day 38

## Day 39

## Day 40

[Back to top](#links)

## Day 41

## Day 42

## Day 43

## Day 44

## Day 45

[Back to top](#links)

## Day 46

## Day 47

## Day 48

## Day 49

## Day 50

[Back to top](#links)

## Day 51

## Day 52

## Day 53

## Day 54

## Day 55

[Back to top](#links)

## Day 56

## Day 57

## Day 58

## Day 59

## Day 60

[Back to top](#links)

## Day 61

## Day 62

## Day 63

## Day 64

## Day 65

[Back to top](#links)

## Day 66

## Day 67

## Day 68

## Day 69

## Day 70

[Back to top](#links)

## Day 71

## Day 72

## Day 73

## Day 74

## Day 75

[Back to top](#links)

## Day 76

## Day 77

## Day 78

## Day 79

## Day 80

[Back to top](#links)


## Day 81

## Day 82

## Day 83

## Day 84

## Day 85

[Back to top](#links)

## Day 86

## Day 87

## Day 88

## Day 89

## Day 90

[Back to top](#links)

## Day 91

## Day 92

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
