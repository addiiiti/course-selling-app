const express = require('express')
const app = express()//creates an instance of express app
const port = 3000

app.post("/user/signup",(req,res)=>{
  res.json(
    {
      message: "signup endpoint"
    }
  )
})

app.post("/user/signin",(req,res)=>{
  res.json(
    {
      message: "signin endpoint"
    }
  )
})
app.get("/user/purchases",(req,res)=>{
  res.json(
    {
      message: "purchases endpoint"
    }
  )
})
app.post("/user/purchase",(req,res)=>{
  res.json(
    {
      //user will have to pay for the course
      message: "purchase endpoint"
    }
  )
})

app.get("/courses", (req, res) => {
  res.send('Hello! here are your courses')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

