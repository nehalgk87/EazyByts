const Project = require('../models/Project');

// Create Project
const createProject = async (req, res) => {
  try {
    const { title, description, imageUrl, techStack, link } = req.body;
    const project = new Project({ title, description, imageUrl, techStack, link });
    await project.save();
    res.status(201).json({ msg: "Project created successfully ✅" });
  } catch (err) {
    res.status(500).json({ error: "Error creating project" });
  }
};

// Get All Projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Error fetching projects" });
  }
};

// Update Project
const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, imageUrl, techStack, link } = req.body;
    const updated = await Project.findByIdAndUpdate(id, { title, description, imageUrl, techStack, link }, { new: true });
    if (!updated) return res.status(404).json({ error: "Project not found" });
    res.json({ msg: "Project updated successfully ✅" });
  } catch (err) {
    res.status(500).json({ error: "Error updating project" });
  }
};

// Delete Project
const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Project.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: "Project not found" });
    res.json({ msg: "Project deleted successfully 🗑️" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting project" });
  }
};

module.exports = { createProject, getProjects, updateProject, deleteProject };
