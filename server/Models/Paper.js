import mongoose from 'mongoose';

const paper = mongoose.Schema({
    Name:String,
    Trade:String,
    RegNo:String
});

export default mongoose.model('paper', paper);