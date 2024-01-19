const Sublist=require('../models/SublistModel')


// CRUD Operations

const getAllSubmissions = async (req, res) => {
    try {
        const submissions = await Sublist.find();
        if(!submissions) return res.status(204).json({'message': 'No submissions found'});
        res.json(submissions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



const getOneSubmission = async (req, res) => {
    if(!req?.params?.id){
        return res.status(400).json({'message': 'Submission ID required'});
    }
    try {
        const submission = await Sublist.findOne({_id: req.params.id}).exec();
        if(!submission){
            return res.status(204).json({'message': `No submission matches ID ${req.params.id}`});
        }
        res.json(submission);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



//  route to filter projects basedon topic and batch
const filterSubmissions= async (req, res) => {
    const { topic, batch } = req.params;
  
    try {
      const submissions = await Sublist.find({ topic, batch });
      res.json(submissions);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  


module.exports = {
    getAllSubmissions,
    getOneSubmission,
    filterSubmissions
}