// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))


// a) Your answer: the output that we would expect is that the string "indigo" would be added at the end of the array.
// b) Verify and explain: Because I did not call on the variable "color" I did not get the expected outcome. All it did was push out the number of 5 which correlates to the number of index.


// --------------------1) What will this log?

const cohort = "Alpha 2022"
// console.log(cohort.length)

// a) Your answer: when you use the built in method .length it will return a number 10.
// b) Verify and explain: i got the answer right because with the built in method .length ti will take in to account the number of index and push it out.


// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: this will output the letter "o" inside the string "Hello World"
// b) Verify and explain: I got the answer right because when you call on the variable and use the [] with a number inside you're calling out the index which is the placement of the value.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
// const index = 1
// console.log(languages[index])

// a) Your answer: this will take output the value of the placement with 1. which would be "ruby"
// b) Verify and explain: just almost the same concept as the last. This time though it has an extra step. Instead of the actual number of value passed through the brackets you have the variable name. The variable name is set to 1.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase());
// a) Your answer: It will take the values and put it all in caps lock.
// b) Verify and explain: I wasn't able to find out if my predictions were correct but I am certain that I'm right. It won't go through the terminal because it says there is an error and that it's not a function.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: I know it's going to take the length of each value(3) but I don't know what the typeof is. should output the type of data that each element is.
// b) Verify and explain: I think this time I was very shocked that the answer wasn't string but number istead. I believe the reason that it came out as number because when you the datatype.length it will read as a number because it takes the index of the string. So when you do the typeof it returns as number.
