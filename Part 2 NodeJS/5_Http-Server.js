const http = require("http")
const qs = require("querystring")
const DATA = []

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

            res.write(JSON.stringify(DATA))
            return res.end()
        }
        if(req.method == 'POST'){
            let body = ''
            req.on('data', chunk => {
                body += chunk.toString()   // Convert Buffer to String
            })
            return req.on('end', ()=> {
                console.log(body)
                DATA.push(qs.parse(body))
                res.write("User Created")
                res.end("Ok POST end")
            })

        }
        return res.end()
        
        }

}).listen(8000)