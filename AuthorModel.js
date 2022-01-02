const express=require('express');
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://tonia:tonia@ictakfiles.5h8in.mongodb.net/libraryDatabase?retryWrites=true&w=majority",{ useNewUrlParser: true , useUnifiedTopology: true ,useFindAndModify: false});
//changed

const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;