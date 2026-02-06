const {Router}=require("express");
const adminRouter=Router();
adminRouter.post("/signup",(req,res)=>{
  res.json({
    message: "admin signup endpoint"
  })
})

adminRouter.post("/signin",(req,res)=>{
  res.json({
    message: "admin signin endpoint"
  })
})

adminRouter.post("/course",(req,res)=>{
  res.json({
    message: "create course endpoint"
  })
})

adminRouter.put("/signup",(req,res)=>{
  res.json({
    message: "changes in any course details endpoint"
  })
})
adminRouter.get("/course/bulk",(req,res)=>{
  res.json({
    message: "all the courses endpoint"
  })
})
module.exports={
  adminRouter: adminRouter
}