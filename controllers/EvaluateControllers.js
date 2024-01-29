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


const createEvaluation= async (req, res) => {
    let { status, batch, topic, link, student_name,score,comments} = req.body;
  
    try {
  
      // Create a new subject
      let newEvaluation = await Evaluation.create({
        status,
        batch,
        topic,
        link,
        student_name,
        score,
        comments
      });
  
      const data = {
        success: true,
        message: "Evaluation Added!",
      };
  
      // Save the newly created subject
      await newEvaluation.save();
  
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  };

const updateEvaluation = async (req, res) => {
    try {
         const id=req.params.id;
        
        let updatedEvaluation = await Evaluation.findByIdAndUpdate({_id:id}, req.body,{new:true});
        if (updatedEvaluation) {
          return res.status(200).json({
            
           "message": "Evaluation Updated!!"
          });
        }
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}






module.exports = {
    getAllEvaluation,
    createEvaluation,
    updateEvaluation
}