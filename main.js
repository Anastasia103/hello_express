console.log("loading main.js")
const { response } = require('express');
// bringing in the top level function provided by the express framework
let express = require('express');

// this is creating our application object
let app = express();

let PORT = 8080;

// for any get request, where the route is "/hello"m 
// send the string "Hello" on the response
app.get("/hello", function(request, response){
    response.send('hello')
})

app.get("/hello/:name", function(request, response){
    let value = request.params.name
    response.send(`hello there ${value}`)
})
app.get("/bye", function(request, response){
    let value = request.query.name
    if (value === undefined){
    response.send(`see you later`)
    } else {
    response.send(`see you later ${value}`)
    }
})

app.listen(PORT, function(){
    console.log("Application started and listening on port", PORT);
})