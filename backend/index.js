const express = require('express')
const app = express()//creates an instance of express app
const {userRouter}=require("./routes/user");
const {courseRouter}=require("./routes/course");
const {adminRouter}=require("./routes/admin");
const connectDB = require("./db/connectDB");
require("dotenv").config();
const port = 3001
app.use(express.json());
connectDB();
app.use("/api/v1/user", userRouter);
app.use("/api/v1/course",courseRouter);
app.use("/api/v1/admin",adminRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

