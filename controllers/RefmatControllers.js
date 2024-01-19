const Refmat=require('../models/RefmatModel');

// CRUD Operations



 const createNewRefmat = async (req, res) => {
   try {
         const id=req.body.id
         const result = await Refmat.create({
             link: req.body.link
         });
         res.status(200).json({'message': 'Reference material added successfully'})
     } catch (error) {
         res.status(500).json({ error: error.message });
     }
 }



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
    createNewRefmat,
    deleteRefmat
}