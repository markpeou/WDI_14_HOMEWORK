// Arrays
// Javascript provides us with a number of native methods that allow us to interact with arrays. Find methods that do each of the following and provide an example...
//
// Add an element to the back of an array.
.push()
// Remove an element from the back of an array.
.pop()
// Add an element to the front of an array.
.unshift()
// Remove an element from the front of an array.
.shift()
// Concatenates all the elements in an array into a string.
.join("")
// Separates the characters of a string into an array. This one is a string method.
.split("")

// What will the contents of the below arrays be after the code samples are executed? Come up with an answer yourself before testing it out in the console.

var numbers = [2, 4, 6, 8]
numbers.pop() // [2,4,6]
numbers.push(10)// [2,4,6,10]
numbers.unshift(3) // [3,2,4,6,10]

// What is the return value of the below code sample? Come up with an answer yourself before testing it out in the console.

var morse = ["dot", "pause", "dot"]
var moreMorse = morse.join(" dash ") // "dot dash pause dash dot"
moreMorse.split(" ")// ["dot", "dash", "pause", "dash", "dot"]

// What will the contents of the below array be after the below code sample is executed? Come up with an answer yourself before testing it out in the console.

var bands = []
var beatles = ["Paul", "John", "George", "Pete"]
var stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
bands.push(beatles) // bands = ["Paul","John","George","Pete"]
bands.unshift(stones) // ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
                      //["Paul", "John", "George", "Pete"]
bands[bands.length - 1].pop() // bands = ["Paul","John","George","Pete"]
                          // actual answer "Pete"
bands[0].shift() // "Brian"
                  // actual answer "Brian"

bands[1][3] = "Ringo" // ["Paul", "John", "George", "Pete","Ringo"]
                  // actual answer "["Paul", "John", "George", "Ringo"]"
