// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// create a function called longerString
//input: string1 and string2
//create a conditional statement that evaluates the length of both strings. if string1 is greater then the statement is true.
//if it's false then string 2 will be used
//output: should be the string with more characters

const longerString = (string1, string2) => {
  if (string1.length > string2.length){
    return string1
  } else {
    return string2
  }
}
// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// console.log(longerString(fruit1, fruit2))
// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// console.log(longerString(fruit2, fruit3))
// this question and previous ones i couldn't use the variable name because the nane wasn't initialize. What i did was input and pass the value of the variable instead of the name. I figured that if you were to change the position of the log then it would read the variable name. Has to do with either local and global scope. Glad that i found out.
// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

//create a function called hotOrNot
//hotOrNot will take any number
//use a conditional statement to see if any given number is greater than above or below "boiling point" or at boiling point
//if the given number is at boiling point then spit out a number, if not then go to the next code, then the next
//output: return the string "above" "below" "at" boiling point

const hotOrNot= (temperature) => {
  if (temperature === 212){
      return`${temperature} is at boiling point`
  } else if (temperature > 212){
      return `${temperature} is above boiling point`
  } else {
    return `${temperature} is below boiling point`
  }
}

// console.log(hotOrNot(212))
const temp1 = 42
const temp2 = 350
const temp3 = 212


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]
//
var mergeCode = myNumbers1.concat(myNumbers2)
console.log(mergeCode.length)

//so i will use a built in method .concat two merge num1 and num2
//then I would call on the code with the .length to get the full length between two codes now that they are merged.

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ohcE"
const currentCohort = "Alpha 2022"
var reverseMe = currentCohort.split("")
console.log(reverseMe.reverse())
//create a code with a built in method that would reverse the string
//input the variable name with the built in code in order to get results
//output reverse string

//So i tried to go with the origin plan. Of logging the variable name and adding the built in method .reverse. But it didn't work because it's one string. Not even a collection of list. One way to over cone that is if i were to split every single little letter into it's own string and then use the reverse method on it.
// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"
//
const myArray = [13, 34, 5, 10, 27, 42]
for (let i = 0; i < myArray.length; i++){
  if(myArray[i] % 2 === 0){
    console.log("even")
  } else {
    console.log("odd")
  }
}

// console.log(myArray)

//create a statement that is called evenOrOdd
//input. would use the for loops that way i am able to go through each element inside the array
//starting point= 0. ending point has to be length of the myarray. then it will iterate up. or in increments
//once i create the for loop i will incorporate the modulas as part as the conditional statement. to evaluate whether each value is oven or odd.

//output: will output a list of strings that has a variation of even and odd
//if statement is true (even) then return string 'even'. else return 'odd' if false


// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

//create a function called subtraction
//input
//will take in two parameters: num1 and num2
//use conditional to see what number is the smallest
//if num1 is the smallest then it will subtract from num2
//if not then it would return num2-num1

//output
//return a number that is subtracts the biggest with the smallest number

const subtraction = (num1, num2) => {
  if (num1 < num2){
    return (num2 - num1)
  } else {
    return (num1 - num2)
  }
}
// console.log(subtraction(num1,num2))
// Set one:
const number1 = 58
const number2 = 100
//with this one I was hoping to pass the variable through the parameters when I called on the function but it was giving me an error. I got the answer right but wasn't as satisfying.
// Set two:
const number3 = 27
const number4 = 24
//with the second set this time I changed the order of the parameter to make sure that the catchall statement works.
