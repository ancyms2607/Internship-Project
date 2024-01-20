const express = require("express");
const router = express.Router();
const MentorModel = require("../../models/MentorModel");
const verifyJWT=require('../../middleware/verifyJWT')

router.get("/getDetails", verifyJWT ,async (req, res) => {
  try {
    let user = await MentorModel.find(req.body);
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "No Mentor Found" });
    }
    const data = {
      success: true,
      message: "Mentor Details Found!",
      user,
    };
    res.json(data);
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

router.post("/addDetails", verifyJWT, async (req, res) => {
  let { MentorName , Email , PhoneNumber , Password , ProjectTopics} = req.body;

  try {
    // Create a new mentor
    let newMentor = await Subject.create({
      MentorName,
      Email,
      PhoneNumber,
      Password,
      ProjectTopics
    });

    const data = {
      success: true,
      message: "Mentor Added!",
    };

    // Save the newly created mentor
    await newMentor.save();

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});


router.post("/updateDetails/:id", verifyJWT,async (req, res) => {
  try {
    let updateMentor = await MentorModel.findByIdAndUpdate(req.params.id, req.body);
    if (!updateMentor) {
      return res.status(400).json({
        success: false,
        message: "No Mentor Found",
      });
    }
    const data = {
      success: true,
      message: "Updated Successfull!",
    };
    res.json(data);
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

router.delete("/deleteDetails/:id", verifyJWT,async (req, res) => {
  try {
    let deleteMentor = await MentorModel.findByIdAndDelete(req.params.id);
    if (!deleteMentor) {
      return res.status(400).json({
        success: false,
        message: "No mentor Found",
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
}); 



module.exports = router;