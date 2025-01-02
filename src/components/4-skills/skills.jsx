import './skills.css';

function Skills() {
  return (
      <div className='' id='skills'>
        <div className="skills">
          <h2>Professional Skills</h2>
          <div className="skillset">
            <div className='relative'>
              <i className='icon-css3'></i>
              <span className='skill-name'>css</span>
            </div>
            <div className='relative'>
              <i className='icon-html5'></i>
              <span className='skill-name'>html</span>
            </div>
            <div className="relative">
            <i className='icon-tailwindcss'></i>
            <span className='skill-name'>tailwindCss</span>
            </div>
            <div className="relative">
              <i className='icon-javascript'></i>
              <span className='skill-name'>javascript</span>
            </div>
            <div>
              <i className='icon-react'></i>
              <span className='skill-name'>react</span>
            </div>
            <div className="relative">
            <i className='icon-node-dot-js'></i>
            <span className='skill-name'>nodeJs</span>
            </div>
            <div className="relative">
              <i className='icon-mongodb'></i>
              <span className='skill-name'>mongodb</span>
            </div>
            <div className="relative">
              <i className='icon-python'></i>
              <span className='skill-name'>python</span>
            </div>
            <div className="relative">
            <i className='icon-django'></i>
            <span className='skill-name'>django</span>
            </div>
            <div className="relative">
              <i className='icon-flask'></i>
              <span className='skill-name'>flask</span>
            </div>
            <div className="relative">
              <i className='icon-postgresql'></i>
              <span className='skill-name'>postgresql</span>
            </div>
            
            

             
          </div>

        </div>
        <div className="skills tools">
          <h2>Tools</h2>
          <div className="skillset">
            <div className="relative">
                <i className='icon-git'></i>
                <span className='skill-name'>git</span>
            </div>
            <div className="relative">
              <i className="icon-github"></i>
              <span className='skill-name'>github</span>
            </div>
            <div className="relative">
              <i className="icon-heroku"></i>
              <span className='skill-name'>heroku</span>
            </div>
            <div className="relative">
              <i className='icon-postman'></i>
              <span className='skill-name'>postman</span>
            </div>
            <div className="relative">
              <i className='icon-visualstudiocode'></i>
              <span className='skill-name'>vscode</span>
            </div> 
            <div className="relative">
              <i className="icon-amazonaws"></i>
              <span className='skill-name'>aws</span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Skills