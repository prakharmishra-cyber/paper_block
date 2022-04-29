import express  from 'express';
import paper from '../Models/Paper.js';

const router = express.Router();

router.get('/', (req, res)=>{
    res.send('you are in question paper route')
});

router.post('/', async (req, res)=>{
    try {
        const question_paper = new paper({
            Name:'Prakhar Mishra',
            Trade:'GCS',
            RegNo:'1940051'
        });

        await question_paper.save();
        res.status(201).json({
            message:'question_paper added successfully'
        });
        
    }catch(err) {
        res.status(409).json({ message:'cannot save'});
    }
})

export default router;