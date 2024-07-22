const express = require('express');
const app = express() ;
require("./db/conn")
const Student = require("./models/students")
const port =  8000;

app.use(express.json()) ;
 // aya get request chhe atle chrome ma y chalse databasae mathi data fetch karine json na format ma batavshe 
app.delete('/students' , async (req,res) =>{
    try{
        const student = await Student.find() ;

        res.status(200).send(student) ;

    }
    catch(e){
        res.status(400).send(e);
    }
});  // async await is always better option for error handling and future interview 

app.delete('/students/:id' , async (req,res) =>{
    try{
        const _id = req.params.id ;
        const student = await Student.findByIdAndDelete(_id) ;

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