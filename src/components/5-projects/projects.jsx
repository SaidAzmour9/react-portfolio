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
    image: '/passgen.webp',
    link: 'https://legendary-torrone-1b088a.netlify.app/',
    github: 'https://github.com/SaidAzmour9/passgen',
    tags: ['html', 'tailwindcss', 'jquery'],
  },
  {
    name: 'MyCourses backend',
    description: 'A backend API for managing courses, students, teachers, and payments.',
    category: 'back',
    image: '/API.jpg',
    link: '',
    github: 'https://github.com/SaidAzmour9/mycourses_backend',
    tags: ['NodeJs', 'Express', 'Prisma'],
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
  {
    name: 'Portfolio',
    description: 'A personal portfolio website showcasing my projects and skills.',
    category: 'front',
    image: '/portfolio.png',
    link: 'https://saidazmour9.github.io/portfolio/',
    github: 'https://github.com/SaidAzmour9/portfolio',
    tags: ['html', 'css', 'Reactjs'],
  },
  {
    name: 'Notes management api',
    description: 'A simple REST API for managing notes, users and authentication.',
    category: 'back',
    image: '/courback.webp',
    link: '',
    github: 'https://github.com/SaidAzmour9/notes-api',
    tags: ['NodeJs', 'Express', 'Prisma'],
  },
  {
    name: 'Youtube playlist Downloader',
    description: 'A simple web app that allows users to download YouTube playlists.',
    category: 'back',
    image: '/youtubedown.jpeg',
    link: '',
    github: 'https://github.com/SaidAzmour9/youtube-downloader',
    tags: ['Python']
  },
  {
    name: 'flustter Blog',
    description: 'A flustter app that allows users to create and share blog posts.',
    category: 'full',
    image: '/flustter.png',
    link: 'https://flustter.com',
    github: 'https://github.com/SaidAzmour9/flutter_arabic_blog',
    tags: ['html/css', 'Bootstrap','Django']
  },
  {
    name: 'Aga Job',
    description: 'A simple web app that allows users to search for jobs in Agadir.',
    category: 'full',
    image: '/agajob.jpg',
    link: 'https://agadir-jobs.netlify.app/',
    github: 'https://github.com/SaidAzmour9/agadir-jobs',
    tags: ['html/css', 'Bootstrap', 'Django']
  }
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
