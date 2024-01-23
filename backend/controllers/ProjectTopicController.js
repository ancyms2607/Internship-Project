const ProjectTopic =require('../models/ProjectTopicModel')
const SubjectData=require('../models/SubjectModel')

// CRUD Operation

const getAllProjectTopics = async (req, res) => {
    try {
        const projectTopics = await ProjectTopic.find();
        if(!projectTopics) return res.status(204).send('No project topics found');
        res.json(projectTopics);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}




module.exports = {
    getAllProjectTopics
}