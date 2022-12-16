const http = require("http")

http.createServer((req, res) => {

    console.log("pathname: " , req.url)
    console.log("method: ", req.method)

    // Single Method

    // if (req.url == "/users"){
    //    res.write("User Info")
    //    return res.end()
    // }

    // Multiple Methods

    if (req.url == "/users"){
        if(req.method == 'GET'){
            res.write("Get User Info")

        }
        if(req.method == 'POST'){
            res.write("User Info Created")

        }
        return res.end()
        
        }

    res.write("Hello World")
    res.end()
}).listen(8000)