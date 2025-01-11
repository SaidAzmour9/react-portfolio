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
    tags : ['html','css', 'javascript']
  },
  {
    name: 'Todo list',
    description: 'A simple todo list application that allows users to add, remove, and mark tasks completed',
    category: 'front',
    image: '/todo.png',
    link: 'https://maradskrgh.netlify.app/',
    github: 'https://github.com/SaidAzmour9/todo-list-app',
    tags : ['html','css', 'javascript']
  },
  {
    name: 'Password generator',
    description: 'A password generator that generates a random password based on user choice.',
    category: 'front',
    image: '/pass.png',
    link: 'https://legendary-torrone-1b088a.netlify.app/',
    github: 'https://github.com/SaidAzmour9/passgen',
    tags : ['html','tailwindcss', 'jquery']
  },
  {
    name: 'Team landing page',
    description: 'A landing page for a fictional company that provides team collaboration tools.',
    category: 'front',
    image: '/team.png',
    link: 'https://teampage-tailwind.netlify.app/',
    github: 'https://github.com/SaidAzmour9/team-page',
    tags : ['html','tailwindcss']
  },
   
]


function Projects() {
  const [currentActive, setCurrentActive] = useState('all');
  const [projects, setProjects] = useState(myProjects);
  return (
      <section className='projects flex'>
        <section className='flex left-section'>
          <button onClick={() =>{
             setCurrentActive('all');
             setProjects(myProjects);
            }
          } className={currentActive=== "all"?"active": null}>all projects</button>
          <button  onClick={() =>{
             setCurrentActive('front');
            const newArr = myProjects.filter((item)=>{
              return item.category === 'front';
            })
             setProjects(newArr);
          }
          } className={currentActive=== "front"?"active": null}>Frontend projects</button>
          <button onClick={
            () => {setCurrentActive('back');
              const newArr = myProjects.filter((item)=>{
                return item.category === 'back';
                })
                setProjects(newArr);
                }
          } className={currentActive=== "back"?"active": null}>Backend projects</button>
          <button onClick={
            () => {setCurrentActive('full');
              const newArr = myProjects.filter((item)=>{
                return item.category === 'full';
                })
                setProjects(newArr);
                }
          } className={currentActive=== "full"?"active": null}>Full stack</button>

        </section>
        <section className='cards flex'>
          {projects.map((item)=>{
          return (
            <div className="card" key={item.image}>
            <div className="card-img">
              <img src={item.image} alt="Card image cap"/>
              <div className='tags'>
              {item.tags && item.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <div className="alinks">
              <a href={item.github} className='icon-github' target="_blank" rel="noopener noreferrer"></a>
                <a href={item.link} className='icon-chain' target="_blank" rel="noopener noreferrer"></a>
              </div>
            </div>
            </div>
          
          )
          })}
          
          
        </section>
      </section>
  )
}

export default Projects 