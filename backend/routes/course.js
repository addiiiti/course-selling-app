const { Router}=require("express");
const courseRouter =Router();


courseRouter.post("/user/purchase",(req,res)=>{
  res.json(
    {
      //user will have to pay for the course
      message: "purchase endpoint"
    }
  )
})

courseRouter.get("/courses", (req, res) => {
  res.send('Hello! here are your courses')
})
module.exports ={
  courseRouter: courseRouter
}