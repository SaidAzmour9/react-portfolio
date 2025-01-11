import './projects.css';

import { useState } from 'react';

const myProjects = [
  {
    name: 'Rezilla landing page',
    description: 'A landing page for a fictional company Assisting individuals in locating the appropriate real estate.',
    category: 'front',
    image: '/rezilla.png',
    link: 'https://rezilla-chi.vercel.app/',
    github: 'https://github.com/SaidAzmour9/rezilla',
    tags: ['html', 'css', 'javascript'],
  },
  {
    name: 'Todo list',
    description: 'A simple todo list application that allows users to add, remove, and mark tasks completed.',
    category: 'front',
    image: '/todo.png',
    link: 'https://maradskrgh.netlify.app/',
    github: 'https://github.com/SaidAzmour9/todo-list-app',
    tags: ['html', 'css', 'javascript'],
  },
  {
    name: 'Password generator',
    description: 'A password generator that generates a random password based on user choice.',
    category: 'front',
    image: '/pass.png',
    link: 'https://legendary-torrone-1b088a.netlify.app/',
    github: 'https://github.com/SaidAzmour9/passgen',
    tags: ['html', 'tailwindcss', 'jquery'],
  },
  {
    name: 'MyCourses backend',
    description: 'A backend API for managing courses, students, teachers, and payments.',
    category: 'back',
    image: '/courback.webp',
    link: '',
    github: 'https://github.com/SaidAzmour9/mycourses_backend',
    tags: ['Node.js', 'Express', 'PrismaORM'],
  },
  {
    name: 'BeautyHaven',
    description: 'BeautyHaven is a Flask-based web app offering personalized cosmetics recommendations using machine learning.',
    category: 'full',
    image: '/cosme.jpg',
    link: '',
    github: 'https://github.com/SaidAzmour9/beautyHaven',
    tags: ['html/css', 'bootstrap', 'flask'],
  },
];

function Projects() {
  const [currentActive, setCurrentActive] = useState('all');
  const [projects, setProjects] = useState(myProjects);

  const filterProjects = (category) => {
    setCurrentActive(category);
    if (category === 'all') {
      setProjects(myProjects);
    } else {
      const filtered = myProjects.filter((item) => item.category === category);
      setProjects(filtered);
    }
  };

  return (
    <section className='projects flex'>
      {/* Filter Buttons */}
      <section className='flex left-section'>
        {['all', 'front', 'back', 'full'].map((category) => (
          <button
            key={category}
            onClick={() => filterProjects(category)}
            className={currentActive === category ? 'active' : null}
            aria-pressed={currentActive === category}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)} projects
          </button>
        ))}
      </section>

      {/* Project Cards */}
      <section className='cards flex'>
        {projects.map((item) => (
          <div className="card" key={item.name}>
            <div className="card-img">
              <img src={item.image} alt={`${item.name} screenshot`} />
              <div className='tags'>
                {item.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <div className="alinks">
                <a
                  href={item.github}
                  className='icon-github'
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub Repository"
                ></a>
                {item.link && (
                  <a
                    href={item.link}
                    className='icon-chain'
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Demo"
                  ></a>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}

export default Projects;
