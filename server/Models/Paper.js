import mongoose from 'mongoose';

const paper = mongoose.Schema({
    Name:String,
    Trade:String,
    RegNo:String,
    Year:String,
    TeacherName:String,
    SubjectName:String,
    SubjectCode:String,
    FileName:String
});

export default mongoose.model('paper', paper);