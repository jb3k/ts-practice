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
5. once install run command:
    - npx tsc --init
    - to create the boiler plate config file that translates typescript to JS
    - NOTE *file may say there is an error until you create ts and js files in your repo

6. create a src folder to write your ts files in
7. create a dest folder to store the destination files
8. add "start" script to package.json file 
    - "start": "tsc --watch"
    - so that as long as this is running the file will get complied from ts to js automatically
9. you can also uncomment the 'outDir' method on tscconfig.json file to send all the converted ts files to that folder you specify.
    -     "outDir": "./dest", /* Specify an output folder for all emitted files. */

10. However, if you want to install JS packages you can take a different route using a TS bundler (snowpack)


Getting Sarted with TypeScirpt using Snowpack

1. In a blank file run command:
    - npx create-snowpack-app . --template @snowpack/app-template-blank-typescript --force
    - it will ask you to install
    - use the --force only if you have a blank doc so it doesnt delete everything else

* Now if you want to download extra packing in node modules, the browser will be able to read the new packages. 

2. once you start, you can delete everything in the index.ts file to get started
* note you may need to comment out the "isolatedModules": true key/value to stop the errors in the beginning so that you dont need to use the imports and exports right away.
