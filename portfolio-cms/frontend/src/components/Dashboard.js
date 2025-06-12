import React, { useState } from 'react';
import ProjectForm from './ProjectForm';
import ProjectList from './ProjectList';
import BlogForm from './BlogForm';
import BlogList from './BlogList';

const Dashboard = () => {
  const [refreshProjects, setRefreshProjects] = useState(false);
  const [refreshBlogs, setRefreshBlogs] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">CMS Dashboard</h1>

      {/* PROJECTS SECTION */}
      <section className="mb-5" id="projects-section">
        <h2 className="mb-4 text-primary">Projects</h2>
        <div className="row">
          <div className="col-md-5">
            <div className="card p-4 shadow-sm">
              <ProjectForm
                selectedProject={selectedProject}
                setSelectedProject={setSelectedProject}
                onProjectChange={() => setRefreshProjects(!refreshProjects)}
              />
            </div>
          </div>
          <div className="col-md-7">
            <div className="card p-4 shadow-sm">
              <ProjectList
                selectedProject={selectedProject}
                setSelectedProject={setSelectedProject}
                refreshProjects={refreshProjects}
              />
            </div>
          </div>
        </div>
      </section>

      {/* BLOGS SECTION */}
      <section className="mb-5" id="blogs-section">
        <h2 className="mb-4 text-success">Blogs</h2>
        <div className="row">
          <div className="col-md-5">
            <div className="card p-4 shadow-sm">
              <BlogForm
                selectedBlog={selectedBlog}
                setSelectedBlog={setSelectedBlog}
                onBlogChange={() => setRefreshBlogs(!refreshBlogs)}
              />
            </div>
          </div>
          <div className="col-md-7">
            <div className="card p-4 shadow-sm">
              <BlogList
                selectedBlog={selectedBlog}
                setSelectedBlog={setSelectedBlog}
                refreshBlogs={refreshBlogs}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
