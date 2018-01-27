// 1. Create an array of the days of the week
// Create a variable named days_of_the_week as an array of the following:
// Monday
// Tuesday
// Wednesday
// Thursday
// Friday
// Saturday
// Sunday

var days_of_the_week = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
console.log(days_of_the_week)

// 2. My calendar says the first day is Sunday...
// Remove Sunday from the last postion and move it to the first position. Use array methods.
var days_of_the_week = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
days_of_the_week.pop("sunday")
days_of_the_week.unshift("sunday")
console.log(days_of_the_week)

// 3. Create a new array of the days of the week:
// The first inner array should be the weekdays
// The second inner array should be the weekend days

var days2 = [["monday","tuesday","wednesday","thursday","friday"],[,"saturday","sunday"]]

// 4. Remove either the weekdays or the weekends
// Your choice...
var days2 = [["monday","tuesday","wednesday","thursday","friday"],[,"saturday","sunday"]]
days2.pop([1])

//
// 5. Sort the remaining days alphabetically
days2.sort()
