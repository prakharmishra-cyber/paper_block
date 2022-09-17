import express  from 'express';
import mongodb from 'mongodb';
import paper from '../Models/Paper.js';

const router = express.Router();
const Binary  = mongodb.Binary;

router.get('/', async (req, res)=>{
    
    try {
        const Paper = await paper.find();
        res.status(200).json({
            Paper
        });
        
    } catch (error) {
        res.status(404).json({
            message:error.message
        })
    }

});

router.post('/', async (req, res)=>{
    try {

        const question_paper = new paper({
            Name:req.body.name,
            Trade:req.body.trade,
            RegNo:req.body.regno,
            Year:req.body.year,
            TeacherName:req.body.teacherName,
            SubjectName:req.body.subjectName,
            SubjectCode:req.body.subjectCode,
            FileName:req.body.fileName
        });

        await question_paper.save();
        res.status(201).json({
            message:'question_paper added successfully'
        });
        
    }catch(err) {
        res.status(409).json({ message:'cannot save'});
    }
})

router.get('/getTags/:tag', async(req, res)=>{

    const { tag } = req.params;

    console.log(tag);

    try {
        const query_Result = await paper.where('SubjectName').equals(tag); 

        res.status(201).json(query_Result);
    } catch (error) {
        res.status(404).json({
            message:'Some error occured'
        });
    }

})

export default router;