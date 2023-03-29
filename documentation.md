Getting Started with Type Script Proejct:


1. install node
2. create app.js file to start running server
    - access http and fs at the top
    - create a varibale to run port
    - create a server with http.createServer()
        - this function takes in a req, res
        - in this function you want to tell browse you are going to write html by using res.writeHead() which takes in status code and     { 'Content-Type': "text/html" }
        - then you wnat to use the fs.readfile() to find the file you want to read and also create a function(errorm data)
    - use server.listen(port, function(error))
        - then inside just write a conditional that logs if the server is starting or not

3. npm init
    - to download package.json
4. install typescipt 
    - npm i --save-dev typescript
