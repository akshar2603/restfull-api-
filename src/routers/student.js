const express = require('express');
const app = express() ;
const Student = require("../models/students")
const port =  8000;

app.use(express.json()) ;

// app.use(router) ; // we cant define it above we must have to difine it after using it

// create a router 
const router = new express.Router() ;

// we need to define the router 

app.get('/' , (req, res) =>{
    res.send("i am base page for the local host and create with the app.get")
}) ;

router.get('/akshar' , (req, res) =>{
    res.send("hello kem chho ") ;
})
router.post('/students' , async (req,res) =>{
    try{
        const user = new Student(req.body); // take the data from body of postman post request raw part 
        const createUser= await user.save() ;
        res.status(201).send(createUser);

    }
    catch(e){
        res.status(400).send(e);
    }
}); 
// get the date 
router.get('/students' , async (req,res) =>{
    try{
        const student = await Student.find() ;

        res.status(200).send(student) ;

    }
    catch(e){
        res.status(400).send(e);
    }
});  // async await is always better option for error handling and future interview 

router.get('/students/:id' , async (req,res) =>{
    try{
        const _id = req.params.id ;
        const student = await Student.findById(_id) ;

        res.status(200).send(student) ;
        // const student = await Student.findBy() ;

        // res.status(200).send(student) ;

    }
    catch(e){
        res.status(400).send(e);
    }
});
// update the data with the help of api 
router.patch('/students' , async (req,res) =>{
    try{
        const student = await Student.find() ;

        res.status(200).send(student) ;

    }
    catch(e){
        res.status(400).send(e);
    }
});  // async await is always better option for error handling and future interview 

router.patch('/students/:id' , async (req,res) =>{
    try{
       
        const _id = req.params.id  ;
        const student = await User.findByIdAndUpdate( _id, req.body, { new: true });  // we can send updated values in ppost man body part 
           

        res.status(200).send(student) ;
        // const student = await Student.findBy() ;

        // res.status(200).send(student) ;

    }
    catch(e){
        res.status(400).send(e);
    }
});
// delete the things 

router.delete('/students/:id' , async (req,res) =>{
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


app.use(router) ;

app.listen(port, () => {
    console.log("connection is successful established") ;
});
 
module.exports = router ; 

// kaikvastu thati hoi pacchi vaprvi hoi to app.use method ma a functionality nakhi devani