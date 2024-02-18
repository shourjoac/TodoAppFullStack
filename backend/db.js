const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://admin:1234567890@cluster0.ikuuj81.mongodb.net/")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: booleam
})
const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo: todo
}
