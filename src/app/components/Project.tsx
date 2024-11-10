import React from 'react';

const Projects: React.FC = () => {
  return (
    <section className="project-section">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Project 1</h3>
          <p>
           Resume Building <hr />
           This is a simple frontend project built using HTML, CSS & typescript.
          </p>
          <a href="#" className="btn">View Project</a>
        </div>

        <div className="project-item">
          <h3>Project 2</h3>
          <p>
          Editable Resume Building <hr />
          This is a simple frontend project built using HTML, CSS, typescript , tailwind.css & Next.js.
          </p>
          <a href="#" className="btn">View Project</a>
        </div>

        <div className="project-item">
          <h3>Project 3</h3>
          <p>
          E-Commerce Website <hr />
          This is a multipage project built using HTML, CSS, typescript , tailwind.css & Next.js.
          </p>
          <a href="#" className="btn">View Project</a>
        </div>

        <div className="project-item">
          <h3>Project 4</h3>
          <p>
         Portfolio <hr />
          This is a colorful graphically frontend project built using HTML, CSS, typescript , tailwind.css & Next.js.
          </p>
          <a href="#" className="btn">View Project</a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
