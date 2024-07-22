const express = require('express');
const app = express() ;
require("./db/conn")
const Student = require("./models/students")
const port =  8000;

app.use(express.json()) ;
 // aya get request chhe atle chrome ma y chalse databasae mathi data fetch karine json na format ma batavshe 
app.patch('/students' , async (req,res) =>{
    try{
        const student = await Student.find() ;

        res.status(200).send(student) ;

    }
    catch(e){
        res.status(400).send(e);
    }
});  // async await is always better option for error handling and future interview 

app.patch('/students/:name' , async (req,res) =>{
    try{
       
        const name = req.params.name  ;
        const newAge = req.body.phone ;
        const student = await User.findOneAndUpdate({ name: name }, { age: newAge }, { new: true });  // we can send updated values in ppost man body part 
           

        res.status(200).send(student) ;
        // const student = await Student.findBy() ;

        // res.status(200).send(student) ;

    }
    catch(e){
        res.status(400).send(e);
    }
});

// we can do same thing with the help of id but for that we are using patch request so we can easily update the data with update query
app.listen(port, () => {
    console.log("connection is successful established") ;
});