const express = require('express');
const { createTodo, updateTodo } = require('./types');
const app = express()

app.use(express.json())

app.post("/todos", function(req,res){
    //input validation using zod
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad);
    if (!parsedPayLoad.success){
        res.status(411).json({
            msg: "Invalid inputs passed"
        })
    }

})
app.get("/todos", function(req,res){
    
})
app.put("/completed", function(req,res){
    //input validation using zod
    const updatePayLoad = req.body;
    const parsedPayLoad = updateTodo.safeParse(updatePayLoad);
    if (!parsedPayLoad.success){
        res.status(411).json({
            msg: "Invalid inputs passed"
        })
    }

    
})

app.listen(3000)