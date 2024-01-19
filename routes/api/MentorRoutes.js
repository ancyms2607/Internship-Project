const express = require("express");
const router = express.Router();
const MentorModel = require("../../models/MentorModel");

router.post("/getDetails", async (req, res) => {
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

router.post("/addDetails", async (req, res) => {
  try {
    let user = await MentorModel.findOne(req.body);
    if (user) {
      return res.status(400).json({
        success: false,
        message: "Mentor Already Exists",
      });
    }
    user = await MentorDetails.create(req.body);
    const data = {
      success: true,
      message: "Mentor Details Added!",
      user,
    };
    res.json(data);
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

router.post("/updateDetails/:id", async (req, res) => {
  try {
    let user = await MentorModel.findByIdAndUpdate(req.params.id, req.body);
    if (!user) {
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

router.delete("/deleteDetails/:id", async (req, res) => {
  try {
    let user = await MentorModel.findByIdAndDelete(req.params.id);
    if (!user) {
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

router.get("/count", async (req, res) => {
  try {
    let user = await MentorModel.count(req.body);
    const data = {
      success: true,
      message: "Count Successfull!",
      user,
    };
    res.json(data);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Internal Server Error", error });
  }
});

module.exports = router;
