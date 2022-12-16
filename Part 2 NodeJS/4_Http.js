const http = require("http")

const URL = "http://jsonplaceholder.typicode.com/users"

http.get( URL, (response) =>{
    console.log("Status: ", response.statusCode)
    console.log("Data: ", response.body)
    let data = []
    response.on("data", (chunk) => {
        data.push(chunk)
    })

    response.on("end", () => {
        console.log("Response ended.")

        const parsedDaat = JSON.parse(Buffer.concat(data).toString())

        console.log("Data: ", parsedDaat)
    })
})