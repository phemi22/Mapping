// To get the last item in an array

const myArray = ["Sandra", "Abel", "Anderson", "Paul"]
let lastItem = myArray[myArray.length-1]
console.log(lastItem)

// Merging arrays together using the concat method

const firstArray = [1,2,3,4,5]
const secondArray = [5,6,7,8]

const mergedArray = firstArray.concat(secondArray)
console.log(mergedArray)

// for 
const thirdArray = [4,6,9,3,2]
const lastMergedArray = firstArray.concat(secondArray, thirdArray)
console.log(lastMergedArray)

// The join method. You might need split where you use join and vice versa. JavaScript turns the result to string

const names = ["Sandra", "Paul", "Faraday"]
let see = names.join()
console.log(see)

const reverse = ["Sandra", "Paul", "Faraday"]
let result = reverse.join()
console.log(result)

// To take the data back to being an array
let myResult = result.split(",")
console.log(myResult)

// Mapping: Map helps us to loop over an array and it also return an array for us to modify which is a slight difference to for each

const priceArray = [45.4, 30.8, 20.2, 27.1, 54.9]

const data = priceArray.map(function(item){
    let answer = Math.round(item)
    return answer
})

console.log(data)

// Filter method: It is used to filter data from an array. You will always return a condition in the filter method
const myNames = ["Mary", "John", "Theo", "James"]

const filteredValue = myNames.filter(function(item){
    return item === "John"
})

console.log(filteredValue)

const studentRecords = [
    {
        studentName : "Jose",
        studentID : 3456,
        studentScore : 97
    },
    {
        studentName : "Paul",
        studentID : 3656,
        studentScore : 87
    },
    {
        studentName : "Joe",
        studentID : 1234,
        studentScore : 45
    },
    {
        studentName : "Peace",
        studentID : 6789,
        studentScore : 74
    }
]

const filteredRecord = studentRecords.filter(function(item){
    return item.studentScore >= 80
})

console.log(filteredRecord)