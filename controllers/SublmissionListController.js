const SubmissionList=require('../models/SubmissionListModel')


// CRUD Operations

const getAllSubmissions = async (req, res) => {
    try {
        let submissions = await SubmissionList.find();
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
        let submission = await SubmissionList.findOne({_id: req.params.id}).exec();
        if(!submission){
            return res.status(204).json({'message': `No submission matches ID ${req.params.id}`});
        }
        res.json(submission);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



const deleteSubmission= async (req, res) => {
    try {
      let deletesubmission = await SubmissionList.findByIdAndDelete(req.params.id);
      if (!deletesubmission) {
        return res.status(400).json({
          success: false,
          message: "No submission Found",
        });
      }
      const data = {
        success: true,
        message: "Deleted Successfull!",
      };
      res.json(data);
    } catch (error) {
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  }; 


//  route to filter projects basedon topic and batch
const filterSubmissions= async (req, res) => {
    const { topic, batch } = req.params;
  
    try {
      let submissions = await SubmissionList.find({ topic, batch });
      res.json(submissions);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  


module.exports = {
    getAllSubmissions,
    getOneSubmission,
    deleteSubmission,
    filterSubmissions
}