const Evaluation=require('../models/EvaluateModel')

// CRUD Operations


const getAllEvaluation = async (req, res) => {
    try {
        const evaluations = await Evaluation.find();
        if(!evaluations) return res.status(204).json({'message': 'No evaluations found'});
        res.json(evaluations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


const createEvaluation = async (req, res) => {
    try {
        const result = await Evaluation.create({
            link:req.body.link,
            score: req.body.score,
            commemts: req.body.comments
        });
        res.status(200).json({'message': 'Evaluation done successfully'})
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateEvaluation = async (req, res) => {
    try {
        const id=req.params;
        const evaluation = await Evaluation.findById(id);
        if(!evaluation){
            return res.status(204).json({'message': `No evaluation matches ID ${req.params.id}`});
        }
        const updatedEvaluation = await Evaluation.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json({'message': 'EEvaluation  updated successfully'})
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}






module.exports = {
    getAllEvaluation,
    createEvaluation,
    updateEvaluation
}