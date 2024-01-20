const Refmat=require('../models/RefmatModel');

// CRUD Operations


const getAllReferences = async (req, res) => {
    try {
        let references = await Refmat.find();
        if(!references) return res.status(204).json({'message': 'No references found'});
        res.json(references);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


 const createNewRefmat = async (req, res) => {
     let { references} = req.body;
   
     try {
   
       // Create a new subject
       let newReference = await Refmat.create({
          references
       });
   
       const data = {
         success: true,
         message: "Reference material added!",
       };
   
       // Save the newly created subject
       await newReference.save();
   
       res.json(data);
     } catch (error) {
       console.error(error);
       res.status(500).json({ success: false, message: "Internal Server Error" });
     }
   };



 const deleteRefmat = async (req, res) => {

     try {
         const id = req.params.id;
         const refmat = await Refmat.findById(id);
         const result = await Refmat.findByIdAndDelete(id);
         res.status(200).json({'message': 'Reference material deleted successfully'});
     } catch (error) {
         res.status(500).json({ error: error.message });
     }
 }




module.exports = {
    getAllReferences,
    createNewRefmat,
    deleteRefmat
}