const fs = require("fs")


// Reading file

// fs.readFile("f1.txt", (error, data) => {
//     console.log("error :", error)
//     console.log("data :", data)
//     console.log("data :", data.toString())

// })


// Using File Sync

// console.log("First Console")
// const data = fs.readFileSync("f1.txt")
// console.log("data:", data)
// console.log("data:", data.toString())
// console.log("Second Console")


// Async Testing
console.log("First Console")
fs.readFile("f1.txt", (error, data) => {
         console.log("error :", error)
         console.log("data :", data)
         console.log("data :", data.toString())
         console.log("Second Console")
    
     })
console.log("Third Console")