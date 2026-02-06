const express = require('express')
const app = express()//creates an instance of express app
const {userRouter}=require("./routes/user");
const {courseRouter}=require("./routes/course");
const port = 3001
app.use(express.json());
app.use("/user", userRouter);
app.use("/course",courseRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

