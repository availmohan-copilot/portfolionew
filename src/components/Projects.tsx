import './Projects.css'

function Projects() {
  const projects = [
    {
      title: 'Project One',
      description: 'A modern web application built with React and TypeScript',
    },
    {
      title: 'Project Two',
      description: 'An innovative solution using cutting-edge technologies',
    },
    {
      title: 'Project Three',
      description: 'A responsive design that works seamlessly across all devices',
    },
  ]

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
