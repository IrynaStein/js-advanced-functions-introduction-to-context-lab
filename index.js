// Your code here

function createEmployeeRecord(arr1) {
    const employeeObj = {
        firstName: arr1[0],
        familyName: arr1[1],
        title: arr1[2],
        payPerHour: arr1[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeObj;
};
//Challenge 2
// createEmployeeRecords
// Argument(s)
// Array of Arrays
// Returns
// Array of Objects
// Behavior
// Converts each nested Array into an employee record using createEmployeeRecord and accumulates it to a new Array
function createEmployeeRecords(arr2) {
    const newArray = [];
    arr2.forEach(element => {
        newArray.push(createEmployeeRecord(element))
    })
    return newArray;
};

//Challenge 3
// createTimeInEvent
// Argument(s)
// An employee record Object
// A date stamp ("YYYY-MM-DD HHMM")
// Returns
// The employee record
// Behavior
// Add an Object with keys to the timeInEvents Array on the record Object:
// type: Set to "TimeIn"
// hour: Derived from the argument
// date: Derived from the argument

function createTimeInEvent(obj1, dateStamp) {
    obj1.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateStamp.split(' ')[1]),
        date: dateStamp.split(' ')[0]
    })
    return obj1
}
//Challenge 4
// createTimeOutEvent
// Argument(s)
// An employee record Object
// A date stamp ("YYYY-MM-DD HHMM")
// Returns
// The employee record
// Behavior
// Add an Object with keys to the timeOutEvents Array on the record Object:
// type: Set to "TimeOut"
// hour: Derived from the argument
// date: Derived from the argument
function createTimeOutEvent(obj2, dateStamp) {
    obj2.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dateStamp.split(' ')[1]),
        date: dateStamp.split(' ')[0]
    })
    return obj2
}

//Challenge 5
// hoursWorkedOnDate
// Argument(s)
// An employee record Object
// A date of the form "YYYY-MM-DD"
// Returns
// Hours worked, an Integer
// Behavior
// Given a date, find the number of hours elapsed between that date's timeInEvent and timeOutEvent
//try adding if else statement so it can compare date and execute calculation if true


function hoursWorkedOnDate(obj3, date) {
    // console.log(obj3)
    // console.log(date)
    const x = obj3.timeInEvents.find(function (element) {
        return element.date === date
    })
    const y = obj3.timeOutEvents.find(element => element.date === date)
    const workedHours = (y.hour - x.hour) / 100
    return workedHours;

}

//Challenge 6
// wagesEarnedOnDate
// Argument(s)
// An employee record Object
// A date of the form "YYYY-MM-DD"
// Returns
// Pay owed
// Behavior
// Using hoursWorkedOnDate, multiply the hours by the record's payRate to determine amount owed. Amount should be returned as a number.

function wagesEarnedOnDate(obj4, date) {
    const workedHours = hoursWorkedOnDate(obj4, date)
    const payRate = obj4.payPerHour
    const payOwed = workedHours * payRate
    return payOwed
}


//Challenge 6 
// allWagesFor
// Argument(s)
// An employee record Object
// Returns
// Pay owed for all dates
// Behavior
// Using wagesEarnedOnDate, accumulate the value of all dates worked by the employee in the record used as context. Amount should be returned as a number. HINT: You will need to find the available dates somehow...


function allWagesFor(obj5) { //keeing a running total. Try to re-write with reducer
    let wages = 0
    obj5.timeInEvents.forEach(function (element) {
        wages = wages + wagesEarnedOnDate(obj5, element.date)
    })
    return wages;
}

// function  allWagesFor(empRecObj){
//     let wages = empRecObj.timeInEvents.reduce((acc,event) => {
//         return acc + wagesEarnedOnDate(empRecObj, event.date)
//     },0) 
//     return wages;
// }


// Challenge 7
// findEmployeeByFirstName
// Argument(s)
// srcArray: Array of employee records
// firstName: String representing a first name held in an employee record
// Returns
// Matching record or undefined
// Behavior
// Test the firstName field for a match with the firstName argument

function findEmployeeByFirstName(srcArray, firstName) {
    // console.log(srcArray)
    // console.log(firstName)
    const nameMatch = srcArray.find(function(element){
        element.firstName === firstName
        return element.firstName
    })
   return nameMatch
}

// Challenge 8
// calculatePayroll
// Argument(s)
// Array of employee records
// Returns
// Sum of pay owed to all employees for all dates, as a number
// Behavior
// Using wagesEarnedOnDate, accumulate the value of all dates worked by the employee in the record used as context. Amount should be returned as a number.

function calculatePayroll(array){
    console.log(array)
    let total = 0;
    array.forEach(function(element){
   total = total + allWagesFor(element)
})
return total
}

























