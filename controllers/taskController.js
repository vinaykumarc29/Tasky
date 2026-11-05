// import tasks from '../data/tasks.js';
import Task from '../models/task.js';

export const addTask = async (req, res) => {
    try {
        const { task } = req.body;
        if (task.trim().length == 0) {
            return res.status(400).json({ message: "Task Cannot be empty !!" });
        }
        const newTask = new Task({ task });
        await newTask.save();
        return res.status(201).json({ message: "Task created successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        return res.status(200).json({ data: tasks, message: "tasks Successfully fetched !!" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getTask = async (req, res) => {
    try {
        const { id } = req.params;

        const task = await Task.findById(id);

        if (!task) return res.status(404).json({ message: "Invalid Task Id" });

        return res.status(200).json({ data: task });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateTask = async (req, res) => {
    try {
        let { task } = req.body;
        const { id } = req.params;

        if (task.trim().length == 0) {
            return res.status(400).json({ message: "Task Cannot be empty !!" });
        }

        let requiredTask = await Task.findByIdAndUpdate(id, { task }, { new: true });

        if (!requiredTask) return res.status(404).json({ message: "Invalid Task Id" });

        return res.status(201).json({ message: "Task updated Successfully !!", data: requiredTask });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;

        const task = await Task.findByIdAndDelete(id);

        if (!task) return res.status(404).json({ message: "Invalid Task Id" });

        return res.status(200).json({ message: "Task deleted sucessfully !!" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
