// here with the help of express router we have call api in student.js and use in that file so the actual concept for the express router is inside the student.js it sim router folder



const express = require('express');
const app = express() ;
require("./db/conn")
const StudentRouter = require("./routers/student") ;


app.use(StudentRouter) ;


