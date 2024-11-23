const mongoose= require('mongoose')
require("dotenv").config();

const Connection=mongoose.connect("mongodb+srv://ogconstructionsolution:L2nTcLrtTMRBdLPj@cluster0.6wxkv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

module.exports={
    Connection
}