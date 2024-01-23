const express = require("express");
const router = express.Router();
const SubjectData = require("../../models/SubjectModel");
const verifyJWT=require('../../middleware/verifyJWT')

// CRUD operations

router.get("/getSubject", async (req, res) => {
  try {

    let subjects = await SubjectData.find();
    console.log(subjects)
    if (subjects.length===0) {
       res.status(400).json({ success: false, message: "No Topic Available" });
    }else{
    res.status(200).json(subjects)};
    
  } catch (error) {
    console.error(error.message);
  
  }
});



router.post("/addSubject",  async (req, res) => {
  let { Course, ProjectTopic, Batch, Mentor } = req.body;

  try {

    // Create a new topic
    let newSubject = await SubjectData.create({
      Course,
      ProjectTopic,
      Batch,
      Mentor
    });

    const data = {
      success: true,
      message: "Topic Added!",
    };

    // Save the newly created topic
    await newSubject.save();

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});


router.put("/editSubject/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const subject = await SubjectData.findById(id);

    if (!subject) {
      return res.status(204).json( `No topic matches ID ${req.params.id}` );
    }

    const updateSubject = await SubjectData.findByIdAndUpdate(id, req.body,{new:true});
    res.status(200).json({ 'message': 'Topic updated successfully' });
    console.log(updateSubject);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



router.delete("/deleteSubject/:id", async (req, res) => {
  try {
    let subject = await SubjectData.findByIdAndDelete(req.params.id);
    if (!subject) {
      return res
        .status(400)
        .json({ success: false, message: "No Topic Exists!" });
    }
    const data = {
      success: true,
      message: "Topic Deleted!",
    };
    res.json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

module.exports = router;
