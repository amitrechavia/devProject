const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema({
    idMovie: {
        type: String,
        required : true
    }
})

const Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog