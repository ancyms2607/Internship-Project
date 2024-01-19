const Group =require('../models/ProjectModel')

// CRUD Operation

const getAllGroups = async (req, res) => {
    try {
        const groups = await Group.find();
        if(!groups) return res.status(204).json({'message': 'No groups found'});
        res.json(groups);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}




module.exports = {
    getAllGroups
}