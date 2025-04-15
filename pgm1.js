var exp = require("express")
var app = exp()
var port = process.env.PORT || 1234

app.use((req,res,next)=>{
    console.log("First Middleware: I am the first one to execute")
    next()
})
app.get("/",(req,res)=>{
    console.log("default path")
    res.send("Default page")
})
app.get("/book",(req,res)=>{
    console.log("Book executed")
    res.send("<h1>Welcome to Book</h1>")
})
app.get("/manojfun/:id",(req,res,next)=>{
    console.log("Middleware executed")
    console.log(req.params)
    var inp = req.params
    if(inp.id==='101'){
        next()
    }
    else{
        console.log("authentication failed")
        res.end()
    } 
},(req,res)=>{
    console.log("response process + business logic")
    // res.sendFile(__dirname+"/index.html")
    res.sendFile(__dirname+"/views/manoj.html")
})

app.listen(port)
console.log(`Port listening at ${port}..........`)