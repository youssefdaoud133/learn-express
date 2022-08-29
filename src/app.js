const g = console.log
const express = require("express")
const path = require('path')
// const request = require("postman-request")
const app = express()
const publicdir = path.join(__dirname,"../public")
const viewstemplets = path.join(__dirname,"../templets/views")
const partialspath = path.join(__dirname,"../templets/partials")
const hbs = require("hbs")
app.use(express.static(publicdir))
app.set("view engine","hbs")
app.set("views",viewstemplets)

hbs.registerPartials(partialspath)

//
const addressdata = require('../learn/await');


//

// keyyyyyy


    // let promise = addressdata.getatwal(location)

    //  promise.then((data) =>{
    //      addressdata.databack(data).then((result) =>{
    //        g( {country:result.location.country, temperature:result.current.temperature})
    //      })
        
    // })
    


 



//











app.get("",(req,res) =>{
    res.render("index",
    {
        name :"youssef daoud"
    })
})


app.get("/index",(req,res) =>{
    res.render("index",
    {
        name :"youssef daoud"
    })
})

app.get("/magy" , (req,res) =>{
    res.render("Magy",{
        name : "Help" 
    })
})

app.get("/about",(req,res) =>{res.render("About",{name:"About"})})


app.get("/weather", (req,res) =>{
    if(req.query.address){
        let promise = addressdata.getatwal(req.query.address)

     promise.then((data) =>{
         addressdata.databack(data).then((result) =>{
            res.send({country:result.location.country, temperature:result.current.temperature})
         })
        
    })
        
    }else{
        res.send("you must give your address")
    }
    
}) 

app.get("*",(req,res)=>{
    res.render("errorpag")
})
g(publicdir)

const port = process.env.PORT || 3000
app.listen(port, ()=>{g(`server is up on port ${port}`)})