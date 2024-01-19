const TeamManage =require('../models/TeamManageModel')




// CRUD Operations

const getAllGroups = async (req, res) => {
    try {
        const groups = await TeamManage.find();
        if(!groups) return res.status(204).json({'message': 'No groups found'});
        res.json(groups);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



const getOneGroup = async (req, res) => {
    if(!req?.params?.id){
        return res.status(400).json({'message': 'Group ID required'});
    }
    try {
        const group = await TeamManage.findOne({_id: req.params.id}).exec();
        if(!group){
            return res.status(204).json({'message': `No group matches ID ${req.params.id}`});
        }
        res.json(project);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    getAllGroups,
    getOneGroup
}