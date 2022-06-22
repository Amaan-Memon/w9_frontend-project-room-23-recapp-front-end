import express from 'express';
import cors from "cors";
const PORT = process.env.port || 5500;
const app = express()
import glossaryRouter from './routes/glossaryRouter.js';
import resourcesRouter from './routes/resourcesRouter.js'

//this unpacks our jsons for us VERY IMPORTANT 
app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
    res.json({
      success: true,
      message: "Test route up and running!",
    });
  });

app.use('/glossary',glossaryRouter)
app.use('/resources', resourcesRouter)
  
app.listen(PORT, function(){
      console.log(`server is listening on port ${PORT}`)
  })