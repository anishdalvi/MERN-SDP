const fs = require("fs")

fs.writeFile("result.txt", "hello from result", (error, data) => {
    console.log("Error :", error)
    console.log("Data :", data)
})

const demoObj = {
    "name":"om",
    "age":11,
    "email":"om@email.com"
}


fs.writeFile("result.json", JSON.stringify(demoObj), (error, data) => {
    console.log("Error :", error)
    console.log("Data :", data)
})


// using sync

fs.writeFileSync("result-syn.txt", JSON.stringify(demoObj),(error, data) => {
    console.log("Error :", error)
    console.log("Data :", data)
})
