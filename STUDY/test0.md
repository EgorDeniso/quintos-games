# Test 0

What's a boolean?
True or false

What's a String?
text data

What symbol is used for multiplication in JS?

```js
*
```

What does a single equals sign do?
changes the value of a variable

What is the double equals sign used for?
checking equality

What is a scope? What happens to variables created in a scope after the end of the scope is reached?
they get deleted

Create a truth table for this compound boolean equation:
x && !y

x y
0 0 = 0
1 0 = 1
0 1 = 0
1 1 = 0

What is an array?
stores list of data

Create an JS array from this list of numbers: 7, 5, 8, 2

```js
// put your JS answer here
let numbers = [7, 5, 8, 2];
```

How could you get the number of items in an array called `apples`?

```js
// put your JS answer here
let items = apples.length;
```

Where is coordinate (0, 0) on the p5.js canvas?
top left

Create a JS function called `sayGoodMorning`. Use `console.log` to print a good morning message to the JavaScript console.

```js
function sayGoodMorning() {
	console.log('Good morning!');
}
```

For loops have three sections, what character is used to seperate them?
;

What does the += operator do?
increases value of a variable by an amount

What does the ++ operator do?
adds 1 to the value of a variable

Write a standard for loop that prints the numbers 0 to 9 to the console.

```js
for (let i = 0; i < 10; i++) {
	console.log(i);
}
```

The Array join function can be described as the opposite of the String split function. Why?
join adds all the items in an array together into a single string and split function seperates a string into an array

Retrieve the third character in the string "Hello World" assign it to a variable called `thirdChar`.

```js
let str = 'Hello World';

let thirdChar = str[2];
```

In the following code segments a student has made some JavaScript syntax errors. For each code segment, explain what errors the student has made.

```js
let num 5

if (num > 10) {
  alert("The number is greater than 10.")
}
```

the error is that it always makes 5 more than 10 and there is no = afte "let num"

```js
let num = 2

if num == 2 {
  alert("The number is 2.")
} else if num == 3 {
  alert("The number is 3.")
} else {
	alert("The number is not 2 or 3.")
}
```

there are no parenthesis around the if statement conditions

```js
let num = prompt('Enter a number:');

if (num % 2 == 0) {
	alert(num + ' is even.');
else alert(num + ' is odd.');
```

its missing brace, its also missing the await before the prompt

```js
let num = 7

while (num =< 7) {
  num = await prompt("Enter a number greater than 7:")
}

await alert "Thank you!"
```

the alert function is missing parenthesis

the greater than or equals symbol is <=

````js
let num = 1;

while num <= 10 {
	num = num + 1;
	alert('The number is now' + num);
}
```
alert is wrong because there would be no space after the word now
there are no parenthesis on the while loop condition
````
