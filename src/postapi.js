const express = require('express');
const app = express() ;
require("./db/conn")
const Student = require("./models/students")
const port =  8000;

app.use(express.json()) ;
// app.get("/" ,  (req,res) => {
//     res.send("hello bhai") ;
// } );

//  way1 create a students with normal function 
// app.post('/students' , (req,res) =>{
//     // req.body has pure json darta so we can print it with express.json method
//     console.log(req.body) ;
//     const user = new Student(req.body);
//     res.send("hello from other side") ;
//     user.save().then( () =>{
//         res.send(user);
//     }).catch((e) =>{
//         console.log(e) ;
//     });  // both async and this are return promise but this is async await is good 

    
// }); 
// way 2  with the help of asyc  await better 
app.post('/students' , async (req,res) =>{
    try{
        const user = new Student(req.body); // take the data from body of postman post request raw part 
        const createUser= await user.save() ;
        res.status(201).send(createUser);

    }
    catch(e){
        res.status(400).send(e);
    }
});  // async await is always better option for error handling and future interview 
app.listen(port, () => {
    console.log("connection is successful established") ;
});