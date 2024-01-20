const ProjectTopic =require('../models/ProjectTopicModel')

// CRUD Operation

const getAllProjectTopics = async (req, res) => {
    try {
        const projectTopics = await ProjectTopic.find();
        if(!projectTopics) return res.status(204).json({'message': 'No project topics found'});
        res.json(projectTopics);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}




module.exports = {
    getAllProjectTopics
}