import express from 'express';
import taskRoutes from './routes/taskRoutes.js'
import dotenv from 'dotenv';
import cors from 'cors';
import {connectDb} from './config/db.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

connectDb();
app.use(cors());
app.use(express.json());
app.use('/api/task',taskRoutes);


app.get('/',(req,res)=>{
    res.json({message:"Server is working visit /docs for API end point documentation",});
});

app.get('/docs',(req,res)=>{
    res.json({message:"Documentation for the API", description: "This is the documentation for the API.", endpoints: [
        { method: "GET", path: "/api/task/", description: "Get all tasks" },
        { method: "POST", path: "/api/task/", description: "Create a new task" },
        { method: "GET", path: "/api/task/:id", description: "Get a specific task by ID" },
        { method: "PATCH", path: "/api/task/:id", description: "Update a specific task by ID" },
        { method: "DELETE", path: "/api/task/:id", description: "Delete a specific task by ID" }
    ]});
})

app.listen(PORT,()=>{
    console.log(`server started at ${PORT} port`)
});
