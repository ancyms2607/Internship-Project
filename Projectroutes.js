const express=require('express');
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));


const ProjectModel=require('../model/ProjectModel')


router.get('/',async(req,res)=>{
    try {
        const data=await ProjectModel.find();
        console.log(data);
        res.status(200).send(data); 
    } catch (error) {
        res.status(404).send({error:'Data not received'});   
    }
}
)

router.put('/edit:id',async(req,res)=>{
    const id=req.params.id
    const updatedData=req.body;
    const updateItem= await ProjectModel.findByIdAndUpdate(id,
      {$set : updatedData},
      {new:true});
      try {
          res.status(200).json({success:true,data:updateItem})
      } catch (error) {
          res.status(203).json({success:false,data:'Update failed'})
      }
  })

  router.delete('/remove/:id',async(req,res)=>{
    const id=req.params.id
    const deleteData=await ProjectModel.findByIdAndDelete(id);
    console.log(deleteData);
    try {
        res.status(200).send({success:true});
    } catch (error) {
        res.status(203).send({success:false,error:'No Data'})
    }
})



module.exports=router;