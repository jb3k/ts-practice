const http = require('http')
const fs = require('fs')

const port = 3000

const server = http.createServer(function (req, res) {
    // tell browser we are going to write html
    res.writeHead(200, { 'Content-Type': "text/html" })

    //takes the file we want to read
    fs.readFile('index.html', function (error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error: file not found')
        } else {
            res.write(data)
        }
        res.end()
    })

})

server.listen(port, function (error) {
    if (error) {
        console.log('Something went wrong')
    } else {
        console.log('Server is listening on port ' + port)
    }

})
