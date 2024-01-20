const express = require("express");
const router = express.Router();
const Subject = require("../../models/SubjectModel");
const verifyJWT=require('../../middleware/verifyJWT')

router.get("/getSubject", verifyJWT,async (req, res) => {
  try {
    let subject = await Subject.find();
    if (!subject) {
      return res
        .status(400)
        .json({ success: false, message: "No Subject Available" });
    }
    const data = {
      success: true,
      message: "All Subject Loaded!",
      subject,
    };
    res.json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});


router.post("/addSubject", verifyJWT, async (req, res) => {
  let { Course, ProjectTopic, Batch, Mentor } = req.body;

  try {

    // Create a new subject
    let newSubject = await Subject.create({
      Course,
      ProjectTopic,
      Batch,
      Mentor
    });

    const data = {
      success: true,
      message: "Subject Added!",
    };

    // Save the newly created subject
    await newSubject.save();

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});


router.put("/editSubject/:id", verifyJWT ,async(req,res)=>{
  try {
    const id=req.params;
    const subject = await Subject.findById(id);
    if(!subject){
        return res.status(204).json({'message': `No subject matches ID ${req.params.id}`});
    }
    const updateSubject = await Subject.findByIdAndUpdate(id, req.body, {new:true});
    res.status(200).json({'message': 'Subject  updated successfully'})
    
} catch (error) {
    res.status(500).json({ error: error.message });
}
}
)

router.delete("/deleteSubject/:id", async (req, res) => {
  try {
    let subject = await Subject.findByIdAndDelete(req.params.id);
    if (!subject) {
      return res
        .status(400)
        .json({ success: false, message: "No Subject Exists!" });
    }
    const data = {
      success: true,
      message: "Subject Deleted!",
    };
    res.json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

module.exports = router;
