import './projects.css';

import { useState } from 'react';

const myProjects = [
  {
    name: 'Project 1',
    description: 'This is a description of project 1.',
    category: 'front',
    image: 'https://picsum.photos/200/300',
    },
    {
      name: 'Project 2',
      description: 'This is a description of project 2.',
      category: 'back',
      image: 'https://picsum.photos/200/301',
      },
      {
        name: 'Project 3',
        description: 'This is a description of project 3.',
        category: 'full',
        image: 'https://picsum.photos/200/302',
        },
        {
          name: 'Project 4',
          description: 'This is a description of project 3.',
          category: 'full',
          image: 'https://picsum.photos/200/302',
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
              <img src="https://picsum.photos/300/200" alt="Card image cap"/>
              <div className='tags'>
                <span>Html</span>
                <span>css</span>
                <span>javascript</span>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <div className="alinks">
                <a href="#" className='icon-github'></a>
                <a href="#" className='icon-github'></a>
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