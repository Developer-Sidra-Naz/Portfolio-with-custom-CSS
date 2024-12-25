import React from 'react';

const Projects: React.FC = () => {
  return (
    <section className="project-section">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Project 1</h3>
          <p>
           Multipage <hr />
           This is a simple frontend project built using HTML, CSS & typescript, Next.js.
          </p>
          <a href="https://multipage-pakwheel-9k5k.vercel.app/" className="btn">View Project</a>
        </div>

        <div className="project-item">
          <h3>Project 2</h3>
          <p>
          Editable Resume Building <hr />
          This is a simple frontend project built using HTML, typescript , tailwind.css & Next.js.
          </p>
          <a href="https://editable-resume-xi-ten.vercel.app/" className="btn">View Project</a>
        </div>

        <div className="project-item">
          <h3>Project 3</h3>
          <p>
          Portfolio <hr />
          This is a colorful graphically frontend project built using HTML, typescript , tailwind.css & Next.js with projectlinks.
          </p>
          <a href="https://my-portfolio-gncr.vercel.app/" className="btn">View Project</a>
        </div>

        <div className="project-item">
          <h3>Project 4</h3>
          <p>
         UI/UX Hackathon <hr />
          Responsive project built using HTML, typescript, tailwind.CSS,React.js, Next.js, ShadcnUI with figma template.
          </p>
          <a href="https://hackathonq2-ecru.vercel.app/" className="btn">View Project</a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
