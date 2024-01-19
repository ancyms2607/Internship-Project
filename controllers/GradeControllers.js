const  Grade=require('../models/GradeModel')


// CRUD Operation

const getAllGrades = async (req, res) => {
    try {
        const grades = await Grade.find();
        if(!grades) return res.status(204).json({'message': 'No grades found'});
        res.json(grades);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports={
    getAllGrades
}